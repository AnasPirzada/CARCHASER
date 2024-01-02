import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import CheckBox from './components/checkBox.jsx'
export const index = () =>


  {
    const initialContent = [ '2 sets of tire', 'Car battery', 'Engine oil', 'Air filters', 'Brake pads', 'Spark plugs' ];
    return (
      <div>

        <Container className='mt-5 shadow rounded-3 ' style={ { height: '619px' } }>
          <Row>
            <Col lg={ 12 } className='m-auto pt-5' style={ { width: '90%' } }>
              <p className='text-start ' style={ { color: '#515151', fontWeight: '600', fontSize: '24px', } }>Tell us
                more about your vehicle
              </p>
              <p className='text-start ' style={ { color: '#515151', fontWeight: '400', fontSize: '18px', } }>Share
                details about your vehicle to receive a solid offer within minutes</p>
            </Col>
          </Row>
          <Row className='m-auto mt-5' style={ { width: '90%' } }>
            <Col lg={ 6 }>
              {/* <div className='w-100 d-flex justify-content-between align-items-center'> */}
                { initialContent.map( ( item, index ) => (

                  <CheckBox key={ index } content={ item } />

                ) ) }
              

              {/* </div> */}
            </Col>
            <Col lg={ 6 }>
              <img src="./PNG/6042 [Converted].png" alt="" />
            </Col>
          </Row>
        </Container>



      </div>
    );
  };
  export default index;
