import * as fs from 'fs';
import * as path from 'path';
import { generateTopicTsCode, ComprehensiveTopicDef } from './topicGeneratorHelper';
import { EMOTIONS_TOPICS } from './expansion_defs/defEmotions';
import { RELATIONSHIPS_TOPICS } from './expansion_defs/defRelationships';
import { SOCIAL_MEDIA_TOPICS } from './expansion_defs/defSocialMedia';
import { CONSUMER_TOPICS } from './expansion_defs/defConsumer';
import { LEARNING_TOPICS } from './expansion_defs/defLearning';
import { CRITICAL_TOPICS } from './expansion_defs/defCritical';

const ALL_NEW_TOPIC_DEFS: ComprehensiveTopicDef[] = [
  ...EMOTIONS_TOPICS,
  ...RELATIONSHIPS_TOPICS,
  ...SOCIAL_MEDIA_TOPICS,
  ...CONSUMER_TOPICS,
  ...LEARNING_TOPICS,
  ...CRITICAL_TOPICS
];

const topicsDir = path.join(process.cwd(), 'src/core/mind/topics');

async function main() {
  console.log(`Starting generation of ${ALL_NEW_TOPIC_DEFS.length} topics across all categories...`);

  const createdFiles: string[] = [];
  const exportSummary: { varName: string; fileName: string; categoryId: string; slug: string }[] = [];

  for (const def of ALL_NEW_TOPIC_DEFS) {
    const fileContent = generateTopicTsCode(def);
    const filePath = path.join(topicsDir, def.fileName);
    fs.writeFileSync(filePath, fileContent, 'utf-8');
    createdFiles.push(def.fileName);
    exportSummary.push({
      varName: def.varName.toUpperCase(),
      fileName: def.fileName.replace(/\.ts$/, ''),
      categoryId: def.categoryId,
      slug: def.slug
    });
    console.log(`  [OK] Generated: ${def.fileName} (${def.categoryId})`);
  }

  // Also write an index/registration helper scratch file so mindCurriculum can easily import all of them
  const registrationManifest = path.join(process.cwd(), 'scratch/generatedTopicsManifest.json');
  fs.writeFileSync(registrationManifest, JSON.stringify(exportSummary, null, 2), 'utf-8');

  console.log(`\nSuccessfully generated ${createdFiles.length} topic files in ${topicsDir}`);
  console.log(`Manifest written to ${registrationManifest}`);
}

main().catch(err => {
  console.error('Error generating topics:', err);
  process.exit(1);
});
