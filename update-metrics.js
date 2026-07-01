const fs = require('fs');
const path = require('path');

const filesToEdit = [
  'app/systems/dental/page.tsx',
  'app/systems/hotel/page.tsx',
  'app/systems/real-estate/page.tsx',
  'app/systems/recruitment/page.tsx'
];

for (const file of filesToEdit) {
  const filePath = path.join(process.cwd(), file);
  if (fs.existsSync(filePath)) {
    let content = fs.readFileSync(filePath, 'utf8');
    content = content.replace(/text-5xl font-black text-emerald-500/g, 'text-3xl font-extrabold text-emerald-400');
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Updated ${file}`);
  }
}
