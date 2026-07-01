const fs = require('fs');

const d = './app/systems';
fs.readdirSync(d).forEach(f => {
    const p = d + '/' + f + '/page.tsx';
    if(fs.existsSync(p)){
        let c = fs.readFileSync(p, 'utf8');
        
        c = c.replace(/import\s+\{[^}]*\}\s+from\s+['"]lucide-react['"];?\n?/g, '');
        
        // Use a simple naive match for Lucide icons commonly used by these pages
        const allPossible = [
          'PhoneCall', 'CheckCircle2', 'ChevronRight', 'XCircle',
          'Car', 'Calendar', 'Users', 'Wrench', 'Building', 'Hammer', 'HeartPulse',
          'Shield', 'Truck', 'ShoppingCart', 'Video', 'Scale', 'Sun', 'ShoppingBag', 'Stethoscope',
          'Briefcase', 'Droplet', 'Thermometer', 'Utensils', 'Dumbbell', 'BarChart', 'TrendingUp',
          'CreditCard', 'RotateCcw', 'Globe'
        ];
        
        const toImport = [];
        for(const icon of allPossible) {
          if (c.includes(`<${icon}`) || c.includes(`${icon} `)) {
            toImport.push(icon);
          }
        }
        
        // Inbound & outbound features are injected with PhoneCall and CheckCircle2
        if (!toImport.includes('PhoneCall')) toImport.push('PhoneCall');
        if (!toImport.includes('CheckCircle2')) toImport.push('CheckCircle2');
        
        const newImport = `import { ${toImport.join(', ')} } from 'lucide-react';\n`;
        
        const lines = c.split('\n');
        const firstImport = lines.findIndex(l => l.startsWith('import '));
        if (firstImport !== -1) {
          lines.splice(firstImport, 0, newImport);
        } else {
          lines.unshift(newImport);
        }
        
        fs.writeFileSync(p, lines.join('\n'));
        console.log(`Fixed imports for ${p}`);
    }
});
