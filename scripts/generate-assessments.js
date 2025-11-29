const fs = require('fs');
const path = require('path');

const ASSESSMENTS_DIR = path.join(__dirname, '../src/pages/game_assessments');
const OUTPUT_FILE = path.join(ASSESSMENTS_DIR, 'assessments.json');

function parseMarkdownMeta(content, slug) {
  const frontmatterMatch = content.match(/^---\n([\s\S]*?)\n---/);
  const frontmatter = frontmatterMatch ? frontmatterMatch[1] : '';

  const title = frontmatter.match(/title:\s*(.+)/)?.[1]?.replace(/['"]/g, '') || slug;

  const scoreMatch = content.match(/\*\*Overall Score:\*\*\s*(\d+\/\d+)/);
  const dateMatch = content.match(/\*\*Date:\*\*\s*(\d{4}-\d{2}-\d{2})/);
  const antiCheatMatch = content.match(/\*\*Anti-cheat type:\*\*\s*([^\n*]+)/);
  const classificationMatch = content.match(/\*\*Classification:\*\*\s*(\w+)/);
  const summaryMatch = content.match(/## Key Summary\n\n([^\n]+)/);

  return {
    slug,
    title: title.replace(/\s*[–-]\s*Third-Party Security Assessment/, ''),
    score: scoreMatch?.[1] || 'N/A',
    date: dateMatch?.[1] || 'N/A',
    antiCheat: antiCheatMatch?.[1]?.trim() || 'Unknown',
    classification: classificationMatch?.[1] || 'unknown',
    summary: summaryMatch?.[1]?.slice(0, 250) || '',
  };
}

function generateAssessments() {
  const files = fs.readdirSync(ASSESSMENTS_DIR)
    .filter(f => f.endsWith('.md') && f !== 'index.md');

  const assessments = files.map(file => {
    const slug = file.replace('.md', '');
    const content = fs.readFileSync(path.join(ASSESSMENTS_DIR, file), 'utf-8');
    return parseMarkdownMeta(content, slug);
  });

  // Sort by date descending
  assessments.sort((a, b) => b.date.localeCompare(a.date));

  fs.writeFileSync(OUTPUT_FILE, JSON.stringify(assessments, null, 2));
  console.log(`Generated ${OUTPUT_FILE} with ${assessments.length} assessments`);
}

generateAssessments();
