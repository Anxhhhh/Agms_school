import fs from 'fs';
import HTMLtoJSX from 'html-to-jsx';
import path from 'path';



const screens = [
  { name: 'Home', url: 'https://contribution.usercontent.google.com/download?c=CgthaWRhX2NvZGVmeBJ8Eh1hcHBfY29tcGFuaW9uX2dlbmVyYXRlZF9maWxlcxpbCiVodG1sXzcxOWQyYTkwYzEzNDRkODhiNzgzYjkzY2VjMDJmOWEwEgsSBxDI68WJiQUYAZIBJAoKcHJvamVjdF9pZBIWQhQxMzAyNzU1ODMyNTMyMjU3NjY2NA&filename=&opi=89354086' },
  { name: 'About', url: 'https://contribution.usercontent.google.com/download?c=CgthaWRhX2NvZGVmeBJ8Eh1hcHBfY29tcGFuaW9uX2dlbmVyYXRlZF9maWxlcxpbCiVodG1sXzA1MjQ4YzZmZjQwMDQ3MjY4MTYwYjBjNTE1M2JhOWRhEgsSBxDI68WJiQUYAZIBJAoKcHJvamVjdF9pZBIWQhQxMzAyNzU1ODMyNTMyMjU3NjY2NA&filename=&opi=89354086' },
  { name: 'Academics', url: 'https://contribution.usercontent.google.com/download?c=CgthaWRhX2NvZGVmeBJ8Eh1hcHBfY29tcGFuaW9uX2dlbmVyYXRlZF9maWxlcxpbCiVodG1sX2IzNDQwM2E4NmFkYzQzNjdhODI3MGFhMjFhYTZlYzVkEgsSBxDI68WJiQUYAZIBJAoKcHJvamVjdF9pZBIWQhQxMzAyNzU1ODMyNTMyMjU3NjY2NA&filename=&opi=89354086' },
  { name: 'Admissions', url: 'https://contribution.usercontent.google.com/download?c=CgthaWRhX2NvZGVmeBJ8Eh1hcHBfY29tcGFuaW9uX2dlbmVyYXRlZF9maWxlcxpbCiVodG1sXzhhNzZkZGM2ZTMwMTQ5ZWZiZTAzOWQwY2RmYzZmMDBlEgsSBxDI68WJiQUYAZIBJAoKcHJvamVjdF9pZBIWQhQxMzAyNzU1ODMyNTMyMjU3NjY2NA&filename=&opi=89354086' },
  { name: 'StudentLife', url: 'https://contribution.usercontent.google.com/download?c=CgthaWRhX2NvZGVmeBJ8Eh1hcHBfY29tcGFuaW9uX2dlbmVyYXRlZF9maWxlcxpbCiVodG1sXzBiZmVkMTdlN2IzZTRhNDBhMzkzZDRjNDNmZThiNDk0EgsSBxDI68WJiQUYAZIBJAoKcHJvamVjdF9pZBIWQhQxMzAyNzU1ODMyNTMyMjU3NjY2NA&filename=&opi=89354086' },
  { name: 'Facilities', url: 'https://contribution.usercontent.google.com/download?c=CgthaWRhX2NvZGVmeBJ8Eh1hcHBfY29tcGFuaW9uX2dlbmVyYXRlZF9maWxlcxpbCiVodG1sXzgxNDFlYTQ2NmM4OTRiNWVhMmJmZGUzM2E1NWYzMDA3EgsSBxDI68WJiQUYAZIBJAoKcHJvamVjdF9pZBIWQhQxMzAyNzU1ODMyNTMyMjU3NjY2NA&filename=&opi=89354086' },
  { name: 'Achievements', url: 'https://contribution.usercontent.google.com/download?c=CgthaWRhX2NvZGVmeBJ8Eh1hcHBfY29tcGFuaW9uX2dlbmVyYXRlZF9maWxlcxpbCiVodG1sXzRhM2NhZTM1YTNkNDRhNmRiZmVmY2JiMWJjMGNmY2RiEgsSBxDI68WJiQUYAZIBJAoKcHJvamVjdF9pZBIWQhQxMzAyNzU1ODMyNTMyMjU3NjY2NA&filename=&opi=89354086' },
  { name: 'Gallery', url: 'https://contribution.usercontent.google.com/download?c=CgthaWRhX2NvZGVmeBJ8Eh1hcHBfY29tcGFuaW9uX2dlbmVyYXRlZF9maWxlcxpbCiVodG1sX2QwZWIwYjQ1YzJmODQ5NDNiOGVmNWJjYTQ0YTA4Nzk2EgsSBxDI68WJiQUYAZIBJAoKcHJvamVjdF9pZBIWQhQxMzAyNzU1ODMyNTMyMjU3NjY2NA&filename=&opi=89354086' },
  { name: 'Contact', url: 'https://contribution.usercontent.google.com/download?c=CgthaWRhX2NvZGVmeBJ8Eh1hcHBfY29tcGFuaW9uX2dlbmVyYXRlZF9maWxlcxpbCiVodG1sXzNlZGNhMjc5YjRlMTRjZGRhM2M2NGQ5MDFiMjIzMTRkEgsSBxDI68WJiQUYAZIBJAoKcHJvamVjdF9pZBIWQhQxMzAyNzU1ODMyNTMyMjU3NjY2NA&filename=&opi=89354086' }
];

const outputDir = path.join(process.cwd(), 'src', 'pages');

if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

async function run() {
  for (const screen of screens) {
    try {
      console.log(`Fetching ${screen.name}...`);
      const response = await fetch(screen.url);
      let html = await response.text();

      // Extract the body content (ignore head, html tags)
      const bodyMatch = html.match(/<body[^>]*>([\s\S]*)<\/body>/i);
      if (bodyMatch) {
        html = bodyMatch[1];
      }
      
      // Remove script tags like tailwind-config
      html = html.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '');

      let jsx = HTMLtoJSX(html);

      // Quick fixes for html-to-jsx issues
      jsx = jsx.replace(/<!--[\s\S]*?-->/g, ''); // Remove HTML comments

      const componentCode = `import React from 'react';

export default function ${screen.name}() {
  return (
    <>
      ${jsx}
    </>
  );
}
`;

      fs.writeFileSync(path.join(outputDir, `${screen.name}.tsx`), componentCode);
      console.log(`Converted ${screen.name}.tsx`);
    } catch (e) {
      console.error(`Failed to process ${screen.name}:`, e);
    }
  }
}

run();
