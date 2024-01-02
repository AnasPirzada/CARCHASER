import React, { useState } from 'react';
import { Row, Col } from 'react-bootstrap';

export const checkBox = ( { content } ) =>
{
  const [ isActive, setIsActive ] = useState( true ); // State to track checkbox state

  const activeStyle = {
    width: '48px',
    height: '44px',
    borderRadius: '12px 0px 0px 12px',
    backgroundColor: '#4E9C0B',
  };

  const notActiveStyle = {
    width: '48px',
    height: '44px',
    borderRadius: '12px 0px 0px 12px', // Modify this as per your design
    // Add styles for the not active state here
  };

  const toggleCheckBox = () =>
  {
    setIsActive( !isActive );
  };

  return (
    <div>


      <Row className={ `justify-content-between align-items-center ${ isActive ? 'active' : 'not-active' }` }>
        <Col xs={ 6 } lg={1 } onClick={ toggleCheckBox }>
          <div className={ `shadow d-flex justify-content-center align-items-center` } style={ isActive ? activeStyle : notActiveStyle }>
            <img src="./checkboxTick.svg" alt="" />
          </div>
        </Col>
        <Col xs={ 6 } lg={ 10 }>
          <div className='shadow d-flex justify-content-start align-items-start'>
            <p className='m-2 w-100'>
              { content } { isActive ? '(Active)' : '(Not Active)' }
            </p>
          </div>
        </Col>
      </Row>


    </div>
  );
};

export default checkBox;