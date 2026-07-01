const fs = require('fs');
const path = require('path');

function walk(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    file = path.join(dir, file);
    const stat = fs.statSync(file);
    if (stat && stat.isDirectory()) { 
      results = results.concat(walk(file));
    } else { 
      if (file.endsWith('page.tsx')) {
        results.push(file);
      }
    }
  });
  return results;
}

const files = walk('app/systems');
files.forEach(filePath => {
  let content = fs.readFileSync(filePath, 'utf8');
  if (content.includes('AnimatedCounter') && !content.includes('import { AnimatedCounter')) {
    content = "import { AnimatedCounter } from '@/app/components/animated-counter';\n" + content;
    fs.writeFileSync(filePath, content);
    console.log('Added to', filePath);
  }
});
