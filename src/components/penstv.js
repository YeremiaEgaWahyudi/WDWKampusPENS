import { Col, Container, Row } from "react-bootstrap";

export default function PensTv() {
    return(
        <section>
            <Container className="penstv">
                <div className="title-penstv">
                <h3>PENS TV</h3>
                </div>
                <Row>
                <Col>
                    <iframe 
                        width="360" 
                        height="203" 
                        src="https://www.youtube.com/embed/sW2mZ9TSWqw?si=TIOcjoxujG9s0jfF" 
                        title="YouTube video player" 
                        frameborder="0" 
                        allow="accelerometer; loop; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                        referrerpolicy="strict-origin-when-cross-origin" 
                        allowfullscreen
                    ></iframe>
                    <h5>Profil PENS</h5>
                    </Col>

                    <Col>
                    <iframe 
                        width="360" 
                        height="203" 
                        src="https://www.youtube.com/embed/NKAfpMHZFOA?si=Ivm0bOr6AbLSF0wa" 
                        title="YouTube video player" 
                        frameborder="0" 
                        allow="accelerometer; loop; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                        referrerpolicy="strict-origin-when-cross-origin" 
                        allowfullscreen
                    ></iframe>
                    <h5>Hymne PENS</h5>
                    </Col>

                    <Col>
                    <div className="d-flex penstv-mini">
                    <iframe
                        width="150"
                        height="85"
                        src="https://www.youtube.com/embed/cBJGqujnBxo?si=egPxeE9d9FElGDTR" 
                        title="YouTube video player" 
                        frameborder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                        referrerpolicy="strict-origin-when-cross-origin" 
                        allowfullscreen 
                    />
                    <h6 className="penstv-h6">Menyusuri Keindahan Salah Satu Pusat Sejarah, Kota Lama Surabaya</h6>
                    </div>

                    <div className="d-flex penstv-mini">
                    <iframe
                        width="150"
                        height="85"
                        src="https://www.youtube.com/embed/4poSVMu0k24?si=Un6Z3FnvG8DxKvj2" 
                        title="YouTube video player" 
                        frameborder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                        referrerpolicy="strict-origin-when-cross-origin" 
                        allowfullscreen 
                    />
                    <h6 className="penstv-h6">Tips Konsisten Membangun Habit Positif</h6>
                    </div>
                    <div className="button-penstv">
                        <a className='btn btn-primaryy' href='#'>Video Lainnya<i className="fas fa-chevron-right"></i></a>
                    </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}