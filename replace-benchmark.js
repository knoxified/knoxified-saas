const fs = require('fs');
const path = require('path');

function processFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');

  // Regex to match the old block
  // It looks like:
  /*
              <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-3 relative group cursor-help">
                 <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 w-[260px] p-3 bg-slate-800 text-xs text-slate-300 rounded shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-20 pointer-events-none text-center border border-slate-600 before:content-[''] before:absolute before:top-full before:left-1/2 before:-translate-x-1/2 before:border-[6px] before:border-transparent before:border-t-slate-600">
                    Calculated by cross-referencing pre-deployment baseline operations against normalized industry averages over a trailing 12-month period.
                 </div>
                 <div className="text-red-500 text-sm font-bold flex items-center gap-2">
                   <TrendingUp className="w-4 h-4 rotate-180" /> Critical Benchmark
                 </div>
                 <div className="text-slate-300 text-xs mt-1">Lost revenue from customers moving to the next company on Google</div>
              </div>
  */

  const blockRegex = /<div className="bg-red-500\/10 border border-red-500\/20 rounded-lg p-3 relative group cursor-help">\s*<div className="absolute bottom-full left-1\/2 -translate-x-1\/2 mb-3 w-\[260px\].*?opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-20 pointer-events-none text-center border border-slate-600 before:content-\[''\] before:absolute before:top-full before:left-1\/2 before:-translate-x-1\/2 before:border-\[6px\] before:border-transparent before:border-t-slate-600">\s*Calculated by cross-referencing pre-deployment baseline operations against normalized industry averages over a trailing 12-month period\.\s*<\/div>\s*<div className="text-red-500 text-sm font-bold flex items-center gap-2">\s*<TrendingUp className="w-4 h-4 rotate-180" \/> Critical Benchmark\s*<\/div>\s*<div className="text-slate-300 text-xs mt-1">(.*?)<\/div>\s*<\/div>/gs;

  let madeChanges = false;
  let newContent = content.replace(blockRegex, (match, p1) => {
    madeChanges = true;
    // We replace the text in the description block to avoid rendering issues with quotes
    // But since it's already JSX we can just plop it in as a string
    return `<BenchmarkWidget description="${p1.replace(/"/g, '&quot;')}" />`;
  });

  if (madeChanges) {
    if (!newContent.includes('import { BenchmarkWidget')) {
      const importRegex = /^import .+?;?$/gm;
      let imports = [];
      let r;
      while ((r = importRegex.exec(newContent)) !== null) {
          imports.push({ match: r[0], end: r.index + r[0].length });
      }
      if (imports.length > 0) {
          const lastImportIndex = imports[imports.length - 1].end;
          newContent = newContent.slice(0, lastImportIndex) + "\nimport { BenchmarkWidget } from '@/app/components/benchmark-widget';" + newContent.slice(lastImportIndex);
      } else {
           newContent = "import { BenchmarkWidget } from '@/app/components/benchmark-widget';\n" + newContent;
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
