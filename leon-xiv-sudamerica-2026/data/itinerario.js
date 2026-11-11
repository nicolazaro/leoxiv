/*
 * Itinerario del Viaje Apostólico de León XIV a Uruguay, Argentina y Perú
 * 6–17 de noviembre de 2026
 *
 * Fuente base: programa oficial difundido por la Oficina de Prensa de la Santa Sede
 * el 21 de septiembre de 2026 (reproducido por Vatican News y ACI Prensa/EWTN News).
 *
 * Cómo editar:
 *  - Cada acto es un objeto en `actos`. Los horarios son HORA LOCAL del lugar;
 *    el campo `tz` es el desfase UTC de ese lugar en noviembre de 2026.
 *  - `coords` son [latitud, longitud]. Si `aprox: true`, la ubicación es aproximada
 *    y conviene verificarla antes de citarla.
 *  - `textos` está vacío a propósito: sirve para enlazar homilías, discursos y saludos
 *    a medida que la Santa Sede los publique. Formato:
 *      { tipo: "Homilía", url: "https://www.vatican.va/..." }
 */

window.VIAJE = {
  titulo: "León XIV en Sudamérica",
  subtitulo: "Viaje Apostólico a Uruguay, Argentina y Perú",
  desde: "2026-11-06",
  hasta: "2026-11-17",
  actualizado: "2026-11-10",

  paises: {
    VA: { nombre: "Roma", color: "--c-roma", lema: null },
    UY: { nombre: "Uruguay", color: "--c-uy", lema: "Les anuncio una gran alegría" },
    AR: { nombre: "Argentina", color: "--c-ar", lema: "Bienvenidos todos. Vayan y anuncien" },
    PE: { nombre: "Perú", color: "--c-pe", lema: "Abramos el corazón" }
  },

  tipos: {
    misa: "Misa",
    oracion: "Oración",
    encuentro: "Encuentro",
    visita: "Visita",
    ceremonia: "Ceremonia",
    traslado: "Traslado",
    privado: "Privado"
  },

  fuentes: [
    { nombre: "Vatican News — Así será el Viaje Apostólico (21/09/2026)", url: "https://www.vaticannews.va/es/papa/news/2026-09/programa-oficial-viaje-apostolico-uruguay-argentina-peru.html" },
    { nombre: "Sala Stampa della Santa Sede — Programa oficial", url: "https://press.vatican.va/content/salastampa/it/bollettino/pubblico/2026/09/21/0736/01738.html#spagnolo" },
    { nombre: "ACI Prensa / EWTN News — Programa completo", url: "https://www.ewtnnews.com/es/vaticano/programa-viaje-papa-leon-xiv-uruguay-argentina-peru" },
    { nombre: "Sitio oficial de la visita a Uruguay", url: "https://papaleonuruguay.uy/" }
  ],

  actos: [
    // ───────── Viernes 6 · Roma → Montevideo
    { fecha: "2026-11-06", hora: "07:00", tz: "+01:00", pais: "VA", ciudad: "Roma", tipo: "traslado",
      titulo: "Salida en avión hacia Montevideo", lugar: "Aeropuerto internacional de Roma/Fiumicino", coords: [41.8003, 12.2389] },
    { fecha: "2026-11-06", hora: "16:30", tz: "-03:00", pais: "UY", ciudad: "Montevideo", tipo: "ceremonia",
      titulo: "Llegada y acogida oficial", lugar: "Aeropuerto internacional de Montevideo-Carrasco «General Cesáreo L. Berisso»", coords: [-34.8384, -56.0308] },
    { fecha: "2026-11-06", hora: "17:30", tz: "-03:00", pais: "UY", ciudad: "Montevideo", tipo: "ceremonia",
      titulo: "Ceremonia de bienvenida", lugar: "Plaza Independencia", coords: [-34.9065, -56.1997] },
    { fecha: "2026-11-06", hora: "17:45", tz: "-03:00", pais: "UY", ciudad: "Montevideo", tipo: "encuentro",
      titulo: "Encuentro con las autoridades, la sociedad civil y el cuerpo diplomático", lugar: "Plaza Independencia", coords: [-34.9065, -56.1997], aprox: true },
    { fecha: "2026-11-06", hora: "18:15", tz: "-03:00", pais: "UY", ciudad: "Montevideo", tipo: "visita",
      titulo: "Visita al presidente de la República", lugar: "Edificio José Artigas", coords: [-34.9060, -56.2008] },
    { fecha: "2026-11-06", hora: "19:10", tz: "-03:00", pais: "UY", ciudad: "Montevideo", tipo: "oracion",
      titulo: "Vísperas con obispos, sacerdotes, diáconos, religiosos, religiosas y seminaristas", lugar: "Catedral Metropolitana de la Inmaculada Concepción y San Felipe y Santiago", coords: [-34.9068, -56.2034] },

    // ───────── Sábado 7 · Paysandú y Montevideo
    { fecha: "2026-11-07", hora: "08:25", tz: "-03:00", pais: "UY", ciudad: "Montevideo", tipo: "traslado",
      titulo: "Salida en avión hacia Paysandú", lugar: "Aeropuerto de Montevideo-Carrasco", coords: [-34.8384, -56.0308] },
    { fecha: "2026-11-07", hora: "09:10", tz: "-03:00", pais: "UY", ciudad: "Paysandú", tipo: "traslado",
      titulo: "Llegada a Paysandú", lugar: "Aeropuerto «Brigadier General Aviador Tydeo Larre Borges»", coords: [-32.3633, -58.0619] },
    { fecha: "2026-11-07", hora: "10:00", tz: "-03:00", pais: "UY", ciudad: "Paysandú", tipo: "misa",
      titulo: "Santa Misa", lugar: "Parque París Londres", coords: [-32.3290, -58.0720], aprox: true },
    { fecha: "2026-11-07", hora: "12:45", tz: "-03:00", pais: "UY", ciudad: "Paysandú", tipo: "traslado",
      titulo: "Salida en avión hacia Montevideo", lugar: "Aeropuerto de Paysandú", coords: [-32.3633, -58.0619] },
    { fecha: "2026-11-07", hora: "13:30", tz: "-03:00", pais: "UY", ciudad: "Montevideo", tipo: "traslado",
      titulo: "Llegada a Montevideo", lugar: "Aeropuerto de Montevideo-Carrasco", coords: [-34.8384, -56.0308] },
    { fecha: "2026-11-07", hora: "17:00", tz: "-03:00", pais: "UY", ciudad: "Montevideo", tipo: "encuentro",
      titulo: "Encuentro con la realidad social de Casavalle", lugar: "Parroquia Nuestra Señora de Guadalupe, Casavalle", coords: [-34.8560, -56.1700], aprox: true },
    { fecha: "2026-11-07", hora: "18:00", tz: "-03:00", pais: "UY", ciudad: "Montevideo", tipo: "encuentro",
      titulo: "Encuentro con el mundo de la educación", lugar: "Universidad Católica del Uruguay", coords: [-34.8890, -56.1610], aprox: true },
    { fecha: "2026-11-07", hora: "19:00", tz: "-03:00", pais: "UY", ciudad: "Montevideo", tipo: "oracion",
      titulo: "Vigilia de oración", lugar: "Estadio Centenario", coords: [-34.8945, -56.1528] },

    // ───────── Domingo 8 · Florida → Buenos Aires
    { fecha: "2026-11-08", hora: "10:30", tz: "-03:00", pais: "UY", ciudad: "Florida", tipo: "misa",
      titulo: "Santa Misa en la fiesta de la Virgen de los Treinta y Tres", lugar: "Plaza de la Catedral Basílica de Florida, Santuario Nacional", coords: [-34.0995, -56.2142] },
    { fecha: "2026-11-08", hora: "15:10", tz: "-03:00", pais: "UY", ciudad: "Montevideo", tipo: "ceremonia",
      titulo: "Ceremonia de despedida de Uruguay", lugar: "Aeropuerto de Montevideo-Carrasco", coords: [-34.8384, -56.0308] },
    { fecha: "2026-11-08", hora: "15:30", tz: "-03:00", pais: "UY", ciudad: "Montevideo", tipo: "traslado",
      titulo: "Salida en avión hacia Buenos Aires", lugar: "Aeropuerto de Montevideo-Carrasco", coords: [-34.8384, -56.0308] },
    { fecha: "2026-11-08", hora: "16:30", tz: "-03:00", pais: "AR", ciudad: "Buenos Aires", tipo: "ceremonia",
      titulo: "Llegada y acogida oficial", lugar: "Aeroparque Jorge Newbery", coords: [-34.5592, -58.4156] },
    { fecha: "2026-11-08", hora: "17:00", tz: "-03:00", pais: "AR", ciudad: "Buenos Aires", tipo: "visita",
      titulo: "Visita al Monumento al General San Martín y a los Ejércitos de la Independencia", lugar: "Plaza San Martín", coords: [-34.5955, -58.3753] },
    { fecha: "2026-11-08", hora: "17:20", tz: "-03:00", pais: "AR", ciudad: "Buenos Aires", tipo: "ceremonia",
      titulo: "Ceremonia de bienvenida", lugar: "Casa Rosada", coords: [-34.6081, -58.3703] },
    { fecha: "2026-11-08", hora: "17:50", tz: "-03:00", pais: "AR", ciudad: "Buenos Aires", tipo: "visita",
      titulo: "Visita al presidente de la República", lugar: "Casa Rosada", coords: [-34.6081, -58.3703] },
    { fecha: "2026-11-08", hora: "18:30", tz: "-03:00", pais: "AR", ciudad: "Buenos Aires", tipo: "encuentro",
      titulo: "Encuentro con las autoridades, la sociedad civil y el cuerpo diplomático", lugar: "Palacio Libertad, Centro Cultural Domingo Faustino Sarmiento", coords: [-34.6034, -58.3687] },

    // ───────── Lunes 9 · Claypole y Buenos Aires
    { fecha: "2026-11-09", hora: "09:15", tz: "-03:00", pais: "AR", ciudad: "Claypole", tipo: "visita",
      titulo: "Visita al personal y a los asistidos", lugar: "Pequeño Cottolengo Don Orione de Claypole", coords: [-34.8030, -58.3420], aprox: true },
    { fecha: "2026-11-09", hora: "11:30", tz: "-03:00", pais: "AR", ciudad: "Buenos Aires", tipo: "misa",
      titulo: "Santa Misa", lugar: "Monumento de los Españoles, Palermo", coords: [-34.5750, -58.4155] },
    { fecha: "2026-11-09", hora: "16:10", tz: "-03:00", pais: "AR", ciudad: "Buenos Aires", tipo: "encuentro",
      titulo: "Encuentro con el mundo del trabajo", lugar: "Universidad Católica Argentina, Puerto Madero", coords: [-34.6168, -58.3651] },
    { fecha: "2026-11-09", hora: "17:30", tz: "-03:00", pais: "AR", ciudad: "Buenos Aires", tipo: "encuentro",
      titulo: "Encuentro con líderes de las comunidades cristianas y de las tradiciones religiosas", lugar: "Palacio San Martín", coords: [-34.5951, -58.3746] },
    { fecha: "2026-11-09", hora: "18:45", tz: "-03:00", pais: "AR", ciudad: "Buenos Aires", tipo: "oracion",
      titulo: "Vísperas con el Episcopado argentino y los equipos sinodales", lugar: "Catedral Metropolitana de la Santísima Trinidad", coords: [-34.6077, -58.3731] },
    { fecha: "2026-11-09", hora: "19:45", tz: "-03:00", pais: "AR", ciudad: "Buenos Aires", tipo: "privado",
      titulo: "Cena con los obispos", lugar: "Arzobispado de Buenos Aires", coords: [-34.6083, -58.3726] },

    // ───────── Martes 10 · Córdoba y Buenos Aires
    { fecha: "2026-11-10", hora: "07:30", tz: "-03:00", pais: "AR", ciudad: "Buenos Aires", tipo: "traslado",
      titulo: "Salida en avión hacia Córdoba", lugar: "Aeroparque Jorge Newbery", coords: [-34.5592, -58.4156] },
    { fecha: "2026-11-10", hora: "09:00", tz: "-03:00", pais: "AR", ciudad: "Córdoba", tipo: "traslado",
      titulo: "Llegada a Córdoba", lugar: "Aeropuerto «Ingeniero Aeronáutico Ambrosio Taravella»", coords: [-31.3236, -64.2080] },
    { fecha: "2026-11-10", hora: "10:00", tz: "-03:00", pais: "AR", ciudad: "Córdoba", tipo: "misa",
      titulo: "Santa Misa", lugar: "Explanada de la Escuela de Aviación Militar (predio de FAdeA)", coords: [-31.4370, -64.2750], aprox: true },
    { fecha: "2026-11-10", hora: "15:15", tz: "-03:00", pais: "AR", ciudad: "Córdoba", tipo: "encuentro",
      titulo: "Encuentro con obispos, clero, vida consagrada, seminaristas y agentes pastorales", lugar: "Catedral de Nuestra Señora de la Asunción", coords: [-31.4166, -64.1838] },
    { fecha: "2026-11-10", hora: "16:55", tz: "-03:00", pais: "AR", ciudad: "Córdoba", tipo: "traslado",
      titulo: "Salida en avión hacia Buenos Aires", lugar: "Aeropuerto de Córdoba", coords: [-31.3236, -64.2080] },
    { fecha: "2026-11-10", hora: "18:10", tz: "-03:00", pais: "AR", ciudad: "Buenos Aires", tipo: "traslado",
      titulo: "Llegada a Buenos Aires", lugar: "Aeroparque Jorge Newbery", coords: [-34.5592, -58.4156] },
    { fecha: "2026-11-10", hora: "20:15", tz: "-03:00", pais: "AR", ciudad: "Buenos Aires", tipo: "oracion",
      titulo: "Vigilia con los jóvenes", lugar: "Monumento de los Españoles, Palermo", coords: [-34.5750, -58.4155] },

    // ───────── Miércoles 11 · Devoto, Luján → Lima
    { fecha: "2026-11-11", hora: "08:00", tz: "-03:00", pais: "AR", ciudad: "Buenos Aires", tipo: "visita",
      titulo: "Visita al Complejo Penitenciario Federal de Buenos Aires", lugar: "Villa Devoto", coords: [-34.5990, -58.5130], aprox: true },
    { fecha: "2026-11-11", hora: "10:00", tz: "-03:00", pais: "AR", ciudad: "Luján", tipo: "misa",
      titulo: "Santa Misa", lugar: "Plaza de la Basílica de Nuestra Señora de Luján", coords: [-34.5636, -59.1206] },
    { fecha: "2026-11-11", hora: "13:30", tz: "-03:00", pais: "AR", ciudad: "Ezeiza", tipo: "ceremonia",
      titulo: "Ceremonia de despedida de Argentina", lugar: "Aeropuerto internacional «Ministro Pistarini»", coords: [-34.8222, -58.5358] },
    { fecha: "2026-11-11", hora: "14:00", tz: "-03:00", pais: "AR", ciudad: "Ezeiza", tipo: "traslado",
      titulo: "Salida en avión hacia Lima", lugar: "Aeropuerto de Ezeiza", coords: [-34.8222, -58.5358] },
    { fecha: "2026-11-11", hora: "17:30", tz: "-05:00", pais: "PE", ciudad: "Lima", tipo: "ceremonia",
      titulo: "Llegada a Lima", lugar: "Base Aeronaval del Callao", coords: [-12.0200, -77.1120], aprox: true },
    { fecha: "2026-11-11", hora: "18:15", tz: "-05:00", pais: "PE", ciudad: "Lima", tipo: "ceremonia",
      titulo: "Ceremonia de bienvenida", lugar: "Palacio de Gobierno", coords: [-12.0453, -77.0302] },
    { fecha: "2026-11-11", hora: "18:45", tz: "-05:00", pais: "PE", ciudad: "Lima", tipo: "visita",
      titulo: "Visita al presidente de la República", lugar: "Palacio de Gobierno", coords: [-12.0453, -77.0302] },
    { fecha: "2026-11-11", hora: "19:45", tz: "-05:00", pais: "PE", ciudad: "Lima", tipo: "encuentro",
      titulo: "Encuentro con las autoridades, la sociedad civil y el cuerpo diplomático", lugar: "Gran Teatro Nacional", coords: [-12.0867, -77.0011] },

    // ───────── Jueves 12 · Lima
    { fecha: "2026-11-12", hora: "09:30", tz: "-05:00", pais: "PE", ciudad: "Lima", tipo: "encuentro",
      titulo: "Encuentro con los obispos del Perú", lugar: "Capilla del Palacio Arzobispal de Lima", coords: [-12.0457, -77.0296] },
    { fecha: "2026-11-12", hora: "10:20", tz: "-05:00", pais: "PE", ciudad: "Lima", tipo: "oracion",
      titulo: "Hora Media con clero, vida consagrada, seminaristas, equipos sinodales y consejos pastorales", lugar: "Basílica Catedral de San Juan Apóstol y Evangelista", coords: [-12.0464, -77.0300] },
    { fecha: "2026-11-12", hora: "11:30", tz: "-05:00", pais: "PE", ciudad: "Lima", tipo: "encuentro",
      titulo: "Encuentro sobre los desafíos y las esperanzas para el futuro del pueblo peruano", lugar: "Plaza de la Catedral (Plaza Mayor)", coords: [-12.0460, -77.0306] },
    { fecha: "2026-11-12", hora: "18:00", tz: "-05:00", pais: "PE", ciudad: "Lima", tipo: "oracion",
      titulo: "Vigilia de oración con jóvenes y universitarios", lugar: "Estadio Monumental", coords: [-12.0557, -76.9356] },
    { fecha: "2026-11-12", hora: "20:00", tz: "-05:00", pais: "PE", ciudad: "Lima", tipo: "privado",
      titulo: "Cena con los obispos", lugar: "Nunciatura Apostólica", coords: [-12.0790, -77.0480], aprox: true },

    // ───────── Viernes 13 · Chiclayo
    { fecha: "2026-11-13", hora: "07:40", tz: "-05:00", pais: "PE", ciudad: "Lima", tipo: "traslado",
      titulo: "Salida en avión hacia Chiclayo", lugar: "Base Aeronaval del Callao", coords: [-12.0200, -77.1120], aprox: true },
    { fecha: "2026-11-13", hora: "09:10", tz: "-05:00", pais: "PE", ciudad: "Chiclayo", tipo: "traslado",
      titulo: "Llegada a Chiclayo", lugar: "Base Aérea «Teniente Coronel Pedro Ruiz Gallo»", coords: [-6.7875, -79.8281] },
    { fecha: "2026-11-13", hora: "10:30", tz: "-05:00", pais: "PE", ciudad: "Chiclayo", tipo: "misa",
      titulo: "Santa Misa", lugar: "Explanada de las Pampas de Pimentel", coords: [-6.8300, -79.9100], aprox: true },
    { fecha: "2026-11-13", hora: "12:40", tz: "-05:00", pais: "PE", ciudad: "Chiclayo", tipo: "privado",
      titulo: "Visita privada", lugar: "Capilla San Óscar A. Romero", coords: [-6.7700, -79.8450], aprox: true },
    { fecha: "2026-11-13", hora: "16:30", tz: "-05:00", pais: "PE", ciudad: "Chiclayo", tipo: "encuentro",
      titulo: "Encuentro con clero, vida consagrada, seminaristas, equipos sinodales y consejos pastorales", lugar: "Santuario de Nuestra Señora de la Paz", coords: [-6.7650, -79.8500], aprox: true },
    { fecha: "2026-11-13", hora: "17:45", tz: "-05:00", pais: "PE", ciudad: "Chiclayo", tipo: "encuentro",
      titulo: "Encuentro con el mundo universitario", lugar: "Universidad Católica Santo Toribio de Mogrovejo", coords: [-6.7614, -79.8636], aprox: true },
    { fecha: "2026-11-13", hora: "19:00", tz: "-05:00", pais: "PE", ciudad: "Chiclayo", tipo: "privado",
      titulo: "Cena con los sacerdotes de la Diócesis de Chiclayo", lugar: "Colegio Santo Toribio de Mogrovejo", coords: [-6.7740, -79.8400], aprox: true },

    // ───────── Sábado 14 · Chiclayo y Santa Cruz de Succhabamba
    { fecha: "2026-11-14", hora: "08:00", tz: "-05:00", pais: "PE", ciudad: "Chiclayo", tipo: "oracion",
      titulo: "Rito de coronación de la Virgen Inmaculada", lugar: "Catedral de Santa María", coords: [-6.7714, -79.8378] },
    { fecha: "2026-11-14", hora: "09:10", tz: "-05:00", pais: "PE", ciudad: "Chiclayo", tipo: "traslado",
      titulo: "Salida en helicóptero hacia Santa Cruz de Succhabamba", lugar: "Base Aérea de Chiclayo", coords: [-6.7875, -79.8281] },
    { fecha: "2026-11-14", hora: "09:50", tz: "-05:00", pais: "PE", ciudad: "Santa Cruz de Succhabamba", tipo: "traslado",
      titulo: "Llegada a Santa Cruz de Succhabamba", lugar: "Helipuerto", coords: [-6.6236, -78.9481], aprox: true },
    { fecha: "2026-11-14", hora: "11:00", tz: "-05:00", pais: "PE", ciudad: "Santa Cruz de Succhabamba", tipo: "misa",
      titulo: "Santa Misa", lugar: "Explanada de Santa Cruz de Succhabamba", coords: [-6.6236, -78.9481], aprox: true },
    { fecha: "2026-11-14", hora: "13:15", tz: "-05:00", pais: "PE", ciudad: "Santa Cruz de Succhabamba", tipo: "traslado",
      titulo: "Salida en helicóptero hacia Chiclayo", lugar: "Helipuerto", coords: [-6.6236, -78.9481], aprox: true },
    { fecha: "2026-11-14", hora: "14:00", tz: "-05:00", pais: "PE", ciudad: "Chiclayo", tipo: "traslado",
      titulo: "Llegada a Chiclayo", lugar: "Base Aérea de Chiclayo", coords: [-6.7875, -79.8281] },
    { fecha: "2026-11-14", hora: "17:30", tz: "-05:00", pais: "PE", ciudad: "Chiclayo", tipo: "oracion",
      titulo: "Oración con la comunidad católica en la clausura del Año Jubilar de Santo Toribio", lugar: "Santuario de Santo Toribio de Mogrovejo", coords: [-6.7720, -79.8400], aprox: true },

    // ───────── Domingo 15 · Cusco y Pucallpa
    { fecha: "2026-11-15", hora: "07:50", tz: "-05:00", pais: "PE", ciudad: "Chiclayo", tipo: "traslado",
      titulo: "Salida en avión hacia Cusco", lugar: "Base Aérea de Chiclayo", coords: [-6.7875, -79.8281] },
    { fecha: "2026-11-15", hora: "10:00", tz: "-05:00", pais: "PE", ciudad: "Cusco", tipo: "traslado",
      titulo: "Llegada a Cusco", lugar: "Aeropuerto «Alejandro Velasco Astete»", coords: [-13.5357, -71.9388] },
    { fecha: "2026-11-15", hora: "10:30", tz: "-05:00", pais: "PE", ciudad: "Cusco", tipo: "encuentro",
      titulo: "Encuentro con los fieles y representantes de la piedad popular", lugar: "Parque Arqueológico de Saqsaywaman", coords: [-13.5094, -71.9817] },
    { fecha: "2026-11-15", hora: "11:45", tz: "-05:00", pais: "PE", ciudad: "Cusco", tipo: "oracion",
      titulo: "Ángelus", lugar: "Plaza de la Basílica Catedral de la Asunción", coords: [-13.5165, -71.9786] },
    { fecha: "2026-11-15", hora: "13:05", tz: "-05:00", pais: "PE", ciudad: "Cusco", tipo: "traslado",
      titulo: "Salida en avión hacia Pucallpa", lugar: "Aeropuerto de Cusco", coords: [-13.5357, -71.9388] },
    { fecha: "2026-11-15", hora: "14:30", tz: "-05:00", pais: "PE", ciudad: "Pucallpa", tipo: "traslado",
      titulo: "Llegada a Pucallpa", lugar: "Aeropuerto «Capitán FAP David Abensur Rengifo»", coords: [-8.3779, -74.5743] },
    { fecha: "2026-11-15", hora: "15:00", tz: "-05:00", pais: "PE", ciudad: "Pucallpa", tipo: "encuentro",
      titulo: "Encuentro con misioneros y representantes de los pueblos amazónicos", lugar: "Malecón Puerto Callao, Yarinacocha", coords: [-8.3500, -74.5850], aprox: true },
    { fecha: "2026-11-15", hora: "16:45", tz: "-05:00", pais: "PE", ciudad: "Pucallpa", tipo: "misa",
      titulo: "Santa Misa", lugar: "Villa Deportiva Regional Ucayali", coords: [-8.3850, -74.5450], aprox: true },
    { fecha: "2026-11-15", hora: "19:05", tz: "-05:00", pais: "PE", ciudad: "Pucallpa", tipo: "traslado",
      titulo: "Salida en avión hacia Lima", lugar: "Aeropuerto de Pucallpa", coords: [-8.3779, -74.5743] },
    { fecha: "2026-11-15", hora: "20:20", tz: "-05:00", pais: "PE", ciudad: "Lima", tipo: "traslado",
      titulo: "Llegada a Lima", lugar: "Base Aeronaval del Callao", coords: [-12.0200, -77.1120], aprox: true },

    // ───────── Lunes 16 · Lima → Roma
    { fecha: "2026-11-16", hora: "08:30", tz: "-05:00", pais: "PE", ciudad: "Lima", tipo: "visita",
      titulo: "Visita al personal y a los asistidos", lugar: "Casa de Acogida de las Hermanitas de los Ancianos Desamparados", coords: [-12.0580, -77.0500], aprox: true },
    { fecha: "2026-11-16", hora: "10:30", tz: "-05:00", pais: "PE", ciudad: "Lima", tipo: "misa",
      titulo: "Santa Misa", lugar: "Base Aérea Las Palmas", coords: [-12.1597, -76.9989] },
    { fecha: "2026-11-16", hora: "13:15", tz: "-05:00", pais: "PE", ciudad: "Lima", tipo: "ceremonia",
      titulo: "Ceremonia de despedida del Perú", lugar: "Base Aeronaval del Callao", coords: [-12.0200, -77.1120], aprox: true },
    { fecha: "2026-11-16", hora: "13:45", tz: "-05:00", pais: "PE", ciudad: "Lima", tipo: "traslado",
      titulo: "Salida en avión hacia Roma", lugar: "Base Aeronaval del Callao", coords: [-12.0200, -77.1120], aprox: true },

    // ───────── Martes 17 · Roma
    { fecha: "2026-11-17", hora: "10:25", tz: "+01:00", pais: "VA", ciudad: "Roma", tipo: "traslado",
      titulo: "Llegada a Roma", lugar: "Aeropuerto internacional de Roma/Fiumicino", coords: [41.8003, 12.2389] }
  ].map(a => ({ textos: [], ...a }))
};
