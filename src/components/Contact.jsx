import { Container, Row, Col } from 'react-bootstrap';
import { FaEnvelope, FaLinkedin, FaGithub, FaMapMarkerAlt } from 'react-icons/fa';

const contactInfo = [
  {
    icon: <FaEnvelope />,
    title: 'Email',
    link: 'mailto:FrancisAboud2000@gmail.com',
    text: 'FrancisAboud2000@gmail.com',
  },
  {
    icon: <FaLinkedin />,
    title: 'LinkedIn',
    link: 'https://www.linkedin.com/in/francisaboud',
    text: 'Connect with me',
  },
  {
    icon: <FaGithub />,
    title: 'GitHub',
    link: 'https://github.com/FrancisA2000',
    text: 'github.com/FrancisA2000',
  },
  {
    icon: <FaMapMarkerAlt />,
    title: 'Location',
    link: '#',
    text: 'Karmiel, Israel',
  },
];

function Contact() {
  return (
    <section id="contact" className="section-padding contact-section">
      <Container style={{ position: 'relative', zIndex: 1 }}>
        <div className="section-header" data-aos="fade-up">
          <h2 className="section-title">Let&apos;s Connect</h2>
          <p className="section-subtitle">
            I&apos;m currently open to opportunities in Robotics, AI/ML, VLSI Design, 
            Embedded Systems, and Hardware Engineering
          </p>
        </div>
        <Row className="g-4 justify-content-center">
          {contactInfo.map((contact, index) => (
            <Col lg={3} md={6} key={contact.title}>
              <div 
                className="contact-card" 
                data-aos="zoom-in" 
                data-aos-delay={index * 100}
              >
                <div className="contact-icon">{contact.icon}</div>
                <h3>{contact.title}</h3>
                <a 
                  href={contact.link} 
                  target={contact.link.startsWith('http') ? '_blank' : undefined}
                  rel={contact.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                >
                  {contact.text}
                </a>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}

export default Contact;
