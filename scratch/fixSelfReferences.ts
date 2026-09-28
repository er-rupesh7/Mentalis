import * as fs from 'fs';
import * as path from 'path';

const topicsDir = path.join(__dirname, '../src/core/mind/topics');
const targetFiles = [
  'algorithmicReinforcement.ts',
  'anchoringEffect.ts',
  'emotionalRegulation.ts',
  'firstPrinciplesThinking.ts',
  'healthyBoundaries.ts',
  'reciprocityPrinciple.ts',
  'socialProof.ts'
];

for (const f of targetFiles) {
  const filePath = path.join(topicsDir, f);
  let content = fs.readFileSync(filePath, 'utf8');

  const match = content.match(/export const (TOPIC_[A-Za-z0-9_]+): Record<MindLanguageCode, MindTopicDetail> = {\n  en: {/);
  if (match) {
    const varName = match[1]; // e.g. TOPIC_SOCIAL_PROOF
    const enVar = `${varName}_EN`;

    // 1. Change export const TOPIC_FOO = { en: { into export const TOPIC_FOO_EN: MindTopicDetail = {
    content = content.replace(
      `export const ${varName}: Record<MindLanguageCode, MindTopicDetail> = {\n  en: {`,
      `export const ${enVar}: MindTopicDetail = {\n    // English record definition\n`
    );

    // 2. Before hinglish: {, close TOPIC_FOO_EN and start export const TOPIC_FOO = { en: TOPIC_FOO_EN,
    content = content.replace(
      /\n  hinglish: {/,
      `\n};\n\nexport const ${varName}: Record<MindLanguageCode, MindTopicDetail> = {\n  en: ${enVar},\n  hinglish: {`
    );

    // 3. Replace all createUniversalLocalizedRecord(TOPIC_FOO.en, ... with createUniversalLocalizedRecord(TOPIC_FOO_EN, ...
    content = content.replace(new RegExp(`${varName}\\.en`, 'g'), enVar);

    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`✓ Fixed self-reference in ${f}`);
  }
}
