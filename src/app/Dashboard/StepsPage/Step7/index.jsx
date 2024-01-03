import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
export const index = () =>
{
  return (
    <div>
      <Container className='mt-5 shadow rounded-3 ' style={ { height: '619px' } }>
        <Row>
          <Col lg={ 12 } className='m-auto pt-5' style={ { width: '90%' } }>
            <p
              className='text-start '
              style={ { color: '#515151', fontWeight: '600', fontSize: '24px' } }
            >
              Now is the perfect moment to sell your vehicle. No time !
            </p>
            <p
              className='text-start '
              style={ { color: '#515151', fontWeight: '400', fontSize: '18px' } }
            >
              Share details about your vehicle to receive a solid offer within
              minutes
            </p>
          </Col>
        </Row>
        <Row className='m-auto pt-5' style={ { width: '90%' } }>
          <Col lg={ 8 }>
            <Row className='d-flex justify-content-between align-items-center'>
              <Col className='d-flex flex-column justify-content-center align-items-center shadow rounded-5 ' style={ { width: '220px', height: '149.72px', marginBottom: '20px' } }>
                <img src='./Frame 68081.svg' alt='' />
                <p className='my-0  mt-2' style={ { color: '#959595', fontSize: '16px', fontWeight: '500' } }>Add images</p>
              </Col>
              <Col className='d-flex flex-column justify-content-center align-items-center shadow rounded-5  ms-4' style={ { width: '220px', height: '149.72px', marginBottom: '20px' } }>
                <img src='./Frame 68081.svg' alt='' />
                <p className='my-0  mt-2' style={ { color: '#959595', fontSize: '16px', fontWeight: '500' } }>Add images</p>
              </Col>
            </Row>
            <Row className='d-flex justify-content-between align-items-center'>
              <Col className='d-flex flex-column  justify-content-center align-items-center shadow rounded-5 ' style={ { width: '220px', height: '149.72px', marginBottom: '20px' } }>
                <img src='./Frame 68081.svg' alt='' />
                <p className='my-0  mt-2' style={ { color: '#959595', fontSize: '16px', fontWeight: '500' } }>Add images</p>
              </Col>
              <Col className='d-flex flex-column justify-content-center align-items-center shadow rounded-5  ms-4' style={ { width: '220px', height: '149.72px', marginBottom: '20px' } }>
                <img src='./Frame 68081.svg' alt='' />
                <p className='my-0  mt-2' style={ { color: '#959595', fontSize: '16px', fontWeight: '500' } }>Add images</p>
              </Col>
            </Row>
          </Col>
          <Col lg={ 4 }>
            <img src='./PNG/Group 17186.png' alt='' style={ { width: '350px' } } />
          </Col>
        </Row>

      </Container>
    </div>
  );
};
export default index;
