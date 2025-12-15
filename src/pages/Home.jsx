import { Link } from 'react-router-dom'
import { Container, Row, Col, Card, Button, Badge } from 'react-bootstrap'

export default function Home() {
  const featuredVehicles = [
    {
      id: 1,
      name: 'Tesla Model 3',
      category: 'Electric',
      price: 89,
      image: 'https://images.unsplash.com/photo-1560958089-b8a1929cea89?w=400',
      rating: 4.8,
      available: true
    },
    {
      id: 2,
      name: 'BMW X5',
      category: 'SUV',
      price: 120,
      image: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?w=400',
      rating: 4.9,
      available: true
    },
    {
      id: 3,
      name: 'Mercedes C-Class',
      category: 'Sedan',
      price: 95,
      image: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=400',
      rating: 4.7,
      available: false
    },
  ]

  const features = [
    { icon: '🚗', title: 'Wide Selection', description: 'Choose from hundreds of vehicles' },
    { icon: '💰', title: 'Best Prices', description: 'Competitive rates guaranteed' },
    { icon: '📱', title: 'Easy Booking', description: 'Book in minutes online' },
    { icon: '🛡️', title: 'Fully Insured', description: 'All vehicles are fully covered' },
  ]

  return (
    <div>
      {/* Hero Section */}
      <div className="hero-section text-center">
        <Container>
          <h1 className="hero-title display-3 fw-bold mb-4">Find Your Perfect Ride</h1>
          <p className="hero-subtitle lead mb-4">
            Rent premium vehicles at affordable prices. Your journey starts here.
          </p>
          <div className="d-flex gap-3 justify-content-center">
            <Button as={Link} to="/search" size="lg" variant="light" className="px-5 py-3">
              Browse Vehicles
            </Button>
            <Button as={Link} to="/signup" size="lg" variant="outline-light" className="px-5 py-3">
              Get Started
            </Button>
          </div>
        </Container>
      </div>

      {/* Features Section */}
      <Container className="my-5 py-5">
        <h2 className="text-center mb-5 fw-bold">Why Choose Renato?</h2>
        <Row>
          {features.map((feature, index) => (
            <Col key={index} md={3} sm={6} className="mb-4">
              <Card className="text-center border-0 h-100 shadow-sm card-hover">
                <Card.Body className="p-4">
                  <div className="fs-1 mb-3">{feature.icon}</div>
                  <Card.Title className="fw-bold">{feature.title}</Card.Title>
                  <Card.Text className="text-muted">{feature.description}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>

      {/* Featured Vehicles */}
      <Container className="my-5 py-5">
        <div className="d-flex justify-content-between align-items-center mb-5">
          <h2 className="fw-bold mb-0">Featured Vehicles</h2>
          <Button as={Link} to="/search" variant="outline-primary">
            View All
          </Button>
        </div>
        <Row>
          {featuredVehicles.map((vehicle) => (
            <Col key={vehicle.id} md={4} className="mb-4">
              <Card className="vehicle-card shadow-sm h-100">
                <div className="position-relative">
                  <Card.Img 
                    variant="top" 
                    src={vehicle.image} 
                    className="vehicle-image"
                    alt={vehicle.name}
                  />
                  {vehicle.available ? (
                    <Badge bg="success" className="position-absolute top-0 end-0 m-3">
                      Available
                    </Badge>
                  ) : (
                    <Badge bg="danger" className="position-absolute top-0 end-0 m-3">
                      Unavailable
                    </Badge>
                  )}
                </div>
                <Card.Body>
                  <div className="d-flex justify-content-between align-items-start mb-2">
                    <div>
                      <Card.Title className="mb-1">{vehicle.name}</Card.Title>
                      <Badge bg="secondary" className="mb-2">{vehicle.category}</Badge>
                    </div>
                    <div className="text-end">
                      <div className="text-warning">⭐ {vehicle.rating}</div>
                    </div>
                  </div>
                  <div className="d-flex justify-content-between align-items-center mt-3">
                    <div className="price-tag">
                      ${vehicle.price}<small className="text-muted fs-6">/day</small>
                    </div>
                    <Button 
                      as={Link} 
                      to={`/vehicle/${vehicle.id}`} 
                      variant="primary"
                      disabled={!vehicle.available}
                    >
                      {vehicle.available ? 'View Details' : 'Unavailable'}
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>

      {/* CTA Section */}
      <div className="bg-primary text-white py-5">
        <Container className="text-center">
          <h2 className="display-5 fw-bold mb-4">Ready to Hit the Road?</h2>
          <p className="lead mb-4">Join thousands of satisfied customers</p>
          <Button as={Link} to="/signup" size="lg" variant="light" className="px-5 py-3">
            Sign Up Now
          </Button>
        </Container>
      </div>
    </div>
  )
}