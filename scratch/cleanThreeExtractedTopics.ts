import * as fs from 'fs';
import * as path from 'path';

const topicsDir = path.join(__dirname, '../src/core/mind/topics');
const targetFiles = [
  'confirmationBias.ts',
  'gaslightingAwareness.ts',
  'retrievalPractice.ts'
];

for (const f of targetFiles) {
  const p = path.join(topicsDir, f);
  let content = fs.readFileSync(p, 'utf8');

  // Fix },; -> };
  content = content.replace(/  \},;/g, '};');

  // Fix ...{\n ->
  content = content.replace(/\s*\.\.\.\{/g, '');

  // Fix },,\n  title: '...' -> \n  title: '...',
  content = content.replace(/  \},,\s*title:\s*['"`](.*?)['"`],?\s*\};/g, '  title: \'$1\',\n};');

  // Fix hi block ending if needed
  content = content.replace(/  \},;/g, '};');

  fs.writeFileSync(p, content, 'utf8');
  console.log(`✓ Cleaned syntax in ${f}`);
}
