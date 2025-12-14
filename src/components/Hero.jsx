import { Container, Row, Col, Button } from 'react-bootstrap';
import { FaArrowRight } from 'react-icons/fa';

function Hero() {
  return (
    <section className="hero-section">
      <Container>
        <Row className="align-items-center">
          <Col lg={6} className="order-lg-1 order-2">
            <div data-aos="fade-right">
              <h1 className="hero-title">
                Hi, I&apos;m <span className="gradient-text">Francis Aboud</span>
              </h1>
              <p className="hero-subtitle">Electrical &amp; Electronics Engineer</p>
              <p className="hero-description">
                I design and build intelligent systems that bridge hardware and software. 
                From transistor-level VLSI to AI-powered robots, I create solutions that 
                solve real-world problems.
              </p>
              <div className="d-flex gap-3 flex-wrap">
                <Button href="#projects" className="btn-primary-custom">
                  View My Projects <FaArrowRight className="ms-2" />
                </Button>
                <Button href="#contact" className="btn-secondary-custom">
                  Get In Touch
                </Button>
              </div>
            </div>
          </Col>
          <Col lg={6} className="order-lg-2 order-1 text-center mb-4 mb-lg-0">
            <div data-aos="fade-left">
              <div className="hero-visual mx-auto">⚡</div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Hero;
