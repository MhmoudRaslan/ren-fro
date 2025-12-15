import { Link } from 'react-router-dom'
import { Container, Row, Col } from 'react-bootstrap'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-dark text-white py-5 mt-auto">
      <Container>
        <Row>
          <Col md={4} className="mb-4 mb-md-0">
            <h5 className="fw-bold mb-3">🚗 Renato</h5>
            <p className="text-muted">
              Your trusted partner for vehicle rentals. Find the perfect car for your journey.
            </p>
            <div className="d-flex gap-3 mt-3">
              <a href="#" className="text-white-50 hover-primary">
                <i className="bi bi-facebook fs-4"></i>
              </a>
              <a href="#" className="text-white-50 hover-primary">
                <i className="bi bi-twitter fs-4"></i>
              </a>
              <a href="#" className="text-white-50 hover-primary">
                <i className="bi bi-instagram fs-4"></i>
              </a>
              <a href="#" className="text-white-50 hover-primary">
                <i className="bi bi-linkedin fs-4"></i>
              </a>
            </div>
          </Col>

          <Col md={2} className="mb-4 mb-md-0">
            <h6 className="fw-bold mb-3">Company</h6>
            <ul className="list-unstyled">
              <li className="mb-2">
                <Link to="/" className="text-white-50 text-decoration-none">About Us</Link>
              </li>
              <li className="mb-2">
                <Link to="/" className="text-white-50 text-decoration-none">Careers</Link>
              </li>
              <li className="mb-2">
                <Link to="/" className="text-white-50 text-decoration-none">Press</Link>
              </li>
              <li className="mb-2">
                <Link to="/" className="text-white-50 text-decoration-none">Blog</Link>
              </li>
            </ul>
          </Col>

          <Col md={2} className="mb-4 mb-md-0">
            <h6 className="fw-bold mb-3">Support</h6>
            <ul className="list-unstyled">
              <li className="mb-2">
                <Link to="/" className="text-white-50 text-decoration-none">Help Center</Link>
              </li>
              <li className="mb-2">
                <Link to="/" className="text-white-50 text-decoration-none">Contact Us</Link>
              </li>
              <li className="mb-2">
                <Link to="/" className="text-white-50 text-decoration-none">FAQs</Link>
              </li>
              <li className="mb-2">
                <Link to="/" className="text-white-50 text-decoration-none">Safety</Link>
              </li>
            </ul>
          </Col>

          <Col md={4} className="mb-4 mb-md-0">
            <h6 className="fw-bold mb-3">Legal</h6>
            <ul className="list-unstyled">
              <li className="mb-2">
                <Link to="/" className="text-white-50 text-decoration-none">Terms of Service</Link>
              </li>
              <li className="mb-2">
                <Link to="/" className="text-white-50 text-decoration-none">Privacy Policy</Link>
              </li>
              <li className="mb-2">
                <Link to="/" className="text-white-50 text-decoration-none">Cookie Policy</Link>
              </li>
            </ul>
          </Col>
        </Row>

        <hr className="my-4 border-secondary" />

        <Row>
          <Col className="text-center text-muted">
            <p className="mb-0">
              © {currentYear} Renato. All rights reserved. Made with ❤️ by Mahmoud Raslan
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}