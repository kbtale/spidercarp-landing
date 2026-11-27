# Spidercarp Landing

https://github.com/user-attachments/assets/7fb7daeb-882e-4060-b3e7-88ddd048534c

Landing page oficial para el streamer **Spidercarp** ([spidercarp.com](https://spidercarp.com)): streams de River Plate en Kick, clips, TikTok, Paladar Riverplatense en YouTube y comunidad en Discord.

## Tecnologías

- Svelte 5
- Vite 8
- TypeScript
- Tailwind CSS 3
- `@ui-sdk/svelte` + `@ui-sdk/core` (Drawer y Dialogs accesibles)
- Vitest + `@testing-library/svelte`

## Estructura

- **Inicio:** Hero responsive con identidad River Plate brutalista, tiras fotográficas con scanlines, corte de Spidercarp y diálogo interactivo de **Cronograma**.
- **Streams y Clips:** Indicador resiliente de estado en Kick (`EN VIVO` / fallback limpio), reproductor de Kick con carga diferida (`LazyEmbed`) y clip destacado con carga bajo demanda.
- **TikTok:** Grilla responsive con carga diferida de `embed.js` y tarjetas de respaldo con enlace directo.
- **Colaboraciones:** Resúmenes de debates/invitados, modal accesible de Micho y lista de reproducción de **Paladar Riverplatense** en YouTube con `LazyEmbed`.
- **Comunidad y Footer:** Enlaces oficiales a Kick, Discord, X, Instagram, TikTok y YouTube.

## Desarrollo y Scripts

```bash
npm install
npm run dev
npm run check
npm test
npm run build
```
