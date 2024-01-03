import React, { useState } from 'react';
import { Col, Row } from 'react-bootstrap';

export const checkBox = ( { content } ) =>
{
  const [ isActive, setIsActive ] = useState( true ); // State to track checkbox state

  const activeStyle = {
    width: '48px',
    height: '44px',
    borderRadius: '12px 0px 0px 12px',
    backgroundColor: '#4E9C0B',
  };
  const Para = {
    width: '196px ',
    height: '48px ',
    borderRadius: '0px 12px 12px 0px'
    // backgroundColor: '#4E9C'
  };

  const textStyles = {
    color: isActive ? '#515151' : '#959595',
    fontSize: '16px',
    fontWeight: '500',
  };
  const notActiveStyle = {
    width: '48px',
    height: '44px',
    borderRadius: '12px 0px 0px 12px',
  };

  const toggleCheckBox = () =>
  {
    setIsActive( !isActive );
  };

  return (
    <div>


      <Row className={ `d-flex justify-content-between align-items-center mt-5 ${ isActive ? 'active' : 'not-active' }` }>
        <Col xs={ 6 } lg={ 1 } onClick={ toggleCheckBox }>
          <div className={ `shadow d-flex justify-content-center align-items-center` } style={ isActive ? activeStyle : notActiveStyle }>
            <img src="./checkboxTick.svg" alt="" />
          </div>
        </Col>
        <Col xs={ 6 } lg={ 10 }>
          <div className='shadow Para ms-2 ' style={ Para }>
            <p className=' my-0 text-start p-2 ' style={ textStyles } >
              { content }
            </p>
          </div>
        </Col>
      </Row>

    </div>
  );
};

export default checkBox;