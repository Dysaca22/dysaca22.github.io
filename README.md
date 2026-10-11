# dysaca22.github.io

Mi sitio personal: [dysaca22.github.io](https://dysaca22.github.io). Presenta quién soy y mis proyectos.

## Stack

- Astro 5, con Tailwind CSS y astro-icon.
- Los textos y la lista de proyectos viven en `src/docs/info.json` y `src/docs/projects.json`.

## Desarrollo

```sh
npm install
npm run dev      # http://localhost:4321
npm run build    # genera dist/
```

## Despliegue

Cada push a `main` dispara `.github/workflows/deploy.yml`, que construye el sitio y lo publica en GitHub Pages.

El nombre del repositorio es la dirección del sitio: renombrarlo lo rompe.
