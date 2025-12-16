import { Link } from 'react-router-dom'
import { Container, Row, Col, Card, Form, Button, Badge } from 'react-bootstrap'
import { useState } from 'react'

export default function Search() {
  const [priceRange, setPriceRange] = useState([50, 500])

  const vehicles = [
    {
      id: 1,
      name: 'Tesla Model Y Performance',
      year: 2024,
      category: 'SUV',
      price: 129,
      image: 'https://images.unsplash.com/photo-1560958089-b8a1929cea89?w=600',
      rating: 4.9,
      seats: 5,
      transmission: 'Auto',
      fuel: 'Electric',
      available: true
    },
    {
      id: 2,
      name: 'Porsche 911 Carrera',
      year: 2023,
      category: 'Sports',
      price: 350,
      image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=600',
      rating: 5.0,
      seats: 4,
      transmission: 'Auto',
      fuel: 'Petrol',
      available: true
    },
    {
      id: 3,
      name: 'Mercedes-Benz G-Class',
      year: 2023,
      category: 'SUV',
      price: 400,
      image: 'https://images.unsplash.com/photo-1617531653520-bd4f03619e05?w=600',
      rating: 4.8,
      seats: 5,
      transmission: 'Auto',
      fuel: 'Petrol',
      available: true
    },
    {
      id: 4,
      name: 'BMW M4 Competition',
      year: 2024,
      category: 'Coupe',
      price: 299,
      image: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?w=600',
      rating: 4.9,
      seats: 4,
      transmission: 'Auto',
      fuel: 'Petrol',
      available: true
    },
    {
      id: 5,
      name: 'Range Rover Autobiography',
      year: 2023,
      category: 'SUV',
      price: 450,
      image: 'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=600',
      rating: 4.7,
      seats: 5,
      transmission: 'Auto',
      fuel: 'Petrol',
      available: true
    },
    {
      id: 6,
      name: 'Audi RS e-tron GT',
      year: 2024,
      category: 'Sedan',
      price: 399,
      image: 'https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?w=600',
      rating: 4.9,
      seats: 5,
      transmission: 'Auto',
      fuel: 'Electric',
      available: true
    },
  ]

  return (
    <div style={{ backgroundColor: '#fafafa', minHeight: '100vh', paddingTop: '2rem', paddingBottom: '4rem' }}>
      <Container>
        {/* Header */}
        <div className="mb-4">
          <h1 className="fw-bold mb-2" style={{ fontSize: '2.5rem' }}>Find your perfect ride</h1>
          <p className="text-muted">{vehicles.length} vehicles available in San Francisco, CA</p>
        </div>

        <Row>
          {/* Filters Sidebar */}
          <Col lg={3} className="mb-4">
            <div className="search-sidebar">
              {/* Price Range */}
              <div className="mb-4">
                <h6 className="fw-bold mb-3">Price Range</h6>
                <input 
                  type="range" 
                  className="form-range mb-2" 
                  min="50" 
                  max="500" 
                  value={priceRange[1]}
                  onChange={(e) => setPriceRange([50, parseInt(e.target.value)])}
                  style={{ accentColor: '#14b8a6' }}
                />
                <div className="d-flex justify-content-between">
                  <span className="fw-semibold">${priceRange[0]}</span>
                  <span className="fw-semibold">${priceRange[1]}+</span>
                </div>
              </div>

              {/* Category */}
              <div className="mb-4">
                <h6 className="fw-bold mb-3">Category</h6>
                {['SUV', 'Sedan', 'Sports', 'Coupe', 'Luxury', 'Electric'].map((cat) => (
                  <Form.Check
                    key={cat}
                    type="radio"
                    name="category"
                    label={cat}
                    className="mb-2"
                  />
                ))}
              </div>

              {/* Transmission */}
              <div className="mb-4">
                <h6 className="fw-bold mb-3">Transmission</h6>
                <Form.Check type="radio" name="transmission" label="Automatic" className="mb-2" />
                <Form.Check type="radio" name="transmission" label="Manual" className="mb-2" />
              </div>

              {/* Features */}
              <div className="mb-4">
                <h6 className="fw-bold mb-3">Features</h6>
                <Form.Check type="checkbox" label="Bluetooth" className="mb-2" />
                <Form.Check type="checkbox" label="GPS" className="mb-2" />
                <Form.Check type="checkbox" label="Sunroof" className="mb-2" />
                <Form.Check type="checkbox" label="Heated Seats" className="mb-2" />
                <Form.Check type="checkbox" label="Apple CarPlay" className="mb-2" />
              </div>
            </div>
          </Col>

          {/* Vehicle Grid */}
          <Col lg={9}>
            {/* Sort */}
            <div className="d-flex justify-content-end mb-4">
              <Form.Select style={{ width: 'auto', borderRadius: '10px' }}>
                <option>Sort by: Recommended</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
                <option>Rating: High to Low</option>
                <option>Newest First</option>
              </Form.Select>
            </div>

            <Row>
              {vehicles.map((vehicle) => (
                <Col key={vehicle.id} lg={4} md={6} className="mb-4">
                  <Card className="vehicle-card h-100">
                    <div className="position-relative">
                      <Card.Img 
                        variant="top" 
                        src={vehicle.image} 
                        className="vehicle-image"
                        alt={vehicle.name}
                      />
                      <span className="vehicle-badge">{vehicle.category}</span>
                      <span className="vehicle-rating">
                        ⭐ {vehicle.rating}
                      </span>
                    </div>
                    <Card.Body>
                      <h5 className="fw-bold mb-1" style={{ fontSize: '1.125rem' }}>
                        {vehicle.name}
                      </h5>
                      <p className="text-muted small mb-3">{vehicle.year}</p>
                      
                      <div className="d-flex gap-3 mb-3 text-muted small">
                        <span>👤 {vehicle.seats}</span>
                        <span>⚙️ {vehicle.transmission}</span>
                        <span>⚡ {vehicle.fuel}</span>
                      </div>

                      <div className="d-flex justify-content-between align-items-center">
                        <div>
                          <div className="price-tag">
                            ${vehicle.price}
                            <small>/day</small>
                          </div>
                        </div>
                        <Button 
                          as={Link} 
                          to={`/vehicle/${vehicle.id}`} 
                          variant="outline-primary"
                          style={{ borderRadius: '10px', padding: '8px 20px' }}
                        >
                          View Details →
                        </Button>
                      </div>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  )
}