import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import styles from './assessments.module.css';

const assessments = [
  {
    title: 'Arc Raiders',
    date: '2025-11-26',
    slug: 'arc-raiders-11-26-2025',
    summary: 'Third-party security assessment of Arc Raiders extraction shooter',
    score: '4/5',
  },
  {
    title: 'Insurgency Sandstorm',
    date: '2025-11-25',
    slug: 'insurgency-sandstorm-11-25-2025',
    summary: 'Third-party security assessment of Insurgency Sandstorm tactical FPS',
    score: '7/5',
  },
];

export default function GameAssessments() {
  return (
    <Layout
      title="Game Assessments"
      description="Security assessments for various games">
      <div className="container margin-vert--lg">
        <h1>Game Assessments</h1>
        <p>Third-party security assessments evaluating game identity, anti-cheat systems, and community sentiment.</p>

        <div className={styles.assessmentsList}>
          {assessments.map((assessment) => (
            <div key={assessment.slug} className={styles.assessmentCard}>
              <h2>
                <Link to={`/game_assessments/${assessment.slug}`}>
                  {assessment.title}
                </Link>
              </h2>
              <div className={styles.assessmentMeta}>
                <span className={styles.date}>{assessment.date}</span>
                <span className={styles.score}>Score: {assessment.score}</span>
              </div>
              <p>{assessment.summary}</p>
              <Link
                to={`/game_assessments/${assessment.slug}`}
                className={styles.readMore}>
                Read Full Assessment →
              </Link>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}
