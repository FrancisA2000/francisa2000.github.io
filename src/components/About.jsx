import { Container, Row, Col } from 'react-bootstrap';

const stats = [
  { number: '10', label: 'Major Projects' },
  { number: '6+', label: 'Engineering Domains' },
  { number: '93%+', label: 'AI Model Accuracy' },
  { number: '1.58', label: 'GHz SRAM Speed' },
];

function About() {
  return (
    <section id="about" className="section-padding about-section">
      <Container>
        <Row className="align-items-center">
          <Col lg={6} className="mb-4 mb-lg-0">
            <div data-aos="fade-right">
              <h3 className="mb-4" style={{ color: 'var(--text-primary)', fontSize: '1.75rem', fontWeight: '600' }}>
                About Me
              </h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', marginBottom: '1rem' }}>
                I&apos;m a BSc graduate in Electrical and Electronics Engineering from 
                Braude College of Engineering in Karmiel, Israel. My passion lies in 
                creating systems that combine cutting-edge hardware design with 
                intelligent software.
              </p>
              <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', marginBottom: '1rem' }}>
                My capstone project, Protectoron, is an AI-powered autonomous defense 
                robot that showcases my ability to integrate multiple engineering 
                disciplines into a cohesive, working system. From real-time computer 
                vision to distributed embedded systems, I enjoy tackling complex 
                challenges that span the full engineering stack.
              </p>
              <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem' }}>
                I&apos;m currently seeking opportunities in Robotics, AI/ML Engineering, 
                VLSI Design, Embedded Systems, and Hardware Engineering where I can 
                apply my diverse skill set to impactful projects.
              </p>
            </div>
          </Col>
          <Col lg={6}>
            <Row className="g-4">
              {stats.map((stat, index) => (
                <Col xs={6} key={stat.label}>
                  <div 
                    className="stat-card" 
                    data-aos="zoom-in" 
                    data-aos-delay={index * 100}
                  >
                    <div className="stat-number">{stat.number}</div>
                    <div className="stat-label">{stat.label}</div>
                  </div>
                </Col>
              ))}
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default About;
