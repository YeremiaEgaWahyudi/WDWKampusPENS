import { Col, Container, Row } from "react-bootstrap";
import Contact from "./contact";

export default function Footer() {
  return (
    <section className="pens-footer">
      <Container>
        <div className="list-footer">
          <Row className="pens-site">
            <Col>
              <h6>Tentang PENS</h6>
              <ul className="list-unstyled">
                <li>
                  <a href="">Sejarah</a>
                </li>
                <li>
                  <a href="">Unit Layanan</a>
                </li>
                <li>
                  <a href="">Visi Misi</a>
                </li>
                <li>
                  <a href="">Direktori</a>
                </li>
                <li>
                  <a href="">Kampus Tour</a>
                </li>
              </ul>
            </Col>
            <Col>
              <h6>Kuliah di PENS</h6>
              <ul className="list-unstyled">
                <li>
                  <a href="">Departemen</a>
                </li>
                <li>
                  <a href="">Program Studi</a>
                </li>
                <li>
                  <a href="">Beasiswa</a>
                </li>
                <li>
                  <a href="">Fasilitas Kampus</a>
                </li>
                <li>
                  <a href="">Perpustakaan</a>
                </li>
                <li>
                  <a href="">Jalur Seleksi</a>
                </li>
              </ul>
            </Col>
            <Col>
              <h6>Unit</h6>
              <ul className="list-unstyled">
                <li>
                  <a href="">Pusat Jaminan Mutu</a>
                </li>
                <li>
                  <a href="">Pusat Perencanaan dan Pengembangan</a>
                </li>
                <li>
                  <a href="">Unit Kegiatan Mahasiswa</a>
                </li>
                <li>
                  <a href="">Pusat Penelitian dan Pengabdian Masyarakat</a>
                </li>
                <li>
                  <a href="">Sky Venture</a>
                </li>
              </ul>
            </Col>
            <Col>
              <h6>Pengaduan</h6>
              <ul className="list-unstyled footer-li">
                <li>
                  <a href="">Informasi Layanan dan Pengaduan</a>
                </li>
                <li>
                  <a href="">Pelaporan Gratifikasi</a>
                </li>
                <li>
                  <a href="">Whistle Blowing System</a>
                </li>
                <li>
                  <a href="">Layanan Aspirasi dan Pengaduan Online Rakyat</a>
                </li>
              </ul>
            </Col>
          </Row>
        </div>

        <div className='socials'>
                <ul>
                    <li><a href="https://www.facebook.com"><i className="fab fa-facebook-f"></i></a></li>
                    <li><a href="https://www.twitter.com"><i className="fab fa-twitter"></i></a></li>
                    <li><a href="https://www.linkedin.com"><i className="fab fa-instagram"></i></a></li>
                </ul>
            </div>

      </Container>
        <div className="copyright pens-cp">
          Copyright &copy; 2024 Politeknik Elektronika Negeri Surabaya
        </div>
    </section>
  );
}
