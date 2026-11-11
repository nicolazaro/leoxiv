# León XIV en Sudamérica

Cronología y mapa del Viaje Apostólico de León XIV a Uruguay, Argentina y Perú (6 al 17 de noviembre de 2026), acto por acto, según el programa oficial difundido por la Oficina de Prensa de la Santa Sede el 21 de septiembre de 2026.

Sitio estático, sin compilación ni dependencias locales: HTML, CSS y JavaScript plano. Se publica directamente con GitHub Pages.

## Estructura

```
index.html            Página
assets/style.css      Estilos (modo claro y oscuro)
assets/app.js         Cronología, filtros y mapa
data/itinerario.js    Datos del viaje: lo único que hace falta editar
.nojekyll             Evita que GitHub Pages procese el sitio con Jekyll
```

## Publicar en GitHub Pages

1. Crear un repositorio nuevo (por ejemplo `leon-xiv-sudamerica-2026`) y subir estos archivos a la rama `main`.
2. En el repositorio: Settings, Pages. En «Build and deployment», elegir «Deploy from a branch», rama `main`, carpeta `/ (root)`.
3. A los pocos minutos el sitio queda en `https://<usuario>.github.io/leon-xiv-sudamerica-2026/`.

Desde la terminal:

```bash
git init
git add .
git commit -m "Cronología del viaje de León XIV a Sudamérica"
git branch -M main
git remote add origin https://github.com/<usuario>/leon-xiv-sudamerica-2026.git
git push -u origin main
```

Para verlo en local alcanza con abrir `index.html` en el navegador (los datos se cargan como script, no con `fetch`, así que funciona también desde `file://`).

## Editar los datos

Todo está en `data/itinerario.js`. Cada acto tiene esta forma:

```js
{ fecha: "2026-11-09", hora: "11:30", tz: "-03:00", pais: "AR", ciudad: "Buenos Aires",
  tipo: "misa", titulo: "Santa Misa", lugar: "Monumento de los Españoles, Palermo",
  coords: [-34.5750, -58.4155],
  textos: [ { tipo: "Homilía", url: "https://www.vatican.va/..." } ] }
```

- `hora` es hora local del lugar; `tz` es el desfase UTC en noviembre de 2026 (Roma +01:00, Uruguay y Argentina −03:00, Perú −05:00). Con eso el sitio calcula qué actos ya ocurrieron, cuál es el próximo y la opción «Ver en mi hora».
- `tipo`: `misa`, `oracion`, `encuentro`, `visita`, `ceremonia`, `traslado` o `privado`.
- `aprox: true` marca coordenadas aproximadas. Conviene revisarlas antes de citar el mapa.
- `textos` está vacío en todos los actos: es el lugar para enlazar homilías, discursos y saludos a medida que la Santa Sede los publique en vatican.va. Cada enlace aparece debajo del acto.
- Al actualizar, cambiar también `actualizado` al comienzo del archivo.

## Fuentes

- Vatican News, «Así será el Viaje Apostólico de León XIV a Uruguay, Argentina y Perú» (21/09/2026).
- Sala Stampa della Santa Sede, programa oficial del viaje (21/09/2026).
- ACI Prensa / EWTN News, programa completo del viaje (21/09/2026).
- Sitio oficial de la visita a Uruguay: papaleonuruguay.uy.

El programa puede modificarse durante el viaje; este sitio reproduce el anunciado.

## Créditos técnicos

Mapa con [Leaflet](https://leafletjs.com/) y teselas de [CARTO](https://carto.com/) sobre datos de [OpenStreetMap](https://www.openstreetmap.org/copyright). Tipografías Alegreya y Alegreya Sans (Huerta Tipográfica) vía Google Fonts.
