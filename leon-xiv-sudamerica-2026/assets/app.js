(() => {
  "use strict";
  const V = window.VIAJE;
  const $ = (s, r = document) => r.querySelector(s);
  const css = getComputedStyle(document.documentElement);
  const color = (pais) => css.getPropertyValue(V.paises[pais].color).trim();

  // ── Preparar actos
  const actos = V.actos.map((a, i) => ({
    ...a,
    id: `a${i}`,
    instante: new Date(`${a.fecha}T${a.hora}:00${a.tz}`),
    clave: a.coords.join(",")
  }));
  const ahora = new Date();
  const hoyISO = new Intl.DateTimeFormat("en-CA", { year: "numeric", month: "2-digit", day: "2-digit" }).format(ahora);
  const proximo = actos.find(a => a.instante > ahora);

  // ── Estado de filtros
  const estado = {
    paises: new Set(Object.keys(V.paises)),
    tipo: "",
    sinTraslados: false,
    miHora: false
  };
  const visible = (a) =>
    estado.paises.has(a.pais) &&
    (!estado.tipo || a.tipo === estado.tipo) &&
    !(estado.sinTraslados && a.tipo === "traslado");

  // ── Utilidades de fecha
  const fechaUTC = (iso) => new Date(`${iso}T12:00:00Z`);
  const fmtSem = new Intl.DateTimeFormat("es", { weekday: "long", timeZone: "UTC" });
  const fmtSemCorta = new Intl.DateTimeFormat("es", { weekday: "short", timeZone: "UTC" });
  const fmtMiHora = new Intl.DateTimeFormat("es", { hour: "2-digit", minute: "2-digit", hour12: false });
  const fmtMiDia = new Intl.DateTimeFormat("es", { day: "numeric", month: "short" });
  const lista = new Intl.ListFormat("es", { style: "long", type: "conjunction" });
  const mayus = (s) => s.charAt(0).toUpperCase() + s.slice(1);
  const miZona = Intl.DateTimeFormat().resolvedOptions().timeZone;

  const dias = [...new Set(actos.map(a => a.fecha))];
  const porDia = Object.fromEntries(dias.map(d => [d, actos.filter(a => a.fecha === d)]));

  const banda = (d) => {
    const ps = [...new Set(porDia[d].map(a => a.pais))].map(color);
    return ps.length === 1 ? ps[0] : `linear-gradient(135deg, ${ps[0]} 50%, ${ps[1]} 50%)`;
  };

  // ── Rosario (los 12 días)
  $("#rosario").innerHTML = dias.map(d => {
    const n = Number(d.slice(8));
    const cls = d < hoyISO ? "pasado" : d === hoyISO ? "hoy" : "";
    const ciudades = lista.format([...new Set(porDia[d].map(a => a.ciudad))]);
    return `<li class="${cls}"><a href="#d-${n}" title="${mayus(fmtSem.format(fechaUTC(d)))} ${n}: ${ciudades}">
      <span class="cuenta" style="background:${banda(d)}">${n}</span>
      <span class="dia-sem">${fmtSemCorta.format(fechaUTC(d)).replace(".", "")}</span></a></li>`;
  }).join("");

  // ── Lemas
  $("#lemas").innerHTML = Object.entries(V.paises).filter(([, p]) => p.lema).map(([k, p]) =>
    `<li><span class="punto" style="background:${color(k)}"></span><span>${p.nombre}: <em>«${p.lema}»</em></span></li>`
  ).join("");

  // ── Controles
  $("#chips-pais").innerHTML = Object.entries(V.paises).map(([k, p]) =>
    `<button type="button" class="chip" data-pais="${k}" aria-pressed="true"><span class="punto" style="background:${color(k)}"></span>${p.nombre}</button>`
  ).join("");
  $("#sel-tipo").insertAdjacentHTML("beforeend",
    Object.entries(V.tipos).map(([k, t]) => `<option value="${k}">${t}</option>`).join(""));

  $("#chips-pais").addEventListener("click", (e) => {
    const b = e.target.closest(".chip"); if (!b) return;
    const k = b.dataset.pais;
    estado.paises.has(k) ? estado.paises.delete(k) : estado.paises.add(k);
    if (!estado.paises.size) Object.keys(V.paises).forEach(p => estado.paises.add(p));
    document.querySelectorAll(".chip").forEach(c => c.setAttribute("aria-pressed", estado.paises.has(c.dataset.pais)));
    render();
  });
  $("#sel-tipo").addEventListener("change", e => { estado.tipo = e.target.value; render(); });
  $("#chk-traslados").addEventListener("change", e => { estado.sinTraslados = e.target.checked; render(); });
  $("#chk-mihora").addEventListener("change", e => { estado.miHora = e.target.checked; render(); });

  // ── Cronología
  function horaActo(a) {
    if (!estado.miHora) return `${a.hora}<small>hora local</small>`;
    const dia = fmtMiDia.format(a.instante);
    return `${fmtMiHora.format(a.instante)}<small>${dia}</small>`;
  }

  function render() {
    const vis = actos.filter(visible);
    $("#estado").textContent = estado.miHora
      ? `${vis.length} actos. Horarios en tu zona (${miZona}).`
      : `${vis.length} de ${actos.length} actos. Horarios locales de cada ciudad.`;

    $("#cronologia").innerHTML = dias.map(d => {
      const items = porDia[d].filter(visible);
      const n = Number(d.slice(8));
      const ciudades = lista.format([...new Set(porDia[d].map(a => a.ciudad))]);
      const ps = [...new Set(porDia[d].filter(a => a.pais !== "VA").map(a => V.paises[a.pais].nombre))];
      const paises = ps.length ? ` (${lista.format(ps)})` : "";
      return `<section class="dia${d === hoyISO ? " es-hoy" : ""}" id="d-${n}" style="--banda:${banda(d)}">
        <div class="dia-cab">
          <span class="dia-num">${n}</span>
          <div><h2>${mayus(fmtSem.format(fechaUTC(d)))} de noviembre</h2><p>${ciudades}${paises}</p></div>
        </div>
        ${items.length ? `<ol class="actos">${items.map(itemActo).join("")}</ol>`
                       : `<p class="vacio">Sin actos con estos filtros.</p>`}
      </section>`;
    }).join("");

    pintarMapa(vis);
  }

  function itemActo(a) {
    const cls = [a.tipo, a.instante < ahora ? "pasado" : "", proximo && a.id === proximo.id ? "proximo" : ""].join(" ");
    const textos = a.textos.map(t => `<a href="${t.url}" target="_blank" rel="noopener">${t.tipo}</a>`).join("");
    return `<li class="acto ${cls}" id="${a.id}" data-id="${a.id}" tabindex="0" style="--c:${color(a.pais)}">
      <div class="acto-hora">${horaActo(a)}</div>
      <div>
        <p class="acto-tit">${a.titulo}</p>
        <p class="acto-lugar">${a.lugar}, ${a.ciudad}</p>
        <p class="acto-meta"><span class="tipo">${V.tipos[a.tipo]}</span>${a.aprox ? "<span>Ubicación aproximada</span>" : ""}${textos}</p>
      </div>
    </li>`;
  }

  $("#cronologia").addEventListener("click", e => {
    if (e.target.closest("a")) return;
    const li = e.target.closest(".acto"); if (li) enfocar(li.dataset.id);
  });
  $("#cronologia").addEventListener("keydown", e => {
    if (e.key !== "Enter" && e.key !== " ") return;
    const li = e.target.closest(".acto"); if (!li) return;
    e.preventDefault(); enfocar(li.dataset.id);
  });

  // ── Mapa
  const oscuro = matchMedia("(prefers-color-scheme: dark)").matches;
  const mapa = L.map("mapa", { zoomControl: true, worldCopyJump: true });
  L.tileLayer(`https://{s}.basemaps.cartocdn.com/${oscuro ? "dark_all" : "light_all"}/{z}/{x}/{y}{r}.png`, {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="https://carto.com/attributions">CARTO</a>',
    subdomains: "abcd", maxZoom: 19
  }).addTo(mapa);

  // Ruta a nivel ciudad, en el orden del viaje
  const ruta = [];
  actos.forEach(a => {
    const ult = ruta[ruta.length - 1];
    if (!ult || ult.ciudad !== a.ciudad) ruta.push({ ciudad: a.ciudad, coords: a.coords });
  });
  const linea = L.polyline(ruta.map(r => r.coords), {
    color: css.getPropertyValue("--tinta-suave").trim(), weight: 1.5, dashArray: "4 6", opacity: .8
  }).addTo(mapa);
  // La ruta entre ciudades sólo tiene sentido a escala regional
  mapa.on("zoomend", () => linea.setStyle({ opacity: mapa.getZoom() > 9 ? 0 : .8 }));

  const capa = L.layerGroup().addTo(mapa);
  const marcadores = {};

  function pintarMapa(vis) {
    capa.clearLayers();
    Object.keys(marcadores).forEach(k => delete marcadores[k]);
    const grupos = {};
    vis.forEach(a => (grupos[a.clave] ||= []).push(a));
    Object.entries(grupos).forEach(([clave, gs]) => {
      const a0 = gs[0];
      const esMisa = gs.some(g => g.tipo === "misa");
      const m = L.circleMarker(a0.coords, {
        radius: esMisa ? 9 : 6,
        color: oscuro ? "#141A21" : "#fff", weight: 2,
        fillColor: color(a0.pais), fillOpacity: .95
      }).bindPopup(
        `<strong>${a0.lugar}</strong><span class="pop-meta">${a0.ciudad}${a0.aprox ? ", ubicación aproximada" : ""}</span>` +
        `<ul style="padding-left:1rem;margin:.4rem 0 0">${gs.map(g =>
          `<li><a href="#${g.id}">${Number(g.fecha.slice(8))}/11 ${g.hora}</a> ${g.titulo}</li>`).join("")}</ul>`,
        { maxWidth: 300 }
      );
      m.on("click", () => marcar(gs[0].id, false));
      m.addTo(capa);
      marcadores[clave] = m;
    });
  }

  function marcar(id, desplazar) {
    document.querySelectorAll(".acto.activo").forEach(el => el.classList.remove("activo"));
    const el = document.getElementById(id);
    if (!el) return;
    el.classList.add("activo");
    if (desplazar) el.scrollIntoView({ block: "center", behavior: matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth" });
  }

  function enfocar(id) {
    const a = actos.find(x => x.id === id);
    marcar(id, false);
    mapa.flyTo(a.coords, a.tipo === "traslado" ? 11 : 14, { duration: .8 });
    const m = marcadores[a.clave];
    if (m) setTimeout(() => m.openPopup(), 850);
    if (innerWidth <= 960) document.querySelector(".col-mapa").scrollIntoView({ behavior: "smooth" });
  }

  const sudamerica = L.latLngBounds(actos.filter(a => a.pais !== "VA").map(a => a.coords)).pad(0.12);
  const todo = L.latLngBounds(actos.map(a => a.coords)).pad(0.08);
  mapa.fitBounds(sudamerica);
  $("#btn-sudamerica").addEventListener("click", () => mapa.flyToBounds(sudamerica, { duration: .8 }));
  $("#btn-todo").addEventListener("click", () => mapa.flyToBounds(todo, { duration: .8 }));

  // ── Pie
  $("#fuentes").innerHTML = V.fuentes.map(f => `<li><a href="${f.url}" target="_blank" rel="noopener">${f.nombre}</a></li>`).join("");
  $("#actualizado").textContent = `Datos actualizados por última vez el ${Number(V.actualizado.slice(8))} de noviembre de 2026.`;

  render();

  // Al cargar, llevar al día de hoy si el viaje está en curso y no hay ancla
  if (!location.hash && hoyISO >= V.desde && hoyISO <= V.hasta) {
    const d = document.getElementById(`d-${Number(hoyISO.slice(8))}`);
    if (d) requestAnimationFrame(() => d.scrollIntoView({ block: "start" }));
  } else if (location.hash) {
    const d = document.getElementById(location.hash.slice(1));
    if (d) requestAnimationFrame(() => d.scrollIntoView({ block: "start" }));
  }
})();
