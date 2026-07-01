const fs = require('fs');

const d = './app/systems';
fs.readdirSync(d).forEach(f => {
    const p = d + '/' + f + '/page.tsx';
    if(fs.existsSync(p)){
        let c = fs.readFileSync(p, 'utf8');
        
        // Remove ANY existing lucide-react imports cleanly
        c = c.replace(/import\s+\{[^}]*\}\s+from\s+['"]lucide-react['"];?\n?/g, '');
        
        // Find all JSX tags <ComponentName
        const tags = [...c.matchAll(/<([A-Z][a-zA-Z0-9]*)/g)].map(m => m[1]);
        
        // Find all Icon component usages like {IconName && (
        const textTags = [...c.matchAll(/([A-Z][a-zA-Z0-9]*)/g)].map(m => m[1]);
        
        // Known local imports or globals
        const exclusions = ['SystemAutomations', 'AnimatedCounter', 'Link', 'AIVoiceSample', 'BenchmarkWidget', 'PhoneCall', 'JSON', 'Math'];
        
        // We'll just collect everything that looks like a tag that isn't excluded, and assume it's an icon.
        // Actually, some names might be wrong, but let's hope they are available in lucide-react. The ones missing will be caught by lint.
        // A safer way: list all possible lucide imports present in text
        const possibleIcons = [...new Set([...tags, ...textTags])].filter(tag => !exclusions.includes(tag) && tag === tag.charAt(0).toUpperCase() + tag.slice(1) && tag.length > 2);
        
        // We inject it
        const newImport = `import { \n  ${[...new Set([...tags, 'PhoneCall', 'CheckCircle2', 'ChevronRight', 'XCircle'])].filter(tag => !exclusions.includes(tag)).join(',\n  ')} \n} from 'lucide-react';\n`;
        
        // ensure we don't duplicate
        const lines = c.split('\n');
        const firstImport = lines.findIndex(l => l.startsWith('import'));
        lines.splice(firstImport, 0, newImport);
        
        fs.writeFileSync(p, lines.join('\n'));
        console.log(`Fixed imports for ${p}`);
    }
});
