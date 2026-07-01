const fs = require('fs');

function fixQuotes(file) {
  let content = fs.readFileSync(file, 'utf8');
  content = content.replace(/([a-zA-Z])'([a-zA-Z])/g, "$1&apos;$2");
  // Some other specific quotes?
  content = content.replace(/Knoxified's/g, "Knoxified&apos;s");
  content = content.replace(/don't/g, "don&apos;t");
  content = content.replace(/won't/g, "won&apos;t");
  content = content.replace(/It's/g, "It&apos;s");
  content = content.replace(/it's/g, "it&apos;s");
  content = content.replace(/techs'/g, "techs&apos;");
  content = content.replace(/companies'/g, "companies&apos;");
  fs.writeFileSync(file, content);
}

fixQuotes('app/systems/hvac/page.tsx');
fixQuotes('app/systems/plumbing/page.tsx');
fixQuotes('app/systems/roofing/page.tsx');
