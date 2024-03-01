import { Container, Row, Col } from "react-bootstrap"
import { ArrowRightCircle } from "react-bootstrap-icons"
import headerImg from "../assets/img/header-img.svg";

export const Banner = () => {
    return (
        <section className="banner" id="home">
            <Container>
                <Row className="align-item-center">
                    <Col xs={12} md={6} xl={7}>
                        <span className="tagline">Welcome to my Portfolio</span>
                        <h1>{`HI I'm Anastasia`}<span className="wrap">Fullstack Software Engineer</span></h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In suscipit in leo et mollis. Quisque vehicula a nisl nec vehicula. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Proin turpis felis, finibus at nisi nec, convallis finibus purus. Aenean non finibus nibh. Phasellus ac risus vitae felis iaculis faucibus. Curabitur commodo dictum egestas. Sed eget malesuada massa.</p>
                        <bottom onClick={() => console.log('connect')}>Let's connect <ArrowRightCircle size={25} /> </bottom>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <img src={headerImg} alt="Header Img" />
                    </Col>

                </Row>
            </Container>

        </section>
    )
}
