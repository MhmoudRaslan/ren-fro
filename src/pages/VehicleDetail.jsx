import { useParams, Link } from 'react-router-dom'
import { Container, Row, Col, Card, Button, Badge, ListGroup } from 'react-bootstrap'

export default function VehicleDetail() {
  const { id } = useParams()

  // Mock vehicle data - replace with API call
  const vehicle = {
    id,
    name: 'Tesla Model 3',
    category: 'Electric',
    price: 89,
    images: [
      'https://images.unsplash.com/photo-1560958089-b8a1929cea89?w=800',
      'https://images.unsplash.com/photo-1536700503339-1e4b06520771?w=800',
      'https://images.unsplash.com/photo-1561580125-028ee3bd62eb?w=800',
    ],
    rating: 4.8,
    reviews: 156,
    transmission: 'Automatic',
    seats: 5,
    luggage: 3,
    fuelType: 'Electric',
    range: '358 miles',
    description: 'Experience the future of driving with the Tesla Model 3. This all-electric sedan combines cutting-edge technology, exceptional performance, and zero emissions for an unforgettable driving experience.',
    features: [
      'Autopilot',
      'Premium Audio',
      'Glass Roof',
      'Heated Seats',
      'Navigation',
      'Bluetooth',
      'USB Charging',
      'Climate Control'
    ],
    available: true,
  }

  return (
    <Container className="py-5">
      <Row>
        {/* Image Gallery */}
        <Col lg={8} className="mb-4">
          <Card className="border-0 shadow-sm mb-3">
            <Card.Img 
              variant="top" 
              src={vehicle.images[0]} 
              style={{ height: '400px', objectFit: 'cover' }}
              alt={vehicle.name}
            />
          </Card>
          
          <Row>
            {vehicle.images.slice(1).map((image, index) => (
              <Col key={index} xs={6} className="mb-3">
                <Card className="border-0 shadow-sm">
                  <Card.Img 
                    src={image} 
                    style={{ height: '200px', objectFit: 'cover' }}
                    alt={`${vehicle.name} ${index + 2}`}
                  />
                </Card>
              </Col>
            ))}
          </Row>

          {/* Description */}
          <Card className="border-0 shadow-sm mt-4">
            <Card.Body className="p-4">
              <h4 className="fw-bold mb-3">Description</h4>
              <p className="text-muted">{vehicle.description}</p>
              
              <h5 className="fw-bold mb-3 mt-4">Features</h5>
              <Row>
                {vehicle.features.map((feature, index) => (
                  <Col key={index} sm={6} md={4} className="mb-2">
                    <div className="d-flex align-items-center">
                      <span className="text-success me-2">✓</span>
                      <span>{feature}</span>
                    </div>
                  </Col>
                ))}
              </Row>
            </Card.Body>
          </Card>
        </Col>

        {/* Booking Card */}
        <Col lg={4}>
          <Card className="border-0 shadow-sm sticky-top" style={{ top: '100px' }}>
            <Card.Body className="p-4">
              <div className="d-flex justify-content-between align-items-start mb-3">
                <div>
                  <h3 className="fw-bold mb-1">{vehicle.name}</h3>
                  <Badge bg="secondary">{vehicle.category}</Badge>
                </div>
                {vehicle.available ? (
                  <Badge bg="success">Available</Badge>
                ) : (
                  <Badge bg="danger">Unavailable</Badge>
                )}
              </div>

              <div className="d-flex align-items-center mb-4">
                <div className="text-warning fs-5">⭐ {vehicle.rating}</div>
                <span className="text-muted ms-2">({vehicle.reviews} reviews)</span>
              </div>

              <div className="price-tag mb-4">
                ${vehicle.price}<small className="text-muted fs-6">/day</small>
              </div>

              <ListGroup variant="flush" className="mb-4">
                <ListGroup.Item className="d-flex justify-content-between px-0">
                  <span>🚗 Transmission</span>
                  <span className="fw-semibold">{vehicle.transmission}</span>
                </ListGroup.Item>
                <ListGroup.Item className="d-flex justify-content-between px-0">
                  <span>👥 Seats</span>
                  <span className="fw-semibold">{vehicle.seats} people</span>
                </ListGroup.Item>
                <ListGroup.Item className="d-flex justify-content-between px-0">
                  <span>🧳 Luggage</span>
                  <span className="fw-semibold">{vehicle.luggage} bags</span>
                </ListGroup.Item>
                <ListGroup.Item className="d-flex justify-content-between px-0">
                  <span>⚡ Fuel Type</span>
                  <span className="fw-semibold">{vehicle.fuelType}</span>
                </ListGroup.Item>
                {vehicle.range && (
                  <ListGroup.Item className="d-flex justify-content-between px-0">
                    <span>🔋 Range</span>
                    <span className="fw-semibold">{vehicle.range}</span>
                  </ListGroup.Item>
                )}
              </ListGroup>

              <Button 
                as={Link}
                to={`/payment/${vehicle.id}`}
                variant="primary" 
                size="lg" 
                className="w-100 mb-3"
                disabled={!vehicle.available}
              >
                {vehicle.available ? 'Book Now' : 'Unavailable'}
              </Button>
              
              <Button 
                variant="outline-primary" 
                size="lg" 
                className="w-100"
              >
                Contact Us
              </Button>

              <div className="bg-light p-3 rounded mt-3">
                <p className="small mb-1 fw-semibold">📞 Need help?</p>
                <p className="small text-muted mb-0">
                  Call us at <a href="tel:+1234567890" className="text-decoration-none">+1 (234) 567-890</a>
                </p>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  )
}