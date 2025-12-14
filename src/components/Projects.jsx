import { Container, Row, Col, Button } from 'react-bootstrap';
import { FaArrowRight, FaGithub } from 'react-icons/fa';

const projects = [
  {
    badge: 'BSc Capstone',
    badgeClass: 'capstone',
    title: 'Protectoron - AI Defense Robot',
    subtitle: 'Autonomous AI-Powered Security System',
    description: 'An intelligent autonomous robot that detects and handles dangerous objects using AI. Features distributed multi-server architecture with real-time computer vision and multiple control interfaces.',
    highlights: [
      'Real-time YOLO object detection with sub-100ms latency',
      'Hand gesture control using MediaPipe',
      '3-DOF robotic arm with 15kg servo torque',
      'Fault-tolerant distributed system architecture',
    ],
    tech: ['Python', 'YOLO', 'FastAPI', 'MediaPipe', 'Raspberry Pi', 'ESP32'],
    github: 'https://github.com/FrancisA2000/Protectoron-Intelligent-AI-Autonomous-Defense-Robot-BSc-EEE-Final-Project',
  },
  {
    badge: 'Deep Learning',
    title: 'Pneumonia X-Ray Diagnosis',
    subtitle: 'AI-Powered Medical Imaging Analysis',
    description: 'Deep learning framework for automated pneumonia detection from chest X-rays. Implements custom CNNs and transfer learning with comprehensive optimization studies.',
    highlights: [
      'Achieved over 93% accuracy on test set',
      'Fine-tuned ResNet152V2 with F1 score of 0.8946',
      'EarlyStopping reduced training time by 63%',
      '3-class classification: Normal/Bacterial/Viral',
    ],
    tech: ['TensorFlow', 'Keras', 'ResNet152V2', 'CNNs', 'Python'],
    github: 'https://github.com/FrancisA2000/deep-learning-pneumonia-xray-diagnosis',
  },
  {
    badge: 'VLSI Design',
    title: '8×8 SRAM Memory System',
    subtitle: 'Custom IC Design in Cadence Virtuoso',
    description: 'Complete custom design of 64-bit SRAM memory from transistor level up. Includes 6T cells, row decoder, and full DRC/LVS verified layout.',
    highlights: [
      'Maximum frequency: 1.58 GHz simulated',
      'Full DRC and LVS verification passed',
      'Custom 6T SRAM cells with optimized sizing',
      'Layout area: 240µm × 315µm',
    ],
    tech: ['Cadence Virtuoso', 'CMOS', 'Spectre', 'DRC/LVS'],
    github: 'https://github.com/FrancisA2000/vlsi-sram-8x8-memory-system',
  },
  {
    badge: 'FPGA',
    title: 'VHDL Matrix Multiplier',
    subtitle: 'Hardware Accelerator on Cyclone V',
    description: '4×4 matrix multiplication hardware implementation deployed on Altera Cyclone V FPGA with FSM-based control and real-time display output.',
    highlights: [
      'Complete RTL to hardware design flow',
      'FSM-based modular architecture',
      'Real-time 7-segment display output',
      'Verified with ModelSim simulation',
    ],
    tech: ['VHDL', 'Quartus Prime', 'ModelSim', 'Cyclone V'],
    github: 'https://github.com/FrancisA2000/vhdl-matrix-multiplier',
  },
  {
    badge: 'DSP',
    title: 'Heartbeat & Breath Analysis',
    subtitle: 'Real-time Signal Processing on TI DSP',
    description: 'Real-time DSP system that separates and analyzes heartbeat and breathing sounds using MATLAB-designed IIR filters on TI C674x processor.',
    highlights: [
      '2000 Hz real-time sampling',
      'IIR filter design in MATLAB',
      'TI-RTOS multitasking implementation',
      'Accurate heartbeat and breath counting',
    ],
    tech: ['TI C674x', 'MATLAB', 'TI-RTOS', 'CCS'],
    github: 'https://github.com/FrancisA2000/DSP-Heartbeat-VS-Breath-Sound-Analysis',
  },
  {
    badge: 'PCB Design',
    title: 'HF Frequency Divider',
    subtitle: 'Signal Integrity & PCB Design',
    description: '60 MHz frequency divider with systematic noise reduction from 50mV to 5mV. Includes Wire-Wrap prototype and production PCB design in KiCad.',
    highlights: [
      '90% noise reduction through EMI mitigation',
      'Systematic signal integrity analysis',
      'KiCad PCB with ground plane design',
      'Oscilloscope characterization at 60 MHz',
    ],
    tech: ['KiCad', 'Wire-Wrap', 'TTL Logic', 'Oscilloscope'],
    github: 'https://github.com/FrancisA2000/hf-frequency-divider-60mhz-74ls90-74ls74',
  },
];

function Projects() {
  return (
    <section id="projects" className="section-padding projects-section">
      <Container>
        <div className="section-header" data-aos="fade-up">
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-subtitle">
            A selection of projects showcasing expertise across AI, hardware design, 
            embedded systems, and software development
          </p>
        </div>
        <Row className="g-4">
          {projects.map((project, index) => (
            <Col lg={6} key={project.title}>
              <div 
                className="project-card" 
                data-aos="fade-up" 
                data-aos-delay={index * 100}
              >
                <div className="project-header">
                  <span className={`project-badge ${project.badgeClass || ''}`}>
                    {project.badge}
                  </span>
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-subtitle">{project.subtitle}</p>
                </div>
                <div className="project-content">
                  <p className="project-description">{project.description}</p>
                  <div className="project-highlights">
                    <h4>Key Achievements</h4>
                    <ul className="highlight-list">
                      {project.highlights.map((highlight) => (
                        <li key={highlight}>{highlight}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="mb-3">
                    {project.tech.map((tech) => (
                      <span key={tech} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                  <a 
                    href={project.github} 
                    className="project-link" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    <FaGithub /> View on GitHub <FaArrowRight />
                  </a>
                </div>
              </div>
            </Col>
          ))}
        </Row>
        <div className="text-center mt-5" data-aos="fade-up">
          <Button 
            href="https://github.com/FrancisA2000?tab=repositories" 
            className="btn-secondary-custom"
            target="_blank"
            rel="noopener noreferrer"
          >
            View All Projects on GitHub <FaArrowRight className="ms-2" />
          </Button>
        </div>
      </Container>
    </section>
  );
}

export default Projects;
