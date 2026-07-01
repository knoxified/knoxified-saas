const fs = require('fs');
const path = require('path');

function processFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');

  let madeChanges = false;
  const regex = /(<div className="text-[3-5]xl font-(?:extrabold|black) text-emerald-[4-5]00 tracking-tight mb-4">)(.*?)(<\/div>)/g;

  let newContent = content.replace(regex, (match, p1, text, p3) => {
    // Skip if already converted
    if (text.includes('<AnimatedCounter')) return match;

    madeChanges = true;
    const decodedText = text.replace(/&lt;/g, '<').replace(/&gt;/g, '>');
    const numMatch = decodedText.match(/^([^\d]*)(\d+)(.*)$/);
    
    if (numMatch) {
      const prefix = numMatch[1].replace(/"/g, '&quot;');
      const value = parseInt(numMatch[2], 10);
      const suffix = numMatch[3].replace(/"/g, '&quot;');
      
      return `${p1}<AnimatedCounter value={${value}} prefix="${prefix}" suffix="${suffix}" />${p3}`;
    }
    return match;
  });

  if (madeChanges) {
    if (!newContent.includes('AnimatedCounter')) {
        // Find last import
        const importRegex = /^import .+?;?$/gm;
        let imports = [];
        let r;
        while ((r = importRegex.exec(newContent)) !== null) {
            imports.push({ match: r[0], end: r.index + r[0].length });
        }
        if (imports.length > 0) {
            const lastImportIndex = imports[imports.length - 1].end;
            newContent = newContent.slice(0, lastImportIndex) + "\nimport { AnimatedCounter } from '@/components/animated-counter';" + newContent.slice(lastImportIndex);
        } else {
             newContent = "import { AnimatedCounter } from '@/components/animated-counter';\n" + newContent;
        }
    }
    fs.writeFileSync(filePath, newContent);
    console.log(`Updated ${filePath}`);
  }
}

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
files.forEach(processFile);
