import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useMediaQuery } from 'react-responsive';
import CheckBox from '../Step3/components/checkBox.jsx';
import CheckSmallBox from './components/checkBox.jsx';

export const index = () =>
{
  const isMobile = useMediaQuery( { maxWidth: 768 } );

  const ImgforCol = {
    display: isMobile ? 'none' : 'block',

  };




  const initialContent = [
    'Any rust?',
    'Any Cracked bodywork',
    'No exterior damage',
    'Chipped it cracked',
  ];
  const initialSmallContent = [
    'Dents',
    'Scratches',
    'Paint Chips',
  ];

  return (
    <div>
      <Container className='mt-5 shadow rounded-5 ' style={ { height: '619px' } }>
        <Row className='px-4 '>
          <Col lg={ 12 } className='m-auto pt-5' style={ { width: '100%' } }>
            <p
              className='text-start '
              style={ { color: '#515151', fontWeight: '600', fontSize: '24px' } }
            >
              Please select any relevant external damage to the vehicle.
            </p>
          </Col>
        </Row>
        <div className='d-flex   justify-content-between align-items-center px-4' >
          <div className='d-flex  flex-column  justify-content-between align-items-center px-0 px-md-4' >

            <Row className=' mt-3 d-md-flex justify-content-between align-items-center' >
              { initialContent.map( ( item, index ) => (
                <Col key={ index } lg={ 6 } xs={6 }>
                  <CheckBox content={ item } />
                </Col>
              ) ) }
            </Row>
            <Row className=' mt-3 d-md-flex justify-content-between align-items-center' >
              { initialSmallContent.map( ( item, index ) => (
                <Col key={ index } lg={ 4 } xs={ 4 }>
                  <CheckSmallBox content={ item } />
                </Col>
              ) ) }
            </Row>
          </div>
          <Row className=' mt-3' >
            <Col lg={ 6 } xs={ 12 }>
              <img src='./PNG/k6k9_yzmq_220226 [Converted].png' alt=''
                style={ ImgforCol }
              />
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
};
export default index;
