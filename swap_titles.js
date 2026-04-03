const fs = require('fs');
const path = require('path');

const dir = 'c:\\website building\\Portfolio\\harshitha-Portfolio\\src\\components';
const files = [
  'WorkSection.tsx',
  'SkillsSection.tsx',
  'MediaSection.tsx',
  'LanguagesSection.tsx',
  'ContactSection.tsx',
  'CertificationsSection.tsx',
  'AboutSection.tsx'
];

files.forEach(file => {
  const filepath = path.join(dir, file);
  let content = fs.readFileSync(filepath, 'utf8');

  // First we swap the small label to be big
  content = content.replace(/className="font-mono-label text-primary([^"]*)"/g, 'className="--TEMP-LARGE-- text-primary$1"');
  
  // Then we swap the big label to be small
  content = content.replace(/className="text-3xl sm:text-4xl([^"]*)"/g, 'className="font-mono-label uppercase tracking-widest$1"');
  
  // Resolve the first
  content = content.replace(/className="--TEMP-LARGE-- text-primary([^"]*)"/g, 'className="text-3xl sm:text-4xl font-display font-semibold text-primary$1"');

  fs.writeFileSync(filepath, content, 'utf8');
});
console.log('done swap');
