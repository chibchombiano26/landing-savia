import { mkdir, writeFile } from 'node:fs/promises';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import {
  PRIVACY_POLICY_METADATA,
  PRIVACY_SECTIONS,
} from '../src/data/privacyPolicyData.ts';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const output = resolve(root, 'public/privacy/index.html');

function escapeHtml(value) {
  return String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;');
}

function renderList(items) {
  if (!items?.length) return '';
  return `<ul>${items.map((item) => `<li>${escapeHtml(item)}</li>`).join('')}</ul>`;
}

const sections = PRIVACY_SECTIONS.map((section) => `
  <section id="${escapeHtml(section.id)}" aria-labelledby="heading-${escapeHtml(section.id)}">
    <h2 id="heading-${escapeHtml(section.id)}"><span class="number">${section.number}.</span> ${escapeHtml(section.title)}</h2>
    <p class="summary">${escapeHtml(section.summary)}</p>
    ${section.content.map((paragraph) => `<p>${escapeHtml(paragraph)}</p>`).join('')}
    ${renderList(section.keyPoints)}
    ${section.alertNotice ? `<aside>${escapeHtml(section.alertNotice)}</aside>` : ''}
  </section>`).join('\n');

const html = `<!doctype html>
<html lang="es">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="robots" content="index, follow">
    <meta name="description" content="Política de privacidad de Savia y tratamiento de los datos de Google.">
    <link rel="canonical" href="${escapeHtml(PRIVACY_POLICY_METADATA.privacyUrl)}">
    <title>Política de privacidad de Savia | Hefesoft</title>
    <style>
      :root { color-scheme: light; font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif; color: #1d2924; background: #f4f7f5; }
      * { box-sizing: border-box; }
      body { margin: 0; line-height: 1.65; }
      header { padding: 3rem 1.25rem 2.25rem; color: #f4fff8; background: #06281e; }
      header > div, main, footer { width: min(100%, 850px); margin: 0 auto; }
      header a { color: #a9f4cf; }
      .eyebrow { margin: 0 0 .6rem; color: #a9f4cf; font-size: .8rem; font-weight: 700; letter-spacing: .09em; text-transform: uppercase; }
      h1 { max-width: 740px; margin: 0; font-size: clamp(2rem, 5vw, 3.2rem); line-height: 1.12; }
      header p { max-width: 690px; }
      .updated { color: #c5d9cf; font-size: .92rem; }
      main { padding: 1.25rem; }
      section { margin: 1.25rem 0; padding: clamp(1.15rem, 4vw, 2rem); border: 1px solid #dce7e0; border-radius: 1rem; background: #fff; box-shadow: 0 8px 30px #143d2810; }
      h2 { margin: 0 0 .35rem; color: #0b5135; font-size: clamp(1.2rem, 3vw, 1.55rem); line-height: 1.3; }
      .number { color: #168553; }
      .summary { margin-top: 0; color: #52635a; font-weight: 600; }
      li + li { margin-top: .7rem; }
      aside { margin-top: 1rem; padding: 1rem; border-left: 4px solid #168553; background: #effaf4; }
      a { color: #075e3d; overflow-wrap: anywhere; }
      footer { padding: 0 1.25rem 2.5rem; color: #52635a; font-size: .95rem; }
      .actions { display: flex; flex-wrap: wrap; gap: .85rem; margin-top: 1.25rem; }
      .actions a { display: inline-block; padding: .55rem .85rem; border: 1px solid #76c49b; border-radius: .6rem; color: #eafff2; text-decoration: none; }
      @media print { :root { background: #fff; } header { padding: 1rem 0; color: #111; background: #fff; } header a, .actions { display: none; } main { padding: 0; } section { break-inside: avoid; box-shadow: none; } }
    </style>
  </head>
  <body>
    <header>
      <div>
        <p class="eyebrow">${escapeHtml(PRIVACY_POLICY_METADATA.legalEntity)} · ${escapeHtml(PRIVACY_POLICY_METADATA.appName)}</p>
        <h1>Política de privacidad y tratamiento de datos</h1>
        <p>Información sobre las integraciones de Google, los proveedores que participan y las opciones para administrar tus conexiones.</p>
        <p class="updated">Última actualización: ${escapeHtml(PRIVACY_POLICY_METADATA.lastUpdated)}</p>
        <nav class="actions" aria-label="Enlaces relacionados">
          <a href="${escapeHtml(PRIVACY_POLICY_METADATA.officialUrl)}">Ir a Savia</a>
          <a href="${escapeHtml(PRIVACY_POLICY_METADATA.googlePermissionsUrl)}">Permisos de tu Cuenta de Google</a>
        </nav>
      </div>
    </header>
    <main>
      ${sections}
    </main>
    <footer>
      <p>Contacto de privacidad: <a href="mailto:${escapeHtml(PRIVACY_POLICY_METADATA.emailPrivacy)}">${escapeHtml(PRIVACY_POLICY_METADATA.emailPrivacy)}</a></p>
      <p>Esta página contiene el texto de la política de privacidad de Savia. Puedes consultar la <a href="${escapeHtml(PRIVACY_POLICY_METADATA.googlePolicyUrl)}">Política de Datos de Usuarios de los Servicios de API de Google</a>.</p>
    </footer>
  </body>
</html>
`;

await mkdir(dirname(output), { recursive: true });
await writeFile(output, html, 'utf8');
console.log(`Generated ${output}`);
