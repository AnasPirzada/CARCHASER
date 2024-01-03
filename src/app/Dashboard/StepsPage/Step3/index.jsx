import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useMediaQuery } from 'react-responsive';
import CheckBox from './components/checkBox.jsx';

export const index = () =>
{
  const isMobile = useMediaQuery( { maxWidth: 768 } );

  const ImgforCol = {
    display: isMobile ? 'none' : 'block',

  };




  const initialContent = [
    '2 sets of tire',
    'Window tint',
    'Aftermarket exhaust',
    'Aftermarket rims',
    'Roof rack',
    'Remote starter',
    'Aftermarket stereo',
    'Aftermarket spoiler',

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
              Tell us more about your vehicle
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
        <div className='d-flex justify-content-between align-items-center px-4' >
          <Row className=' mt-3 d-md-flex justify-content-between align-items-center' >
            { initialContent.map( ( item, index ) => (
              <Col key={ index } lg={ 6 } xs={ 6 }>
                <CheckBox content={ item } />
              </Col>
            ) ) }
          </Row>
          <Row className=' mt-3' >
            <Col lg={ 6 } xs={ 12 }>
              <img src='./PNG/6042 [Converted].png' alt=''
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
