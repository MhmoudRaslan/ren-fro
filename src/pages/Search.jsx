import { Link } from 'react-router-dom'
import { Container, Row, Col, Card, Form, Button, Badge } from 'react-bootstrap'
import { useState } from 'react'

export default function Search() {
  const [filters, setFilters] = useState({
    category: '',
    priceRange: '',
    transmission: '',
    fuelType: '',
  })

  const vehicles = [
    {
      id: 1,
      name: 'Tesla Model 3',
      category: 'Electric',
      price: 89,
      image: 'https://images.unsplash.com/photo-1560958089-b8a1929cea89?w=400',
      rating: 4.8,
      transmission: 'Automatic',
      seats: 5,
      available: true
    },
    {
      id: 2,
      name: 'BMW X5',
      category: 'SUV',
      price: 120,
      image: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?w=400',
      rating: 4.9,
      transmission: 'Automatic',
      seats: 7,
      available: true
    },
    {
      id: 3,
      name: 'Mercedes C-Class',
      category: 'Sedan',
      price: 95,
      image: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=400',
      rating: 4.7,
      transmission: 'Automatic',
      seats: 5,
      available: false
    },
    {
      id: 4,
      name: 'Audi A4',
      category: 'Sedan',
      price: 85,
      image: 'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=400',
      rating: 4.6,
      transmission: 'Automatic',
      seats: 5,
      available: true
    },
    {
      id: 5,
      name: 'Ford Mustang',
      category: 'Sports',
      price: 110,
      image: 'https://images.unsplash.com/photo-1584345604476-8ec5f1f49587?w=400',
      rating: 4.8,
      transmission: 'Manual',
      seats: 4,
      available: true
    },
    {
      id: 6,
      name: 'Toyota Camry',
      category: 'Sedan',
      price: 65,
      image: 'https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?w=400',
      rating: 4.5,
      transmission: 'Automatic',
      seats: 5,
      available: true
    },
  ]

  return (
    <Container className="py-5">
      <h1 className="fw-bold mb-4">Search Vehicles</h1>
      
      <Row>
        {/* Filters Sidebar */}
        <Col md={3} className="mb-4">
          <Card className="shadow-sm border-0 sticky-top" style={{ top: '100px' }}>
            <Card.Body>
              <h5 className="fw-bold mb-4">Filters</h5>
              
              <Form>
                <Form.Group className="mb-3">
                  <Form.Label className="fw-semibold">Category</Form.Label>
                  <Form.Select
                    value={filters.category}
                    onChange={(e) => setFilters({ ...filters, category: e.target.value })}
                  >
                    <option value="">All Categories</option>
                    <option value="sedan">Sedan</option>
                    <option value="suv">SUV</option>
                    <option value="sports">Sports</option>
                    <option value="electric">Electric</option>
                  </Form.Select>
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label className="fw-semibold">Price Range</Form.Label>
                  <Form.Select
                    value={filters.priceRange}
                    onChange={(e) => setFilters({ ...filters, priceRange: e.target.value })}
                  >
                    <option value="">All Prices</option>
                    <option value="0-50">$0 - $50</option>
                    <option value="50-100">$50 - $100</option>
                    <option value="100-150">$100 - $150</option>
                    <option value="150+">$150+</option>
                  </Form.Select>
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label className="fw-semibold">Transmission</Form.Label>
                  <Form.Select
                    value={filters.transmission}
                    onChange={(e) => setFilters({ ...filters, transmission: e.target.value })}
                  >
                    <option value="">All</option>
                    <option value="automatic">Automatic</option>
                    <option value="manual">Manual</option>
                  </Form.Select>
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label className="fw-semibold">Fuel Type</Form.Label>
                  <Form.Select
                    value={filters.fuelType}
                    onChange={(e) => setFilters({ ...filters, fuelType: e.target.value })}
                  >
                    <option value="">All</option>
                    <option value="gasoline">Gasoline</option>
                    <option value="diesel">Diesel</option>
                    <option value="electric">Electric</option>
                    <option value="hybrid">Hybrid</option>
                  </Form.Select>
                </Form.Group>

                <Button variant="primary" className="w-100 mb-2">
                  Apply Filters
                </Button>
                <Button variant="outline-secondary" className="w-100">
                  Reset Filters
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>

        {/* Vehicle Grid */}
        <Col md={9}>
          <div className="d-flex justify-content-between align-items-center mb-4">
            <p className="text-muted mb-0">{vehicles.length} vehicles found</p>
            <Form.Select style={{ width: 'auto' }}>
              <option>Sort by: Recommended</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
              <option>Rating: High to Low</option>
            </Form.Select>
          </div>

          <Row>
            {vehicles.map((vehicle) => (
              <Col key={vehicle.id} lg={4} md={6} className="mb-4">
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
                      <div className="text-warning">⭐ {vehicle.rating}</div>
                    </div>
                    
                    <div className="d-flex gap-3 text-muted small mb-3">
                      <span>🚗 {vehicle.transmission}</span>
                      <span>👥 {vehicle.seats} seats</span>
                    </div>

                    <div className="d-flex justify-content-between align-items-center">
                      <div className="price-tag">
                        ${vehicle.price}<small className="text-muted fs-6">/day</small>
                      </div>
                      <Button 
                        as={Link} 
                        to={`/vehicle/${vehicle.id}`} 
                        variant="primary"
                        size="sm"
                        disabled={!vehicle.available}
                      >
                        {vehicle.available ? 'View' : 'Unavailable'}
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
  )
}