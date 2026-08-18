# Mudhouse Bakery & Coffee

Sitio estático (HTML/CSS/JS puro, sin build) con la carta de Mud Cookies, los dos locales y los horarios de Mudhouse Bakery & Coffee.

## Estructura

- `index.html` — toda la página (una sola fuente de verdad por sección, estilos inline).
- `css/style.css` — solo lo que un `style` inline no puede expresar: hover, focus, keyframes y responsive.
- `js/main.js` — animación de aparición al scrollear.
- `assets/img/` — logo de Mudhouse, logo de Mud Cookies y las 22 fotos de la carta.

## Ver los cambios en vivo

Como es un sitio 100% estático, no hace falta build ni backend. Dos formas rápidas de tener una URL pública que se actualiza con cada push:

### Opción A — Vercel (recomendada, la más simple)
1. Entrá a vercel.com → **Add New… → Project** → importá este repo de GitHub.
2. No hace falta tocar ningún setting (no hay framework, es estático): "Deploy".
3. Cada push a cualquier branch genera automáticamente una URL de preview; los pushes a la branch de producción actualizan la URL final.

### Opción B — GitHub Pages
Ya incluye un workflow (`.github/workflows/pages.yml`) que despliega en cada push. Para activarlo una sola vez:
1. En el repo de GitHub: **Settings → Pages → Build and deployment → Source** → elegir **GitHub Actions**.
2. Hacé un push (o re-ejecutá el workflow desde la pestaña **Actions**) y la URL queda publicada en `https://<usuario>.github.io/<repo>/`.
