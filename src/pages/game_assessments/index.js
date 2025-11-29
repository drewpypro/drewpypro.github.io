import React from 'react';
import Layout from '@theme/Layout';
import styles from './index.module.css';
import assessments from './assessments.json';

function getScoreColor(score) {
  const num = parseInt(score);
  if (num >= 4) return '#10b981'; // green
  if (num >= 3) return '#f59e0b'; // yellow
  return '#ef4444'; // red
}

function getClassificationStyle(classification) {
  switch (classification?.toLowerCase()) {
    case 'invasive':
      return { background: '#fef2f2', color: '#dc2626', border: '#fecaca' };
    case 'moderate':
      return { background: '#fffbeb', color: '#d97706', border: '#fde68a' };
    case 'minimal':
      return { background: '#f0fdf4', color: '#16a34a', border: '#bbf7d0' };
    default:
      return { background: '#f3f4f6', color: '#6b7280', border: '#e5e7eb' };
  }
}

function AssessmentCard({ assessment }) {
  const { slug, title, score, date, antiCheat, classification, summary } = assessment;
  const scoreColor = getScoreColor(score);
  const classStyle = getClassificationStyle(classification);

  return (
    <a href={`/game_assessments/${slug}`} className={styles.card}>
      <div className={styles.cardHeader}>
        <h3 className={styles.cardTitle}>{title}</h3>
        <div className={styles.scoreBadge} style={{ background: scoreColor }}>
          {score}
        </div>
      </div>

      <p className={styles.cardSummary}>{summary}</p>

      <div className={styles.cardMeta}>
        <div className={styles.metaItem}>
          <span className={styles.metaLabel}>Anti-Cheat</span>
          <span
            className={styles.classificationBadge}
            style={{
              background: classStyle.background,
              color: classStyle.color,
              borderColor: classStyle.border
            }}
          >
            {classification}
          </span>
        </div>
        <div className={styles.metaItem}>
          <span className={styles.metaLabel}>Assessed</span>
          <span className={styles.metaValue}>{date}</span>
        </div>
      </div>

      <div className={styles.antiCheatInfo}>
        {antiCheat}
      </div>
    </a>
  );
}

export default function GameAssessmentsIndex() {
  return (
    <Layout title="Game Assessments" description="Third-party security assessments for games">
      <div className={styles.container}>
        <header className={styles.header}>
          <h1 className={styles.title}>Game Assessments</h1>
          <p className={styles.subtitle}>
            Third-party security assessments evaluating identity, anti-cheat invasiveness, and community sentiment
          </p>
        </header>

        <div className={styles.statsBar}>
          <div className={styles.stat}>
            <span className={styles.statNumber}>{assessments.length}</span>
            <span className={styles.statLabel}>Games Assessed</span>
          </div>
        </div>

        <div className={styles.grid}>
          {assessments.map((assessment) => (
            <AssessmentCard key={assessment.slug} assessment={assessment} />
          ))}
        </div>

        <div className={styles.backLink}>
          <a href="/">← Back to Home</a>
        </div>
      </div>
    </Layout>
  );
}
