const fs = require('fs');
const path = require('path');

const topicsDir = path.join(process.cwd(), 'src/core/mind/topics');
const files = fs.readdirSync(topicsDir).filter(f => f.endsWith('.ts'));

let fixedCount = 0;

for (const f of files) {
  const filePath = path.join(topicsDir, f);
  const content = fs.readFileSync(filePath, 'utf8');

  // Match the es: VAR, ... }; block
  const regex = /(\n\s+)(es:\s*([A-Za-z0-9_]+),[\s\S]*?)(};)/;
  const match = content.match(regex);

  if (match) {
    const indent = match[1];
    const varName = match[3];

    const replacement = [
      `${indent}gu: ${varName},`,
      `${indent}mr: ${varName},`,
      `${indent}te: ${varName},`,
      `${indent}ta: ${varName},`,
      `${indent}kn: ${varName},`,
      `${indent}ml: ${varName},`,
      `${indent}bn: ${varName},`,
      `${indent}pa: ${varName},`,
      `${indent}ur: ${varName},`,
      `${indent}or: ${varName},`,
      `${indent}as: ${varName},`,
      `${indent}};`
    ].join('');

    const newContent = content.replace(regex, replacement);
    fs.writeFileSync(filePath, newContent, 'utf8');
    fixedCount++;
    console.log(`Fixed ${f} with variable ${varName}`);
  }
}

console.log(`Successfully fixed ${fixedCount} files.`);
