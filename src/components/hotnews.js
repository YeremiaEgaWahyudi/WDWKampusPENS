import { Button, Card, Col, Container, Form, Row } from "react-bootstrap";
import berita1 from '../assets/images/PENS-PIMNAS.jpg';
import berita2 from '../assets/images/PENS-GAME.jpg';
import berita3 from '../assets/images/PENS-WISUDA.jpg';

export default function BeritaTerkini() {
    return(
        <section className="hot-news">
            <Container>
            <Form className="d-flex">
                <Form.Control
                type="search"
                placeholder="Search"
                className="me-auto"
                aria-label="Search"
                />
                <Button variant="outline-success">Search</Button>
            </Form>
            {/* </Container> */}

            <div className="text-center title-hotnews">
                <h3>PENS UPDATE</h3>
            </div>

            {/* <Container> */}
                <Row>
                    <Col>
                        <Card className="news-card">
                            <Card.Img variant="top" src={berita1} />
                            <Card.Body>
                                <Card.Title><a href="#">PENS Raih Peringkat 8 dari 118 Perguruan Tinggi di PIMNAS ke-37</a></Card.Title>
                                <Card.Text className="news-text">
                                Surabaya, pens.ac.id - Berhasil mengirimkan delapan tim 
                                Program Kreativitas Mahasiswa (PKM), PENS sukses menorehkan 
                                prestasi di ajang Pekan Ilmiah Mahasiswa Nasional (PIMNAS) Tahun 2024.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card className="news-card">
                            <Card.Img variant="top" src={berita2} />
                            <Card.Body>
                                <Card.Title><a href="#">Mahasiswa Program Studi Teknologi Game Adu Kreativitas</a></Card.Title>
                                <Card.Text className="news-text">
                                Surabaya, pens.ac.id – Program Studi Game Technology (GT) 
                                sukses menghelat Game Jam Internal Season 12 sebagai platform 
                                kolaboratif dan pengembangan keterampilan pada bidang pembuatan game.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card className="news-card">
                            <Card.Img variant="top" src={berita3} href="#" />
                            <Card.Body>
                                <Card.Title><a href="#">Pengukuhan 773 Wisudawan dalam Wisuda ke-23</a></Card.Title>
                                <Card.Text className="news-text">
                                Surabaya, pens.ac.id - PENS usai menggelar Sidang Terbuka 
                                Senat dalam rangka Wisuda ke-23. Sebanyak 20 wisudawan Magister Terapan, 403 wisudawan 
                                Sarjana Terapan, dan 350 wisudawan Diploma III dikukuhkan secara resmi oleh Direktur PENS, Aliridho Barakbah, S.Kom., Ph.D.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>

            <div className="button-news">
                <a className='btn btn-primary' href='#'>Berita Lainnya<i className="fas fa-chevron-right"></i></a>
            </div>

        </section>
    )
}