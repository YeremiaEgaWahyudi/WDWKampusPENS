import { Col, Container, Row } from "react-bootstrap";
import kampus_sukolilo from '../assets/images/kampus_sukolilo.png';
import kampus_lamongan from '../assets/images/kampus_lamongan.png';
import kampus_sumenep from '../assets/images/kampus_sumenep.png';

export default function Contact() {
    return(
        <section>
            <Container className="contact">
                <div className="title-contact">
                <h3>TEMUKAN KAMI</h3>
                </div>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3256.85068948188!2d112.79118077400166!3d-7.275847092731269!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd7fa10ea2ae883%3A0xbe22c55d60ef09c7!2sPoliteknik%20Elektronika%20Negeri%20Surabaya!5e1!3m2!1sen!2sid!4v1730030124237!5m2!1sen!2sid" 
                width="100%"
                height="600px"
                allowfullscreen="" 
                loading="lazy" 
                referrerpolicy="no-referrer-when-downgrade"></iframe>

                <Row className="kampus-location">
                    <Col>
                        <div className="d-flex">
                            <img 
                                src={kampus_sukolilo}
                                width="20%"
                                height="20%"
                            />
                            <div className="kampus-location-psdku">
                            <h6>PENS Kampus Sukolilo</h6>
                            <p>Jalan Raya ITS, Keputih Sukolilo, Surabaya, Surabaya, Indonesia 60111.
                                kesekretariatan@pens.ac.id</p>
                            </div>
                        </div>
                    </Col>
                    <Col>
                        <div className="d-flex">
                            <img
                                src={kampus_lamongan}
                                width="20%"
                                height="20%"
                            />
                            <div className="kampus-location-psdku">
                            <h6>PENS Kampus Lamongan</h6>
                            <p>Jl. Panglima Sudirman No.125 Banjarmendalan, Kec. Lamongan, Lamongan 62212</p>
                            </div>
                        </div>
                    </Col>
                    <Col>
                       <div className="d-flex">
                            <img
                                src={kampus_sumenep}
                                width="20%"
                                height="20%"
                            />
                            <div className="kampus-location-psdku">
                            <h6>PENS Kampus Sumenep</h6>
                            <p>Jl. Raya Lenteng, KM.2 Aredeke, Batuan, Kabupaten Sumenep, Jawa Timur 69451</p>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}