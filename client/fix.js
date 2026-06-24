import fs from 'fs';
import path from 'path';

const outputDir = path.join(process.cwd(), 'src', 'pages');

const files = fs.readdirSync(outputDir).filter(f => f.endsWith('.tsx'));

for (const file of files) {
  const filePath = path.join(outputDir, file);
  let content = fs.readFileSync(filePath, 'utf-8');

  // Fix SVG attributes
  content = content.replace(/preserveaspectratio/g, 'preserveAspectRatio');
  content = content.replace(/viewbox/g, 'viewBox');
  content = content.replace(/onclick="([^"]*)"/g, 'onClick={() => {}}');

  // Fix boolean attributes
  content = content.replace(/required="[^"]*"/g, 'required');
  content = content.replace(/disabled="[^"]*"/g, 'disabled');

  // Fix iframe/other number attributes if needed
  content = content.replace(/tabindex=/g, 'tabIndex=');
  content = content.replace(/maxlength=/g, 'maxLength=');

  // React is not needed to be imported manually in React 17+
  content = content.replace(/import React from 'react';\n/g, '');

  fs.writeFileSync(filePath, content);
}
console.log('Fixed remaining files');
