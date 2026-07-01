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
      results.push(file);
    }
  });
  return results;
}

const tooltipHTML = `<div className="bg-red-500/10 border border-red-500/20 rounded-lg p-3 relative group cursor-help">
                 <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 w-[260px] p-3 bg-slate-800 text-xs text-slate-300 rounded shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-20 pointer-events-none text-center border border-slate-600 before:content-[''] before:absolute before:top-full before:left-1/2 before:-translate-x-1/2 before:border-[6px] before:border-transparent before:border-t-slate-600">
                    Calculated by cross-referencing pre-deployment baseline operations against normalized industry averages over a trailing 12-month period.
                 </div>
                 <div className="text-red-500 text-sm font-bold flex items-center gap-2">
                   <TrendingUp className="w-4 h-4 rotate-180" /> Critical Benchmark
                 </div>`;

const searchPattern = /<div className="bg-red-500\/10 border border-red-500\/20 rounded-lg p-3">\s*<div className="text-red-500 text-sm font-bold flex items-center gap-2">\s*<TrendingUp className="w-4 h-4 rotate-180" \/> Critical Benchmark\s*<\/div>/g;

const files = walk('app/systems').filter(f => f.endsWith('page.tsx'));
files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  if (content.match(searchPattern)) {
    content = content.replace(searchPattern, tooltipHTML);
    fs.writeFileSync(file, content);
    console.log(`Updated ${file}`);
  }
});
