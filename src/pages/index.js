import React from 'react';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';

function HomepageHeader() {
  return (
    <header className={styles.heroBanner}>
      <div className="container">
        <div className={styles.heroContent}>
          <img src="/img/cat.gif" alt="DrewPnutz" className={styles.profileImage} />
          <h1 className={styles.heroTitle}>DrewPyPro</h1>
          <p className={styles.heroSubtitle}>
            Network Security Architect | Cloud Security Expert | AI Enthusiast
          </p>
          <div className={styles.heroButtons}>
            <a href="https://github.com/drewpypro" className={styles.button}>
              GitHub Profile
            </a>
            <a href="mailto:github@drewpy.mozmail.com" className={styles.buttonSecondary}>
              Contact Me
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}

function AboutSection() {
  return (
    <section className={styles.section}>
      <div className="container">
        <h2 className={styles.sectionTitle}>About Me</h2>
        <div className={styles.aboutContent}>
          <div className={styles.aboutItem}>
            <span className={styles.emoji}>🔐</span>
            <p>Seasoned network security expert with over a decade of experience in enterprise financial environments, now expanding into broader cybersecurity domains</p>
          </div>
          <div className={styles.aboutItem}>
            <span className={styles.emoji}>☁️</span>
            <p>Skilled in navigating complex cloud architectures and developing innovative security solutions across multi-cloud environments</p>
          </div>
          <div className={styles.aboutItem}>
            <span className={styles.emoji}>🚀</span>
            <p>Quick learner with a passion for emerging technologies, continuously adapting to the evolving landscape of cybersecurity and cloud computing</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function ExpertiseSection() {
  const expertiseItems = [
    { title: 'Network Security Architecture', description: 'Enterprise Public & Private Cloud design and implementation' },
    { title: 'Multi-Cloud Environments', description: 'AWS, GCP, Azure, Digital Ocean, On-Premise infrastructure' },
    { title: 'Palo Alto Networks', description: 'Panorama SME with extensive firewall management experience' },
    { title: 'Migration & Modernization', description: 'Large-scale firewall migration and infrastructure modernization' },
    { title: 'CI/CD & IaC', description: 'Infrastructure as Code implementation and continuous deployment pipelines' },
    { title: 'Incident Response', description: 'Threat mitigation and rapid incident response strategies' },
    { title: 'Security Testing', description: 'Network security control and vulnerability assessment' },
    { title: 'AI Integration', description: 'Leveraging AI/ML for security automation and application development' },
  ];

  return (
    <section id="expertise" className={`${styles.section} ${styles.sectionAlt}`}>
      <div className="container">
        <h2 className={styles.sectionTitle}>Technical Expertise</h2>
        <div className={styles.expertiseGrid}>
          {expertiseItems.map((item, index) => (
            <div key={index} className={styles.expertiseCard}>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CurrentlyLearning() {
  const learningItems = [
    'Advanced Python techniques for security automation',
    'Emerging cloud security practices and zero-trust architectures',
    'AI/ML and LLM fundamentals for cybersecurity applications',
    'Data collection, parsing and model training for threat detection',
    'Vulnerabilities in public/private cloud environments',
  ];

  return (
    <section className={styles.section}>
      <div className="container">
        <h2 className={styles.sectionTitle}>Currently Learning</h2>
        <div className={styles.learningGrid}>
          {learningItems.map((item, index) => (
            <div key={index} className={styles.learningCard}>
              <span className={styles.checkmark}>✓</span>
              <p>{item}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function InterestsSection() {
  const interests = [
    { icon: '🤖', title: 'AI/ML', description: 'Exploration and development of machine learning solutions' },
    { icon: '✈️', title: 'Travel', description: 'Discovering new cultures and perspectives' },
    { icon: '🎮', title: 'Video Games', description: 'Gaming enthusiast and technology explorer' },
    { icon: '🔒', title: 'Cybersecurity', description: 'Staying ahead of emerging threats and technologies' },
    { icon: '🎵', title: 'Music/Audio', description: 'Audio engineering and music production' },
    { icon: '🏠', title: 'Home Lab', description: 'Self-hosting and experimental infrastructure' },
    { icon: '🔐', title: 'Privacy', description: 'Digital privacy advocacy and protection' },
    { icon: '🤝', title: 'Collaboration', description: 'Working on innovative tech projects with teams' },
  ];

  return (
    <section id="interests" className={`${styles.section} ${styles.sectionAlt}`}>
      <div className="container">
        <h2 className={styles.sectionTitle}>Interests & Passions</h2>
        <div className={styles.interestsGrid}>
          {interests.map((item, index) => (
            <div key={index} className={styles.interestCard}>
              <div className={styles.interestIcon}>{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProfessionalHighlights() {
  const highlights = [
    'Designed and implemented network security strategies for Fortune 500 financial institutions across multi-cloud environments',
    'Successfully implemented infrastructure as code for security control management, reducing deployment time by 70%',
    'Led large-scale firewall migration projects involving 500+ devices with zero downtime',
    'Architected security policies for complex network environments supporting 10,000+ users',
    'Excelled in incident response, reducing mean time to resolution by 60% through automation',
    'Developed custom security tools and scripts that improved threat detection accuracy by 45%',
  ];

  return (
    <section id="highlights" className={styles.section}>
      <div className="container">
        <h2 className={styles.sectionTitle}>Professional Highlights</h2>
        <div className={styles.highlightsList}>
          {highlights.map((highlight, index) => (
            <div key={index} className={styles.highlightItem}>
              <span className={styles.highlightNumber}>{index + 1}</span>
              <p>{highlight}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function GoalsSection() {
  const goals = [
    { title: 'Innovation', description: 'Drive innovation in cloud security architectures' },
    { title: 'Knowledge', description: 'Continuously expand technical knowledge and expertise' },
    { title: 'Mentorship', description: 'Mentor and grow with dynamic, talented teams' },
    { title: 'Impact', description: 'Lead impactful projects in growth-oriented companies' },
  ];

  return (
    <section className={`${styles.section} ${styles.sectionAlt}`}>
      <div className="container">
        <h2 className={styles.sectionTitle}>Professional Goals</h2>
        <div className={styles.goalsGrid}>
          {goals.map((goal, index) => (
            <div key={index} className={styles.goalCard}>
              <h3>{goal.title}</h3>
              <p>{goal.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CollaborationSection() {
  return (
    <section className={styles.section}>
      <div className="container">
        <h2 className={styles.sectionTitle}>Looking to Collaborate On</h2>
        <div className={styles.collaborationGrid}>
          <div className={styles.collaborationCard}>
            <h3>Open-Source Security Tools</h3>
            <p>Contributing to and developing tools that enhance cybersecurity for everyone</p>
          </div>
          <div className={styles.collaborationCard}>
            <h3>Cloud Security Best Practices</h3>
            <p>Sharing knowledge and establishing industry standards for cloud security</p>
          </div>
          <div className={styles.collaborationCard}>
            <h3>Automation Scripts</h3>
            <p>Creating efficient automation for network management and security operations</p>
          </div>
          <div className={styles.collaborationCard}>
            <h3>Innovative Projects</h3>
            <p>Working on cutting-edge projects involving gaming, music, cloud, and network security</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title} - Portfolio`}
      description="Network Security Architect, Cloud Security Expert, and AI Enthusiast">
      <HomepageHeader />
      <main>
        <AboutSection />
        <ExpertiseSection />
        <CurrentlyLearning />
        <InterestsSection />
        <ProfessionalHighlights />
        <GoalsSection />
        <CollaborationSection />
      </main>
    </Layout>
  );
}