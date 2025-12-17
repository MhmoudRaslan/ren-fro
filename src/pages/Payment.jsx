import { useParams, useNavigate } from 'react-router-dom'
import { Container, Row, Col, Card, Form, Button, ListGroup } from 'react-bootstrap'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import toast from 'react-hot-toast'
import { useState, useEffect } from 'react'

const paymentSchema = z.object({
  cardNumber: z.string().regex(/^\d{16}$/, 'Card number must be 16 digits'),
  cardName: z.string().min(2, 'Name must be at least 2 characters'),
  expiryDate: z.string().regex(/^\d{2}\/\d{2}$/, 'Format: MM/YY'),
  cvv: z.string().regex(/^\d{3,4}$/, 'CVV must be 3 or 4 digits'),
  billingAddress: z.string().min(5, 'Address is required'),
  city: z.string().min(2, 'City is required'),
  zipCode: z.string().min(5, 'Zip code is required'),
})

export default function Payment() {
  const { vehicleId } = useParams()
  const navigate = useNavigate()
  const [days, setDays] = useState(5)
  
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(paymentSchema),
  })

  // Vehicle database with all vehicles
  const vehicles = {
    1: { name: 'Tesla Model Y Performance', pricePerDay: 129 },
    2: { name: 'Porsche 911 Carrera', pricePerDay: 350 },
    3: { name: 'Mercedes-Benz G-Class', pricePerDay: 400 },
    4: { name: 'BMW M4 Competition', pricePerDay: 299 },
    5: { name: 'Range Rover Autobiography', pricePerDay: 450 },
    6: { name: 'Audi RS e-tron GT', pricePerDay: 399 },
  }

  const vehicleData = vehicles[vehicleId] || { name: 'Unknown Vehicle', pricePerDay: 100 }

  const insurance = 25
  const tax = Math.round(vehicleData.pricePerDay * days * 0.08) // 8% tax
  const subtotal = vehicleData.pricePerDay * days
  const total = subtotal + insurance + tax

  const onSubmit = async (data) => {
    try {
      console.log('Payment data:', data)
      
      // Simulate payment processing
      await new Promise(resolve => setTimeout(resolve, 2000))
      
      toast.success(`Payment of $${total} successful!`)
      navigate('/my-bookings')
    } catch (error) {
      toast.error('Payment failed. Please try again.')
    }
  }

  return (
    <Container className="py-5">
      <Row className="justify-content-center">
        <Col lg={10}>
          <h2 className="fw-bold mb-4">Complete Your Payment</h2>
          
          <Row>
            {/* Payment Form */}
            <Col md={7} className="mb-4">
              <Card className="shadow-sm border-0">
                <Card.Body className="p-4">
                  <h5 className="fw-bold mb-4">Payment Information</h5>
                  
                  <Form onSubmit={handleSubmit(onSubmit)}>
                    <Form.Group className="mb-3">
                      <Form.Label>Card Number</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="1234 5678 9012 3456"
                        maxLength={16}
                        {...register('cardNumber')}
                        isInvalid={!!errors.cardNumber}
                      />
                      <Form.Control.Feedback type="invalid">
                        {errors.cardNumber?.message}
                      </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group className="mb-3">
                      <Form.Label>Cardholder Name</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="John Doe"
                        {...register('cardName')}
                        isInvalid={!!errors.cardName}
                      />
                      <Form.Control.Feedback type="invalid">
                        {errors.cardName?.message}
                      </Form.Control.Feedback>
                    </Form.Group>

                    <Row>
                      <Col md={6}>
                        <Form.Group className="mb-3">
                          <Form.Label>Expiry Date</Form.Label>
                          <Form.Control
                            type="text"
                            placeholder="MM/YY"
                            maxLength={5}
                            {...register('expiryDate')}
                            isInvalid={!!errors.expiryDate}
                          />
                          <Form.Control.Feedback type="invalid">
                            {errors.expiryDate?.message}
                          </Form.Control.Feedback>
                        </Form.Group>
                      </Col>
                      <Col md={6}>
                        <Form.Group className="mb-3">
                          <Form.Label>CVV</Form.Label>
                          <Form.Control
                            type="text"
                            placeholder="123"
                            maxLength={4}
                            {...register('cvv')}
                            isInvalid={!!errors.cvv}
                          />
                          <Form.Control.Feedback type="invalid">
                            {errors.cvv?.message}
                          </Form.Control.Feedback>
                        </Form.Group>
                      </Col>
                    </Row>

                    <hr className="my-4" />

                    <h5 className="fw-bold mb-3">Billing Address</h5>

                    <Form.Group className="mb-3">
                      <Form.Label>Street Address</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="123 Main Street"
                        {...register('billingAddress')}
                        isInvalid={!!errors.billingAddress}
                      />
                      <Form.Control.Feedback type="invalid">
                        {errors.billingAddress?.message}
                      </Form.Control.Feedback>
                    </Form.Group>

                    <Row>
                      <Col md={6}>
                        <Form.Group className="mb-3">
                          <Form.Label>City</Form.Label>
                          <Form.Control
                            type="text"
                            placeholder="New York"
                            {...register('city')}
                            isInvalid={!!errors.city}
                          />
                          <Form.Control.Feedback type="invalid">
                            {errors.city?.message}
                          </Form.Control.Feedback>
                        </Form.Group>
                      </Col>
                      <Col md={6}>
                        <Form.Group className="mb-3">
                          <Form.Label>Zip Code</Form.Label>
                          <Form.Control
                            type="text"
                            placeholder="10001"
                            {...register('zipCode')}
                            isInvalid={!!errors.zipCode}
                          />
                          <Form.Control.Feedback type="invalid">
                            {errors.zipCode?.message}
                          </Form.Control.Feedback>
                        </Form.Group>
                      </Col>
                    </Row>

                    <Button 
                      type="submit" 
                      variant="primary" 
                      size="lg" 
                      className="w-100 mt-3"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? 'Processing...' : `Pay $${total}`}
                    </Button>
                  </Form>
                </Card.Body>
              </Card>
            </Col>

            {/* Order Summary */}
            <Col md={5}>
              <Card className="shadow-sm border-0 sticky-top" style={{ top: '100px' }}>
                <Card.Body className="p-4">
                  <h5 className="fw-bold mb-4">Order Summary</h5>
                  
                  <div className="mb-3">
                    <h6 className="fw-bold">{vehicleData.name}</h6>
                    <p className="text-muted small mb-2">
                      Rental Duration
                    </p>
                    <Form.Select 
                      value={days}
                      onChange={(e) => setDays(parseInt(e.target.value))}
                      className="mb-2"
                    >
                      <option value="1">1 day</option>
                      <option value="2">2 days</option>
                      <option value="3">3 days</option>
                      <option value="5">5 days</option>
                      <option value="7">7 days</option>
                      <option value="14">14 days</option>
                      <option value="30">30 days</option>
                    </Form.Select>
                  </div>

                  <ListGroup variant="flush" className="mb-3">
                    <ListGroup.Item className="d-flex justify-content-between px-0">
                      <span>Rental (${vehicleData.pricePerDay} × {days} days)</span>
                      <span className="fw-semibold">${subtotal}</span>
                    </ListGroup.Item>
                    <ListGroup.Item className="d-flex justify-content-between px-0">
                      <span>Insurance</span>
                      <span className="fw-semibold">${insurance}</span>
                    </ListGroup.Item>
                    <ListGroup.Item className="d-flex justify-content-between px-0">
                      <span>Tax (8%)</span>
                      <span className="fw-semibold">${tax}</span>
                    </ListGroup.Item>
                  </ListGroup>

                  <hr />

                  <div className="d-flex justify-content-between mb-3">
                    <span className="fw-bold fs-5">Total</span>
                    <span className="fw-bold fs-5 text-primary">${total}</span>
                  </div>

                  <div className="bg-light p-3 rounded">
                    <p className="small mb-2 fw-semibold">🔒 Secure Payment</p>
                    <p className="small text-muted mb-0">
                      Your payment information is encrypted and secure
                    </p>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  )
}