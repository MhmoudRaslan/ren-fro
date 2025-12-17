import { Container, Row, Col, Card, Table, Badge, Button, Modal } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'
import { useState } from 'react'

export default function Dashboard() {
  const { user } = useAuth()
  const [showModal, setShowModal] = useState(false)
  const [selectedBooking, setSelectedBooking] = useState(null)

  // Mock bookings with customer data
  const allBookings = [
    {
      id: 1,
      vehicleId: 1,
      vehicle: 'Tesla Model Y Performance',
      customer: 'John Smith',
      customerEmail: 'john@example.com',
      customerPhone: '+1 (555) 123-4567',
      startDate: '2024-12-20',
      endDate: '2024-12-25',
      pickupLocation: 'San Francisco Airport',
      dropoffLocation: 'San Francisco Airport',
      status: 'active',
      total: 645,
      pricePerDay: 129,
      days: 5
    },
    {
      id: 2,
      vehicleId: 2,
      vehicle: 'Porsche 911 Carrera',
      customer: 'Sarah Johnson',
      customerEmail: 'sarah@example.com',
      customerPhone: '+1 (555) 234-5678',
      startDate: '2024-12-18',
      endDate: '2024-12-21',
      pickupLocation: 'Downtown SF',
      dropoffLocation: 'Downtown SF',
      status: 'active',
      total: 1050,
      pricePerDay: 350,
      days: 3
    },
    {
      id: 3,
      vehicleId: 4,
      vehicle: 'BMW M4 Competition',
      customer: 'Mike Davis',
      customerEmail: 'mike@example.com',
      customerPhone: '+1 (555) 345-6789',
      startDate: '2025-01-10',
      endDate: '2025-01-15',
      pickupLocation: 'Oakland Airport',
      dropoffLocation: 'Oakland Airport',
      status: 'upcoming',
      total: 1495,
      pricePerDay: 299,
      days: 5
    }
  ]

  // Calculate stats
  const totalVehicles = 6
  const availableVehicles = 3
  const rentedVehicles = 2
  const maintenanceVehicles = 1
  const activeBookings = allBookings.filter(b => b.status === 'active').length
  const totalRevenue = allBookings.reduce((sum, b) => sum + b.total, 0)

  const stats = [
    { title: 'Total Vehicles', value: totalVehicles, icon: '🚗', color: 'primary', trend: '+2 this month' },
    { title: 'Available', value: availableVehicles, icon: '✅', color: 'success', trend: `${availableVehicles} ready` },
    { title: 'Rented Out', value: rentedVehicles, icon: '🔑', color: 'warning', trend: `${activeBookings} active bookings` },
    { title: 'Maintenance', value: maintenanceVehicles, icon: '🔧', color: 'danger', trend: '1 in service' },
  ]

  const getStatusBadge = (status) => {
    const variants = {
      active: 'success',
      completed: 'secondary',
      upcoming: 'info',
      cancelled: 'danger',
    }
    return variants[status] || 'secondary'
  }

  const handleViewDetails = (booking) => {
    setSelectedBooking(booking)
    setShowModal(true)
  }

  return (
    <Container className="py-5">
      {/* Welcome Section */}
      <Row className="mb-4">
        <Col>
          <h1 className="fw-bold mb-2">Welcome back, {user?.name || 'Admin'}! 👋</h1>
          <p className="text-muted">Here's what's happening with your fleet today</p>
        </Col>
      </Row>

      {/* Stats Cards */}
      <Row className="mb-5">
        {stats.map((stat, index) => (
          <Col key={index} md={3} sm={6} className="mb-3">
            <Card className="border-0 shadow-sm h-100 card-hover">
              <Card.Body>
                <div className="d-flex justify-content-between align-items-start mb-3">
                  <div>
                    <p className="text-muted mb-1 small">{stat.title}</p>
                    <h2 className="mb-0 fw-bold">{stat.value}</h2>
                  </div>
                  <div 
                    className="fs-1"
                    style={{
                      width: '50px',
                      height: '50px',
                      background: `linear-gradient(135deg, var(--bs-${stat.color}) 0%, var(--bs-${stat.color}) 100%)`,
                      borderRadius: '12px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      opacity: 0.9
                    }}
                  >
                    {stat.icon}
                  </div>
                </div>
                <small className="text-muted">{stat.trend}</small>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      {/* Revenue Card */}
      <Row className="mb-4">
        <Col md={12}>
          <Card className="border-0 shadow-sm" style={{ background: 'linear-gradient(135deg, #14b8a6 0%, #0d9488 100%)' }}>
            <Card.Body className="p-4 text-white">
              <Row className="align-items-center">
                <Col md={8}>
                  <h5 className="fw-bold mb-2">Total Revenue (This Month)</h5>
                  <h2 className="display-4 fw-bold mb-0">${totalRevenue.toLocaleString()}</h2>
                </Col>
                <Col md={4} className="text-end">
                  <div className="fs-1 mb-2">💰</div>
                  <p className="mb-0 opacity-75">+15% from last month</p>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Bookings Table */}
      <Card className="border-0 shadow-sm">
        <Card.Body className="p-4">
          <div className="d-flex justify-content-between align-items-center mb-4">
            <h4 className="fw-bold mb-0">Recent Bookings</h4>
            <Button variant="outline-primary" size="sm">View All Bookings</Button>
          </div>

          <div className="table-responsive">
            <Table hover>
              <thead>
                <tr>
                  <th>Booking ID</th>
                  <th>Customer</th>
                  <th>Vehicle</th>
                  <th>Start Date</th>
                  <th>End Date</th>
                  <th>Status</th>
                  <th>Total</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {allBookings.map((booking) => (
                  <tr key={booking.id}>
                    <td className="fw-bold">#{booking.id}</td>
                    <td>
                      <div>{booking.customer}</div>
                      <small className="text-muted">{booking.customerEmail}</small>
                    </td>
                    <td>{booking.vehicle}</td>
                    <td>{booking.startDate}</td>
                    <td>{booking.endDate}</td>
                    <td>
                      <Badge bg={getStatusBadge(booking.status)} className="text-capitalize">
                        {booking.status}
                      </Badge>
                    </td>
                    <td className="fw-bold">${booking.total}</td>
                    <td>
                      <Button 
                        variant="outline-primary" 
                        size="sm"
                        onClick={() => handleViewDetails(booking)}
                      >
                        View Details
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>

          {allBookings.length === 0 && (
            <div className="text-center py-5">
              <p className="text-muted mb-3">No bookings yet</p>
              <Button as={Link} to="/search" variant="primary">
                Add New Booking
              </Button>
            </div>
          )}
        </Card.Body>
      </Card>

      {/* Booking Details Modal */}
      <Modal show={showModal} onHide={() => setShowModal(false)} size="lg" centered>
        <Modal.Header closeButton>
          <Modal.Title>Booking Details - #{selectedBooking?.id}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {selectedBooking && (
            <Row>
              <Col md={6}>
                <h5 className="fw-bold mb-3">Customer Information</h5>
                <div className="mb-3">
                  <label className="text-muted small">Full Name</label>
                  <div className="fw-semibold">{selectedBooking.customer}</div>
                </div>
                <div className="mb-3">
                  <label className="text-muted small">Email</label>
                  <div className="fw-semibold">{selectedBooking.customerEmail}</div>
                </div>
                <div className="mb-3">
                  <label className="text-muted small">Phone</label>
                  <div className="fw-semibold">{selectedBooking.customerPhone}</div>
                </div>
                <div className="mb-3">
                  <label className="text-muted small">Status</label>
                  <div>
                    <Badge bg={getStatusBadge(selectedBooking.status)} className="text-capitalize">
                      {selectedBooking.status}
                    </Badge>
                  </div>
                </div>
              </Col>
              
              <Col md={6}>
                <h5 className="fw-bold mb-3">Trip Information</h5>
                <div className="mb-3">
                  <label className="text-muted small">Vehicle</label>
                  <div className="fw-semibold">{selectedBooking.vehicle}</div>
                </div>
                <div className="mb-3">
                  <label className="text-muted small">Pickup Location</label>
                  <div className="fw-semibold">{selectedBooking.pickupLocation}</div>
                </div>
                <div className="mb-3">
                  <label className="text-muted small">Dropoff Location</label>
                  <div className="fw-semibold">{selectedBooking.dropoffLocation}</div>
                </div>
                <div className="mb-3">
                  <label className="text-muted small">Duration</label>
                  <div className="fw-semibold">
                    {selectedBooking.startDate} to {selectedBooking.endDate}
                    <span className="text-muted ms-2">({selectedBooking.days} days)</span>
                  </div>
                </div>
              </Col>

              <Col md={12}>
                <hr className="my-4" />
                <h5 className="fw-bold mb-3">Payment Details</h5>
                <div className="bg-light p-3 rounded">
                  <div className="d-flex justify-content-between mb-2">
                    <span>Daily Rate</span>
                    <span>${selectedBooking.pricePerDay}/day</span>
                  </div>
                  <div className="d-flex justify-content-between mb-2">
                    <span>Number of Days</span>
                    <span>{selectedBooking.days} days</span>
                  </div>
                  <hr />
                  <div className="d-flex justify-content-between">
                    <span className="fw-bold fs-5">Total Amount</span>
                    <span className="fw-bold fs-5 text-primary">${selectedBooking.total}</span>
                  </div>
                </div>
              </Col>
            </Row>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Close
          </Button>
          <Button 
            variant="primary" 
            as={Link} 
            to={`/vehicle/${selectedBooking?.vehicleId}`}
            onClick={() => setShowModal(false)}
          >
            View Vehicle
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  )
}