import { Link, useNavigate } from "react-router-dom";
import { Container, Nav, Navbar as BSNavbar, Button } from "react-bootstrap";
import { useState } from "react";

export default function Navbar() {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogout = () => {
    setIsLoggedIn(false);
    navigate("/");
  };

  return (
    <BSNavbar
      bg="white"
      expand="lg"
      className="border-bottom py-3"
      style={{ boxShadow: "0 2px 8px rgba(0,0,0,0.05)" }}
    >
      <Container>
        {/* Logo */}
        <BSNavbar.Brand as={Link} to="/" className="d-flex align-items-center">
          <img
            src={"/favicon.png"}
            alt="Rentora Logo"
            style={{ height: "40px", width: "auto" }}
          />

          <span
            className="fs-4 fw-bold"
            style={{ color: "#1a1a1a", letterSpacing: "-0.5px" }}
          >
            Rentora
          </span>
        </BSNavbar.Brand>

        <BSNavbar.Toggle aria-controls="basic-navbar-nav" />

        <BSNavbar.Collapse id="basic-navbar-nav">
          {/* Center Nav Links */}
          <Nav className="mx-auto">
            <Nav.Link
              as={Link}
              to="/search"
              className="mx-3 fw-semibold"
              style={{ color: "#4a5568" }}
            >
              Vehicles
            </Nav.Link>
            <Nav.Link
              href="#"
              className="mx-3 fw-semibold"
              style={{ color: "#4a5568" }}
            >
              How it works
            </Nav.Link>
            <Nav.Link
              href="#"
              className="mx-3 fw-semibold"
              style={{ color: "#4a5568" }}
            >
              Business
            </Nav.Link>
          </Nav>

          {/* Right Side - Auth Buttons */}
          <Nav className="align-items-lg-center">
            <Button
              variant="link"
              className="text-decoration-none mx-2"
              style={{ color: "#4a5568" }}
            >
              🔍
            </Button>

            {isLoggedIn ? (
              <>
                <Nav.Link
                  as={Link}
                  to="/dashboard"
                  className="mx-2"
                  style={{ color: "#4a5568" }}
                >
                  Dashboard
                </Nav.Link>
                <Button
                  onClick={handleLogout}
                  variant="outline-secondary"
                  className="ms-2"
                >
                  Logout
                </Button>
              </>
            ) : (
              <>
                <Button
                  as={Link}
                  to="/signin"
                  variant="link"
                  className="text-decoration-none mx-2 fw-semibold"
                  style={{ color: "#4a5568" }}
                >
                  Sign In
                </Button>
                <Button
                  as={Link}
                  to="/signup"
                  className="ms-2"
                  style={{
                    backgroundColor: "#14b8a6",
                    border: "none",
                    borderRadius: "8px",
                    padding: "8px 24px",
                    fontWeight: "600",
                  }}
                >
                  Sign Up
                </Button>
              </>
            )}
          </Nav>
        </BSNavbar.Collapse>
      </Container>
    </BSNavbar>
  );
}
