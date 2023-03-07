import { useState, useEffect} from "react";
import { Row, Container, Col } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import headerImg from "../assets/img/headerImg.svg";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Banner = () => {

    // state to animate the h1
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(300 - Math.random() * 100);
    const [index, setIndex] = useState(1);
    const toRotate = [ "Web Developer", "Software Developer", "UI/UX Designer" ];
    const period = 2000;
  
    useEffect(() => {
      let ticker = setInterval(() => {
        tick();
      }, delta);
  
      return () => { clearInterval(ticker) };
    }, [text])
  
    const tick = () => {
      let i = loopNum % toRotate.length;
      let fullText = toRotate[i];
      let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);
  
      setText(updatedText);
  
      if (isDeleting) {
        setDelta(prevDelta => prevDelta / 2);
      }
  
      if (!isDeleting && updatedText === fullText) {
        setIsDeleting(true);
        setIndex(prevIndex => prevIndex - 1);
        setDelta(period);
      } else if (isDeleting && updatedText === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
        setIndex(1);
        setDelta(500);
      } else {
        setIndex(prevIndex => prevIndex + 1);
      }
    }
    return (
        <section className="banner" id="home">          
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <TrackVisibility>
                        {({ isVisible }) =>
                        <div className={isVisible ? "animate__animated animate__fadeInLeft animate__fast" : ""}>
                        <span className="tagline">Welcome to my Portafolio</span>
                        <h1>{`Hi! I'm Ema`} <span className="txt-rotate" dataperiod="1000" data-rotate='[ "Web Developer", "Software Developer", "UI/UX Designer" ]'><span className="wrap">{text}</span></span></h1>
                        <p>I am a student of the Bachelor's Degree in Computer Science at Universidad Siglo 21. In addition to my formal studies, I have also been dedicating time and effort to self-taught learning, which has further increased my knowledge and skills in the field of computer science. I like to keep up with the latest technologies and trends in this field, and I use online resources such as tutorials, videos and blogs to improve my skills. I am confident in my technical knowledge and am willing to take on new challenges.</p>
                        <a href="#connect"><button>let's connect <ArrowRightCircle size={25}/></button></a>
                        </div>}
                      </TrackVisibility>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                    {/* <TrackVisibility>
                      {({ isVisible }) =>
                        <div className={isVisible ? "animate__animated animate__zoomIn" : ""}> */}
                        <img src={headerImg} alt="Headder Img"/>
                        {/* </div>}
                    </TrackVisibility> */}
                    </Col>
                </Row>
            </Container>
        </section>
    )
}