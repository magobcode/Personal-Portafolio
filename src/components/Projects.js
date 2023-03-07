import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import 'animate.css';
import TrackVisibility from "react-on-screen";
import color_sharp2 from "../assets/img/color-sharp2.png"


export const Projects = () => {

    const projects = [
        {
            title: "loan calculator",
            description: "Design & Development",
            imgUrl: "https://screenshot-proxy.netlify.app/f_avif,w_336/https://d33wubrfki0l68.cloudfront.net/63cfd14cee0c7721123b5611/screenshot_2023-01-24-12-38-41-0000.png",
            pHref: "https://deft-sorbet-5be1c4.netlify.app"
        },
        {
            title: "cryptocurrency trader",
            description: "Design & Development",
            imgUrl: "https://screenshot-proxy.netlify.app/f_avif,w_336/https://d33wubrfki0l68.cloudfront.net/63a25c6740765002b04910c5/screenshot_2022-12-21-01-07-56-0000.png",
            pHref: "https://glittery-empanada-034647.netlify.app"

        },
        {
            title: "pixabay image simulator",
            description: "Design & Development",
            imgUrl: "https://screenshot-proxy.netlify.app/f_avif,w_336/https://d33wubrfki0l68.cloudfront.net/63a147c4844aad36e5e5c4e0/screenshot_2022-12-20-05-27-37-0000.png",
            pHref: "https://stirring-lamington-35d393.netlify.app"

        },
        {
            title: "weather application",
            description: "Design & Development",
            imgUrl: "https://screenshot-proxy.netlify.app/f_avif,w_336/https://d33wubrfki0l68.cloudfront.net/6388083603b7ea17d7a15459/screenshot_2022-12-01-01-49-47-0000.png",
            pHref: "https://taupe-cheesecake-b831e7.netlify.app"

        },
        {
            title: "food recipe finder",
            description: "Design & Development",
            imgUrl: "https://screenshot-proxy.netlify.app/f_avif,w_336/https://d33wubrfki0l68.cloudfront.net/638e37cca0eae961ddce5cf5/screenshot_2022-12-05-18-26-25-0000.png",
            pHref: "https://lighthearted-selkie-f51ac3.netlify.app"

        },
        {
            title: "insurance quotes",
            description: "Design & Development",
            imgUrl: "https://screenshot-proxy.netlify.app/f_avif,w_336/https://d33wubrfki0l68.cloudfront.net/636161206c5ec028e8e7aa87/screenshot_2022-11-01-18-10-44-0000.png",
            pHref: "https://celadon-granita-230a0f.netlify.app"

        },
        {
            title: "e-commerce",
            description: "Design & Development",
            imgUrl: "https://screenshot-proxy.netlify.app/f_avif,w_336/https://d33wubrfki0l68.cloudfront.net/635fad3239c8fc1fc7cc9da7/screenshot_2022-10-31-11-10-49-0000.png",
            pHref: "https://euphonious-bubblegum-4c6cbd.netlify.app"

        },

    ]
    return (
        <section className="project" id="projects">
        <Container>
          <Row>
            <Col size={12}>
                  <h2>Projects</h2>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                      <Nav.Item>
                        <Nav.Link eventKey="first">Tab 1</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Tab 2</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Tab 3</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content id="slideInUp">
                      <Tab.Pane eventKey="first">
                        <Row>
                          {
                            projects.map((project, index) => {
                              return (
                                <ProjectCard
                                  key={index}
                                  {...project}
                                  />
                              )
                            })
                          }
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <p>I am working to fill this section</p>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <p>I am working to fill this section </p>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
            </Col>
          </Row>
        </Container>
        <img className="background-image-right" src={color_sharp2}/>
      </section>
    )
  }