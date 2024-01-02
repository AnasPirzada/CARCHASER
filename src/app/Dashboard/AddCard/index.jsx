import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
export const index = () =>
{
  return (
    <div>

      <Row className='text-center mt-5'>
        <Col lg={ 12 }><img src="./PNG/4860245.png" alt="" /></Col>
      </Row>

      <Row className='text-center mb-5 d-flex flex-column justify-content-center align-items-center'>
        <Col lg={ 6 }>
          <p className='mt-4' style={ { color: '#515151', fontSize: '24px', fontWeight: '700' } }>Lead to automotive excellence</p>
          <p className='my-0' style={ { color: '#515151', fontSize: '16px', fontWeight: '400' } }>According to the actual needs, you can create different type </p>
          <p className='my-0' style={ { color: '#515151', fontSize: '16px', fontWeight: '400' } }>of questio You can also select the questions.</p>
        </Col>
        <Col lg={ 6 } className='mt-4'>
          <Link to="/Stepper">
            <button className='w-25 p-2 rounded-5 border-0 ' style={ { backgroundColor: '#F3B755', color: '#FFFFFF ' } } >Add Car Detail</button></Link>
        </Col>
      </Row>
    </div>
  );
};
export default index;