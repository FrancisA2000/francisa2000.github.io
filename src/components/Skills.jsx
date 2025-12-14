import { Container, Row, Col } from 'react-bootstrap';

const skillCategories = [
  {
    icon: '🤖',
    title: 'AI & Machine Learning',
    skills: ['TensorFlow', 'Keras', 'YOLO', 'MediaPipe', 'OpenCV', 'CNNs', 'Transfer Learning'],
  },
  {
    icon: '💻',
    title: 'Programming',
    skills: ['Python', 'C++', 'VHDL', 'Embedded C', 'MATLAB', 'FastAPI'],
  },
  {
    icon: '🔧',
    title: 'Hardware Design',
    skills: ['Cadence Virtuoso', 'Quartus Prime', 'ModelSim', 'KiCad', 'CMOS Design', 'DRC/LVS'],
  },
  {
    icon: '📟',
    title: 'Embedded Systems',
    skills: ['Raspberry Pi', 'ESP32', 'TI DSP', 'ARM', 'FPGA', 'TI-RTOS'],
  },
  {
    icon: '🌐',
    title: 'Protocols & Communication',
    skills: ['WebSocket', 'REST API', 'Serial UART', 'SPI/I2C', 'TCP/IP', 'Bluetooth'],
  },
  {
    icon: '📊',
    title: 'Signal Processing',
    skills: ['DSP Algorithms', 'Filter Design', 'FFT Analysis', 'Real-time Processing', 'MATLAB'],
  },
];

function Skills() {
  return (
    <section id="skills" className="section-padding">
      <Container>
        <div className="section-header" data-aos="fade-up">
          <h2 className="section-title">Technical Skills</h2>
          <p className="section-subtitle">
            A comprehensive skill set spanning hardware design, software development, 
            and artificial intelligence
          </p>
        </div>
        <Row className="g-4">
          {skillCategories.map((category, index) => (
            <Col lg={4} md={6} key={category.title}>
              <div 
                className="skill-category" 
                data-aos="fade-up" 
                data-aos-delay={index * 100}
              >
                <div className="skill-category-icon">{category.icon}</div>
                <h3>{category.title}</h3>
                <div>
                  {category.skills.map((skill) => (
                    <span key={skill} className="skill-tag">{skill}</span>
                  ))}
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}

export default Skills;
