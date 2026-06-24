import fs from 'fs';
import path from 'path';

const pagesDir = path.join(process.cwd(), 'src', 'pages');
const files = fs.readdirSync(pagesDir).filter(f => f.endsWith('.tsx'));

let imageCounter = 1;
const imageMap = [];

for (const file of files) {
  const filePath = path.join(pagesDir, file);
  let content = fs.readFileSync(filePath, 'utf-8');

  // Replace school name
  content = content.replace(/Greenhill School/g, 'Aditya Gyan Mandir');
  content = content.replace(/Greenhill/g, 'Aditya Gyan Mandir');
  content = content.replace(/greenhill\.edu/g, 'adityagyanmandir.edu');
  content = content.replace(/admissions@greenhill/g, 'admissions@adityagyanmandir');

  // Find images
  // Matches style={{backgroundImage: 'url("...")'}}
  const bgImageRegex = /backgroundImage:\s*\'url\(\"([^"]+)\"\)\'/g;
  content = content.replace(bgImageRegex, (match, url) => {
    if (url.includes('googleusercontent.com')) {
      const imageName = `image-${imageCounter++}.jpg`;
      imageMap.push({ file, oldUrl: url, newName: imageName });
      return `backgroundImage: 'url("/images/${imageName}")'`;
    }
    return match;
  });

  // Matches src="..."
  const srcRegex = /src="([^"]+)"/g;
  content = content.replace(srcRegex, (match, url) => {
    if (url.includes('googleusercontent.com') || url.startsWith('http')) {
      const imageName = `image-${imageCounter++}.jpg`;
      imageMap.push({ file, oldUrl: url, newName: imageName });
      return `src="/images/${imageName}"`;
    }
    return match;
  });

  fs.writeFileSync(filePath, content);
}

console.log(JSON.stringify(imageMap, null, 2));
