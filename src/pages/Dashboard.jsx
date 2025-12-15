import { Container, Row, Col, Card, Table, Badge, Button, Tab, Tabs } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default function Dashboard() {
  const user = {
    name: 'John Doe',
    email: 'john.doe@example.com',
    memberSince: 'January 2024',
    totalBookings: 12,
  }

  const bookings = [
    {
      id: 1,
      vehicle: 'Tesla Model 3',
      startDate: '2024-03-15',
      endDate: '2024-03-20',
      status: 'active',
      total: 445,
    },
    {
      id: 2,
      vehicle: 'BMW X5',
      startDate: '2024-02-10',
      endDate: '2024-02-15',
      status: 'completed',
      total: 600,
    },
    {
      id: 3,
      vehicle: 'Mercedes C-Class',
      startDate: '2024-04-01',
      endDate: '2024-04-05',
      status: 'upcoming',
      total: 475,
    },
  ]

  const stats = [
    { title: 'Total Bookings', value: user.totalBookings, icon: '📋', color: 'primary' },
    { title: 'Active Rentals', value: 1, icon: '🚗', color: 'success' },
    { title: 'Total Spent', value: '$2,450', icon: '💰', color: 'warning' },
    { title: 'Loyalty Points', value: 1250, icon: '⭐', color: 'info' },
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

  return (
    <Container className="py-5">
      {/* Welcome Section */}
      <Row className="mb-4">
        <Col>
          <h1 className="fw-bold mb-2">Welcome back, {user.name}! 👋</h1>
          <p className="text-muted">Manage your bookings and account settings</p>
        </Col>
      </Row>

      {/* Stats Cards */}
      <Row className="mb-5">
        {stats.map((stat, index) => (
          <Col key={index} md={3} sm={6} className="mb-3">
            <Card className="border-0 shadow-sm h-100 card-hover">
              <Card.Body className="d-flex align-items-center">
                <div className="fs-1 me-3">{stat.icon}</div>
                <div>
                  <p className="text-muted mb-1 small">{stat.title}</p>
                  <h3 className="mb-0 fw-bold">{stat.value}</h3>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      {/* Tabs Section */}
      <Card className="border-0 shadow-sm">
        <Card.Body className="p-4">
          <Tabs defaultActiveKey="bookings" className="mb-4">
            {/* Bookings Tab */}
            <Tab eventKey="bookings" title="My Bookings">
              <div className="table-responsive">
                <Table hover>
                  <thead>
                    <tr>
                      <th>Booking ID</th>
                      <th>Vehicle</th>
                      <th>Start Date</th>
                      <th>End Date</th>
                      <th>Status</th>
                      <th>Total</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {bookings.map((booking) => (
                      <tr key={booking.id}>
                        <td className="fw-bold">#{booking.id}</td>
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
                          <Button variant="outline-primary" size="sm">
                            View Details
                          </Button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              </div>
              {bookings.length === 0 && (
                <div className="text-center py-5">
                  <p className="text-muted mb-3">No bookings yet</p>
                  <Button as={Link} to="/search" variant="primary">
                    Browse Vehicles
                  </Button>
                </div>
              )}
            </Tab>

            {/* Profile Tab */}
            <Tab eventKey="profile" title="Profile">
              <Row>
                <Col md={8}>
                  <h5 className="fw-bold mb-4">Personal Information</h5>
                  <div className="mb-3">
                    <label className="form-label fw-semibold">Full Name</label>
                    <input type="text" className="form-control" defaultValue={user.name} />
                  </div>
                  <div className="mb-3">
                    <label className="form-label fw-semibold">Email</label>
                    <input type="email" className="form-control" defaultValue={user.email} />
                  </div>
                  <div className="mb-3">
                    <label className="form-label fw-semibold">Phone Number</label>
                    <input type="tel" className="form-control" placeholder="+1 (555) 123-4567" />
                  </div>
                  <div className="mb-3">
                    <label className="form-label fw-semibold">Member Since</label>
                    <input type="text" className="form-control" value={user.memberSince} disabled />
                  </div>
                  <Button variant="primary" className="me-2">Save Changes</Button>
                  <Button variant="outline-secondary">Cancel</Button>
                </Col>
              </Row>
            </Tab>

            {/* Payment Methods Tab */}
            <Tab eventKey="payments" title="Payment Methods">
              <h5 className="fw-bold mb-4">Saved Payment Methods</h5>
              <Row>
                <Col md={6} className="mb-3">
                  <Card className="border-2">
                    <Card.Body>
                      <div className="d-flex justify-content-between align-items-start mb-3">
                        <div>
                          <div className="fw-bold">Visa •••• 4242</div>
                          <div className="text-muted small">Expires 12/25</div>
                        </div>
                        <Badge bg="primary">Default</Badge>
                      </div>
                      <div className="d-flex gap-2">
                        <Button variant="outline-primary" size="sm">Edit</Button>
                        <Button variant="outline-danger" size="sm">Remove</Button>
                      </div>
                    </Card.Body>
                  </Card>
                </Col>
                <Col md={6} className="mb-3">
                  <Card className="border-2 border-dashed">
                    <Card.Body className="text-center py-4">
                      <div className="fs-1 mb-2">➕</div>
                      <Button variant="outline-primary">Add Payment Method</Button>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            </Tab>
          </Tabs>
        </Card.Body>
      </Card>
    </Container>
  )
}