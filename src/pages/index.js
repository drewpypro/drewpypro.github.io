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
          <h1 className={styles.heroTitle}>DrewpyProfile</h1>
          <p className={styles.heroSubtitle}>
            | Cloud and Network Security Architect | 10+ Years Financial Security Experience | AI Enthusiast |
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
            <span className={styles.emoji}>🏦</span>
            <p>Expert Enterprise Network Security Architect with over 10+ years of specialized experience in Fortune 500 financial institution environments, focusing on continuous learning in security technologies that satisfy intellectual curiosity</p>
          </div>
          <div className={styles.aboutItem}>
            <span className={styles.emoji}>☁️</span>
            <p>Designed comprehensive network security strategies for GCP, AWS, and Azure cloud environments, integrating Infrastructure as Code (IaC) using GitHub and Terraform Enterprise for scalable security management</p>
          </div>
          <div className={styles.aboutItem}>
            <span className={styles.emoji}>🤝</span>
            <p>Committed to contributing to impactful projects within organizations that offer ample opportunities for learning and growth, while collaborating with diverse teams that value mentorship and peer learning</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function ExpertiseSection() {
  const expertiseItems = [
    { title: 'Multi-Cloud Security', description: 'AWS GWLB, Security Groups, NACL, IAM Policy, GCP Firewall Plus, Azure Network Security Groups, Oracle Cloud Infrastructure' },
    { title: 'Network Security', description: 'Palo Alto (PA Series, VM, Panorama, Prisma), Illumio, NSX Distributed Firewall, Cisco ASA (300+ devices managed)' },
    { title: 'Infrastructure as Code', description: 'Terraform Enterprise, GitHub repositories, Architecture Decision Records (ADRs), cloud security automation' },
    { title: 'Cloud Architecture', description: 'AWS GWLB Palo Alto solutions, network segmentation, edge security, disaster recovery site implementation' },
    { title: 'Compliance & Risk', description: 'PCI-DSS auditing, NIST frameworks, vulnerability remediation, risk assessment and mitigation strategies' },
    { title: 'DevOps & Monitoring', description: 'CI/CD pipelines, ELK Stack, Grafana, Splunk, automated security control deployment' },
    { title: 'Scripting & Automation', description: 'Python, Bash, PowerShell, HCL, C, Rust for security automation and incident response integration' },
    { title: 'Enterprise Networking', description: 'Cisco Routers/Switches (1800-9K Series), BGP, ECMP, DirectConnect, VPN technologies, wireless infrastructure' },
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
    'Led the refresh of over 100 Cisco ASA firewalls to Palo Alto Firewalls at Fortune 500 financial company, managing large-scale deployments with zero downtime',
    'Architected and deployed AWS GWLB Palo Alto solutions for various connectivity designs, integrating Infrastructure as Code using GitHub and Terraform Enterprise',
    'Instrumental in creating public cloud service certification process, establishing approved configurations and security guardrails for internal applications',
    'Broke company records for most service requests completed while providing 24-hour troubleshooting support for global network infrastructure',
    'Successfully rolled out new Cisco AnyConnect Load-Balanced headends and created comprehensive training guidelines for operational teams',
    'Designed network security controls for new Disaster Recovery site in Phoenix, ensuring business continuity and compliance requirements',
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

function CertificationsSection() {
  const certifications = [
    { name: 'PCNSE', description: 'Palo Alto Networks Certified Network Security Engineer' },
    { name: 'PCNSE7', description: 'Palo Alto Networks Certified Network Security Engineer 7' },
    { name: 'CCNA-Security', description: 'Cisco Certified Network Associate - Security' },
    { name: 'JNCIS-SA', description: 'Juniper Networks Certified Internet Specialist - SSL VPN' },
    { name: 'CompTIA Network+', description: 'Computing Technology Industry Association Network+' },
    { name: 'CompTIA A+', description: 'Computing Technology Industry Association A+' },
  ];

  return (
    <section className={`${styles.section} ${styles.sectionAlt}`}>
      <div className="container">
        <h2 className={styles.sectionTitle}>Professional Certifications</h2>
        <div className={styles.certificationsGrid}>
          {certifications.map((cert, index) => (
            <div key={index} className={styles.certificationCard}>
              <div className={styles.certBadge}>🏆</div>
              <h3>{cert.name}</h3>
              <p>{cert.description}</p>
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
      description="Expert Enterprise Network Security Architect with 10+ years Fortune 500 financial experience. Specialized in multi-cloud security, Infrastructure as Code, and large-scale firewall migrations.">
      <HomepageHeader />
      <main>
        <AboutSection />
        <ExpertiseSection />
        <CurrentlyLearning />
        <InterestsSection />
        <ProfessionalHighlights />
        <GoalsSection />
        <CertificationsSection />
        <CollaborationSection />
      </main>
    </Layout>
  );
}