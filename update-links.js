const fs = require('fs');
const path = require('path');

const walkSync = (dir, filelist = []) => {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const dirFile = path.join(dir, file);
    const dirent = fs.statSync(dirFile);
    if (dirent.isDirectory()) {
      if (file !== 'node_modules' && file !== '.next') {
        filelist = walkSync(dirFile, filelist);
      }
    } else {
      if (dirFile.endsWith('.tsx')) {
        filelist.push(dirFile);
      }
    }
  }
  return filelist;
};

const files = walkSync('./app');

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  let originalContent = content;

  // Replace Link to /pricing with /get-started where Start Free Trial is inside
  content = content.replace(/<Link[^>]*href="\/pricing"[^>]*>([\s\S]*?Start Free Trial[\s\S]*?)<\/Link>/g, (match, p1) => {
    return match.replace('href="/pricing"', 'href="/get-started"');
  });

  // Replace button with Link for Start Free Trial
  content = content.replace(/<button([^>]*)>([\s\S]*?Start Free Trial[\s\S]*?)<\/button>/g, (match, attrs, contentStr) => {
    // Add block text-center if it doesn't have it (optional, but good for Link block styling)
    let newAttrs = attrs;
    if (!newAttrs.includes('block') || !newAttrs.includes('text-center') || !newAttrs.includes('w-full')) {
      if (newAttrs.includes('className="')) {
        newAttrs = newAttrs.replace('className="', 'className="block text-center ');
      }
    }
    return `<Link href="/get-started"${newAttrs}>${contentStr}</Link>`;
  });

  if (content !== originalContent) {
    fs.writeFileSync(file, content, 'utf8');
    console.log(`Updated ${file}`);
  }
});
