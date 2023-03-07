import { Col, Container, Row } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";
import 'animate.css';

export const Contact = () => {


    return (
        <section className="contact" id="connect">
        <Container>
          <Row className="align-items-center">
            <Col size={12} md={6}>
                <img className="animate__animated animate__zoomIn " src={contactImg} alt="Contact Us"/>
            </Col>
                <Col size={12} md={6}>
                <h2>Get In Touch</h2>
                <Row>
                    <Col size={12} sm={6} className="px-1">
                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-gmail" width="44" height="44" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#fff" fill="none" strokeLinecap="round" strokeLinejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                        <path d="M16 20h3a1 1 0 0 0 1 -1v-14a1 1 0 0 0 -1 -1h-3v16z" />
                        <path d="M5 20h3v-16h-3a1 1 0 0 0 -1 1v14a1 1 0 0 0 1 1z" />
                        <path d="M16 4l-4 4l-4 -4" />
                        <path d="M4 6.5l8 7.5l8 -7.5" />
                        </svg><span>emabravi99@gmail.com</span>
                    </Col>
                    <Col>
                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-phone-incoming" width="44" height="44" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#ffffff" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                    <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2" />
                    <line x1="15" y1="9" x2="20" y2="4" />
                    <polyline points="15 5 15 9 19 9" />
                    </svg><span>+54 9 3468 60-7247</span>
                    </Col>
                </Row>
            </Col>
          </Row>
        </Container>
      </section>
    )
  }