const fs = require('fs');

const d = './app/systems';
fs.readdirSync(d).forEach(f => {
    const p = d + '/' + f + '/page.tsx';
    if(fs.existsSync(p)){
        let c = fs.readFileSync(p, 'utf8');
        
        // Find all JSX tags <ComponentName
        const tags = [...c.matchAll(/<([A-Z][a-zA-Z0-9]*)/g)].map(m => m[1]);
        
        // standard custom components we know
        const nonLucide = ['SystemAutomations', 'AnimatedCounter', 'Link', 'AIVoiceSample', 'BenchmarkWidget', 'PhoneCall'];
        
        const iconsToImport = [...new Set(tags)].filter(tag => !nonLucide.includes(tag));
        
        // Replace the broken import
        c = c.replace(/import \{, PhoneCall\} from 'lucide-react';/, '');
        
        const newImport = `import { ${iconsToImport.join(', ')}, PhoneCall } from 'lucide-react';\n`;
        
        // Insert right after the last import
        const lastImportIndex = c.lastIndexOf('import ');
        const endOfLastImport = c.indexOf('\n', lastImportIndex);
        
        c = c.slice(0, endOfLastImport + 1) + newImport + c.slice(endOfLastImport + 1);
        
        fs.writeFileSync(p, c);
        console.log(`Fixed imports for ${p}`);
    }
});
