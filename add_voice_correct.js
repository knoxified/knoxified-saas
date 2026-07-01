const fs = require('fs');
const path = require('path');

const systemsDir = '/app/systems';
const files = fs.readdirSync(systemsDir)
  .filter(f => fs.statSync(path.join(systemsDir, f)).isDirectory() && fs.existsSync(path.join(systemsDir, f, 'page.tsx')))
  .map(f => path.join(systemsDir, f, 'page.tsx'));

const voiceHtml = `
            {/* Voice Capability Add-on */}
            <div className="p-8 rounded-2xl bg-slate-800/60 backdrop-blur-md border border-slate-700/50 hover:border-cyan-500/30 transition-all shadow-xl">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-cyan-500/10 flex items-center justify-center text-cyan-400">
                  <PhoneCall className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-slate-50">Inbound & Outbound Voice</h3>
              </div>
              <ul className="space-y-5">
                <li className="flex items-start gap-3 text-slate-300">
                  <CheckCircle2 className="w-5 h-5 text-cyan-500 mt-1 flex-shrink-0" />
                  <span><strong>Inbound Handling:</strong> Instantly answers and handles incoming calls 24/7, ensuring no customer is ever sent to voicemail.</span>
                </li>
                <li className="flex items-start gap-3 text-slate-300">
                  <CheckCircle2 className="w-5 h-5 text-cyan-500 mt-1 flex-shrink-0" />
                  <span><strong>Outbound Proactive Calling:</strong> Initiates outbound calls for follow-ups, appointment reminders, and re-engaging cold leads automatically.</span>
                </li>
              </ul>
            </div>`;

for (const file of files) {
  let content = fs.readFileSync(file, 'utf8');

  // Add PhoneCall to lucide-react imports if it's missing
  const lucideImportMatch = content.match(/import\s+{([^}]+)}\s+from\s+['"]lucide-react['"]/);
  if (lucideImportMatch) {
    if (!lucideImportMatch[1].includes('PhoneCall')) {
      const replacedImport = lucideImportMatch[0].replace('{', '{ PhoneCall,');
      content = content.replace(lucideImportMatch[0], replacedImport);
    }
  }

  // Insert the tile into the grid
  const gridMatch = content.match(/<div className="grid md:grid-cols-2 gap-8">/);
  if (gridMatch) {
    if (!content.includes('Voice Capability Add-on')) {
      content = content.replace(gridMatch[0], gridMatch[0] + "\n" + voiceHtml);
      fs.writeFileSync(file, content, 'utf8');
      console.log(`Updated ${file}`);
    }
  }
}
