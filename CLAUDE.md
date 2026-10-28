# Casa Quintana — Propiedad única

Proyecto de Propietas Inmobiliaria. Hereda de `../CLAUDE.md`: datos de la firma, manual de marca y reglas generales. Acá solo lo específico.

## El proyecto
- **Qué es:** casa de 3 dormitorios en el casco céntrico de Rawson. Suite principal, segundo baño completo, living, comedor, cocina y lavadero independiente. Buen estado general, patio parquizado al frente y al contrafrente, local destinado a depósito.
- **Ubicación:** Manuel Quintana 707, Rawson, Chubut
- **Oferta:** Venta, USD 68.000 (confirmado por el usuario; la ficha web dice USD 67.500, unificar)
- **Superficies:** 115 m² cubiertos/totales (ficha) · 283 m² de terreno (a confirmar con el corredor que 283 sea terreno)
- **Ambientes:** 6 · 3 dormitorios · baños: ficha dice 1 pero la descripción menciona suite + segundo baño completo (PENDIENTE aclarar: 1 o 2)
- **Antigüedad:** 45 años (ficha)
- **Estado:** disponible
- **Referencia:** PROP-XNM9LC6J
- **Ficha origen:** https://www.ipropietas.com.ar/listing_details_05/200de158-a698-4d6e-9c1c-6b7afaba3e4a
- **Contacto específico:** usa el WhatsApp de la firma (+54 9 280 450-3151)

## Identidad
- **Marca propia del desarrollo:** no — solo Propietas
- **Rol de Propietas:** comercializadora (logo en header/footer + pie legal)
- **Paleta / tipografía:** azul/celeste de marca, Montserrat; ver DESIGN.md cuando exista

## Técnico
- **Stack:** HTML/CSS estático (delegado)
- **Assets:** `assets/logos/` (color, blanco, 1 tinta, negro, símbolo) y `assets/img/` (`portada.jpeg` 800×600, baja resolución; es la única foto bajada de la ficha)
- **Deploy:** PENDIENTE — publicar solo con confirmación del usuario. URL prevista: https://casaquintana.ipropietas.com.ar (el DNS del subdominio hay que apuntarlo al hosting)

## Estado
- Sitio construido (una página: `index.html`, `styles.css`, `main.js`). Dirección "ficha técnica de plano": foto + panel azul, tabla de datos, tres argumentos, contacto, pie legal. Barra fija de consulta en celular.
- Revisado en escritorio y en celular (390 px). Falta: probar en un celular real. `og:image` y canonical ya apuntan a casaquintana.ipropietas.com.ar.

## Contexto de diseño
- `PRODUCT.md` (impeccable init) y `DESIGN.md` (cuando exista) son la fuente de verdad visual y de producto.

## Pendientes
- Actualizar la ficha de ipropietas.com.ar a USD 68.000 para que coincida
- Confirmar superficies (115 m² cubiertos, 283 m² terreno) y cantidad de baños
- Más fotos y de mayor resolución (solo se obtuvo la portada de 800×600); plano si existe
- Orientación, servicios, cocheras, escritura/estado dominial: no informados
- Ubicación exacta para mapa: confirmar si se muestra la dirección completa
- Deploy y dominio
