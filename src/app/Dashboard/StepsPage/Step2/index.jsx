import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
export const index = () =>
{
  const colors = [
    '',
    'red', // Toyota Camry
    'blue', // Honda Civic
    'green', // Ford Mustang
    'orange', // Chevrolet Silverado
    'purple', // BMW 3 Series
    'teal', // Mercedes-Benz E-Class
    'brown', // Audi Q5
    'magenta', // Tesla Model S
    'navy', // Hyundai Sonata
    'olive' // Nissan Altima
  ];
  const Keys = [
    '',
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
  ];
  return (
    <div>

      <Container className='mt-5 shadow rounded-3 ' style={ { height: '619px' } }>
        <Row>
          <Col lg={ 12 } className='m-auto pt-5' style={ { width: '90%' } }>
            <p className='text-start ' style={ { color: '#515151', fontWeight: '600', fontSize: '24px', } }>Tell us more about your vehicle
            </p>
            <p className='text-start ' style={ { color: '#515151', fontWeight: '400', fontSize: '18px', } }>Share details about your vehicle to receive a solid<br /> offer within minutes</p>
          </Col>
        </Row>
        <Row className='m-auto pt-5' style={ { width: '90%' } }>
          <Col lg={ 6 } >
            <div className='d-flex flex-column justify-content-start align-items-start'>
              <label style={ { color: '#515151', fontSize: '16px', fontWeight: '500' } }>Mileage</label>
              <input className='shadow p-2 rounded-5 w-100 ms-0 mt-2' type="text" placeholder='' />
            </div>

            <div className='d-flex justify-content-between align-items-center mt-4'>
              <div className='d-flex flex-column  justify-content-start align-items-start'>
                <label style={ { color: '#515151', fontSize: '16px', fontWeight: '500' } }>Color</label>
                <select className=' p-2 shadow border-0   rounded-5 ' style={ { background: '#FFFFFF', width: '200px'  } }>
                  { colors.map( ( model, index ) => (
                    <option key={ index } value={ model }>{ model }</option>
                  ) ) }
                </select>
              </div>
              <div className='d-flex flex-column justify-content-start align-items-start'>
                <label style={ { color: '#515151', fontSize: '16px', fontWeight: '500' } }>Keys</label>

                <select className='p-2 shadow border-0 rounded-5 ' style={ { background: '#FFFFFF', width: '200px' } }>
                  { Keys.map( ( year, index ) => (
                    <option key={ index } value={ year }>{ year }</option>
                  ) ) }
                </select>
              </div>

            </div>
            <div className=' mt-4 d-flex flex-column justify-content-start align-items-start'>
              <label style={ { color: '#515151', fontSize: '16px', fontWeight: '500' } }>Trim</label>
              <input className='shadow p-2 rounded-5 w-100 ms-0 mt-2' type="text" placeholder='' />
            </div>
          </Col>
          <Col lg={ 6 } >
            <img src="./PNG/3339153.png" alt="" />
          </Col>
        </Row>
      </Container>



    </div >
  );
};
export default index;