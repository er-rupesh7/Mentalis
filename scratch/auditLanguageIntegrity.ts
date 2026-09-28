import { CURRICULUM_CATALOG, getCurriculumCategories } from '../src/core/mind/mindCurriculum';
import { isTopicFullyTranslated, resolveTopicTranslation } from '../src/core/mind/translationLoader';
import { MindLanguageCode } from '../src/core/mind/types';

const ALL_LANGUAGES: MindLanguageCode[] = [
  'en', 'hinglish', 'hi', 'gu', 'mr', 'te', 'ta', 'kn', 'ml', 'bn', 'pa', 'ur', 'or', 'as'
];

async function runAudit() {
  console.log('--- MENTALAB MIND MULTILINGUAL AUDIT ---');
  const catalogEntries = Object.entries(CURRICULUM_CATALOG);
  console.log(`Total Topics in Curriculum: ${catalogEntries.length}`);

  const categories = getCurriculumCategories('en');
  console.log(`Total Categories: ${categories.length}`);
  for (const cat of categories) {
    console.log(`  [Category] ${cat.id}: ${cat.topicCount} topics`);
  }

  let totalChecks = 0;
  let missingLanguagesCount = 0;
  let issues: string[] = [];

  for (const [key, topicRecord] of catalogEntries) {
    for (const lang of ALL_LANGUAGES) {
      totalChecks++;
      const resolution = resolveTopicTranslation(key, lang);
      const candidate = (topicRecord as any)[lang];
      const isTranslated = isTopicFullyTranslated(candidate);

      if (!resolution || !resolution.topic || !resolution.topic.title) {
        issues.push(`Topic ${key} has no resolved content for ${lang}`);
        missingLanguagesCount++;
      } else if (!isTranslated) {
        // Warning if not recognized as fully translated
        issues.push(`Topic ${key} did not qualify as fully translated for ${lang}`);
      }
    }
  }

  console.log(`\nTotal Language Checks: ${totalChecks}`);
  console.log(`Total Critical Issues: ${missingLanguagesCount}`);
  console.log(`Unqualified Translation Flags: ${issues.length}`);

  if (issues.length > 0 && issues.length < 20) {
    console.log('\nIssues Sample:');
    issues.forEach(i => console.log('  -', i));
  } else if (issues.length >= 20) {
    console.log(`\nSample of issues (${issues.length} total):`);
    issues.slice(0, 10).forEach(i => console.log('  -', i));
  } else {
    console.log('\n✅ ALL TOPICS AND ALL 14 LANGUAGES AUTHENTICALLY INTEGRATED AND FULLY QUALIFIED!');
  }
}

runAudit();
