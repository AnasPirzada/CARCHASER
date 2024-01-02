import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
export const index = () =>
{
  const CarModels = [
    '',
    'Toyota Camry',
    'Honda Civic',
    'Ford Mustang',
    'Chevrolet Silverado',
    'BMW 3 Series',
    'Mercedes-Benz E-Class',
    'Audi Q5',
    'Tesla Model S',
    'Hyundai Sonata',
    'Nissan Altima'
  ];
  const Years = [
    '',
    '2018',
    '2019',
    '2020',
    '2021',
    '2022',
    '2023',
    '2024',
    '2025',
    '2026',
    '2027'
  ];
  return (
    <div>

      <Container className='mt-5 shadow rounded-3 ' style={ { height: '619px' } }>
        <Row>
          <Col lg={ 12 } className='m-auto pt-5' style={ { width: '90%' } }>
            <p className='text-start ' style={ { color: '#515151', fontWeight: '600', fontSize: '24px', } }>We are dedicated to finding the perfect buyer for your car, making the selling process easier than ever.
            </p>
            <p className='text-start ' style={ { color: '#515151', fontWeight: '400', fontSize: '18px', } }>Share details about your vehicle to receive a solid offer within minutes</p>
          </Col>
        </Row>
        <Row className='m-auto pt-5' style={ { width: '90%' } }>
          <Col lg={ 6 } >
            <div className='d-flex flex-column justify-content-start align-items-start'>
              <label style={ { color: '#515151', fontSize: '16px', fontWeight: '500' } }>VIN <span style={ { color: '#515151', fontSize: '14px', fontWeight: '400' } }>( Vehicle Identification Number )</span></label>
              <input className='shadow p-2 rounded-5 w-100 ms-0 mt-2' type="text" placeholder='' />
            </div>
            <div className=' mt-4 d-flex flex-column justify-content-start align-items-start'>
              <label style={ { color: '#515151', fontSize: '16px', fontWeight: '500' } }>Make</label>
              <input className='shadow p-2 rounded-5 w-100 ms-0 mt-2' type="text" placeholder='' />
            </div>

            <div className='d-flex justify-content-between align-items-center mt-4'>
              <div className='d-flex flex-column  justify-content-start align-items-start'>
                <label style={ { color: '#515151', fontSize: '16px', fontWeight: '500' } }>Model</label>
                <select className='w-100 p-2 shadow border-0   rounded-5 ' style={ { background: '#FFFFFF' } }>
                  { CarModels.map( ( model, index ) => (
                    <option key={ index } value={ model }>{ model }</option>
                  ) ) }
                </select>
              </div>
              <div className='d-flex flex-column justify-content-start align-items-start'>
                <label style={ { color: '#515151', fontSize: '16px', fontWeight: '500' } }>Year</label>

                <select className='p-2 shadow border-0 rounded-5 ' style={ { background: '#FFFFFF', width: '200px' } }>
                  { Years.map( ( year, index ) => (
                    <option key={ index } value={ year }>{ year }</option>
                  ) ) }
                </select>
              </div>

            </div>
          </Col>
          <Col lg={ 6 } >
            <img src="./PNG/06_20man11 [Converted].png" alt="" />
          </Col>
        </Row>
      </Container>



    </div >
  );
};
export default index;