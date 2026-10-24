// Sale de las páginas .astro de esta carpeta: una página nueva entra sola
const pages = Object.keys(import.meta.glob("./*.astro"))
    .map((path) => path.slice(2, -".astro".length))
    .filter((page) => page !== "404");

export function GET({ site }) {
    const urls = pages.map((page) => new URL(page === "index" ? "/" : `/${page}/`, site).href);
    const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map((url) => `    <url><loc>${url}</loc></url>`).join("\n")}
</urlset>
`;
    return new Response(body, { headers: { "Content-Type": "application/xml" } });
}
