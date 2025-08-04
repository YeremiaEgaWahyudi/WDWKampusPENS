import { Button, Col, Container, Row } from "react-bootstrap";
import agenda1 from "../assets/images/1.png";
import agenda2 from "../assets/images/2.png";
import agenda3 from "../assets/images/3.png";

var layananData = [
  {
    id: 1,
    image: require("../assets/images/layanan 1.png"),
    link: "#",
  },
  {
    id: 2,
    image: require("../assets/images/layanan 2.png"),
    link: "#",
  },
  {
    id: 3,
    image: require("../assets/images/layanan 3.png"),
    link: "#",
  },
  {
    id: 4,
    image: require("../assets/images/layanan 4.png"),
    link: "#",
  },
  {
    id: 5,
    image: require("../assets/images/layanan 5.png"),
    link: "#",
  },
  {
    id: 6,
    image: require("../assets/images/layanan 6.png"),
    link: "#",
  },
  {
    id: 7,
    image: require("../assets/images/layanan 7.png"),
    link: "#",
  },
  {
    id: 8,
    image: require("../assets/images/layanan 8.png"),
    link: "#",
  },
];

export default function Layanan() {
  return (
    <section>
      <Container className="layanan">
        <Row>
          <Col sm={8}>
            <div className="title-layanan">
              <h3>LAYANAN PUBLIK</h3>
            </div>
            <div className="d-flex flex-wrap gap-3 justify-content-between">
              {layananData.map((layanan) => {
                return (
                  <div>
                    <a href={layanan.link}>
                      <img
                        width="170px"
                        src={layanan.image}
                        className="img-widget rounded"
                        alt="Layanan"
                      />
                    </a>
                  </div>
                );
              })}
            </div>
            <div className="button-layanan">
              <a className="btn btn-primary" href="#">
                Layanan Selengkapnya<i className="fas fa-chevron-right"></i>
              </a>
            </div>
          </Col>

          <Col sm={4}>
            <div className="title-agenda">
              <h3>AGENDA</h3>
            </div>
            <div className="d-flex gap-3 agenda">
              <img src={agenda1} width="80px" />
              <h4 className="text-center">
                Upacara Hari Pahlawan
              </h4>
            </div>
            <div className="d-flex gap-3 agenda">
              <img src={agenda2} width="80px" />
              <h4>Tidak Tahu</h4>
            </div>
            <div className="d-flex gap-3 agenda">
              <img src={agenda3} width="80px" />
              <h4>Saya Pulang</h4>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
