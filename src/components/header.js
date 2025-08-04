import { Col, Container, Nav, Navbar, NavDropdown, Row } from "react-bootstrap";
import logo from "../assets/images/Politeknik Elektronika Negeri Surabaya.png";

export default function Header() {
  return (
    <section>
      <Navbar expand="lg" className="bg-body-tertiary navbar">
        <Container>
          <Navbar.Brand href="#home">
            <img src={logo} alt="PENS" height="75px" width="auto" />
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
        
        <Navbar.Collapse id="basic-navbar-nav">
          <Row>
            <Row className="navbar-top ms-auto">
              <Col>
                <div className="d-flex navbar-text">
                  <Nav className="ms-auto navbartop flex-wrap">
                    <Nav.Link href="#">Staf</Nav.Link>
                    <Nav.Link href="#">Mahasiswa</Nav.Link>
                    <Nav.Link href="#">Orang Tua</Nav.Link>
                    <Nav.Link href="#">Alumni</Nav.Link>
                    <Nav.Link href="#">ADMISI</Nav.Link>
                  </Nav>
                </div>
              </Col>
            </Row>

            <Row className="ms-auto">
              <Col>
                <div className="d-flex">
                  <Nav className="d-flex ms-auto">
                    <NavDropdown
                      title="Tentang PENS"
                      id="basic-nav-dropdown"
                      className="d-flex navdp"
                    >
                      <NavDropdown.Item className="d-flex" href="#action/3.1">
                        Action
                      </NavDropdown.Item>
                      <NavDropdown.Item className="d-flex" href="#action/3.2">
                        Another action
                      </NavDropdown.Item>
                      <NavDropdown.Item className="d-flex" href="#action/3.3">
                        Something
                      </NavDropdown.Item>
                      <NavDropdown.Item className="d-flex" href="#action/3.4">
                        Separated link
                      </NavDropdown.Item>
                    </NavDropdown>

                    <NavDropdown
                      title="Kuliah di PENS"
                      id="basic-nav-dropdown"
                      className="d-flex navdp"
                    >
                      <NavDropdown.Item href="#action/3.1">
                        Action
                      </NavDropdown.Item>
                      <NavDropdown.Item href="#action/3.2">
                        Another action
                      </NavDropdown.Item>
                      <NavDropdown.Item href="#action/3.3">
                        Something
                      </NavDropdown.Item>
                      <NavDropdown.Item href="#action/3.4">
                        Separated link
                      </NavDropdown.Item>
                    </NavDropdown>

                    <NavDropdown
                      title="Layanan"
                      id="basic-nav-dropdown"
                      className="d-flex navdp"
                    >
                      <NavDropdown.Item href="#action/3.1">
                        Action
                      </NavDropdown.Item>
                      <NavDropdown.Item href="#action/3.2">
                        Another action
                      </NavDropdown.Item>
                      <NavDropdown.Item href="#action/3.3">
                        Something
                      </NavDropdown.Item>
                      <NavDropdown.Item href="#action/3.4">
                        Separated link
                      </NavDropdown.Item>
                    </NavDropdown>

                    <NavDropdown
                      title="Berita"
                      id="basic-nav-dropdown"
                      className="d-flex navdp"
                    >
                      <NavDropdown.Item href="#action/3.1">
                        Action
                      </NavDropdown.Item>
                      <NavDropdown.Item href="#action/3.2">
                        Another action
                      </NavDropdown.Item>
                      <NavDropdown.Item href="#action/3.3">
                        Something
                      </NavDropdown.Item>
                      <NavDropdown.Item href="#action/3.4">
                        Separated link
                      </NavDropdown.Item>
                    </NavDropdown>
                  </Nav>
                </div>
              </Col>
            </Row>
          </Row>
        </Navbar.Collapse>
        </Container>
      </Navbar>
    </section>
  );
}
