import React, { useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import { useMediaQuery } from 'react-responsive';
export const checkBox = ( { content } ) =>
{
  const [ isActive, setIsActive ] = useState( true ); // State to track checkbox state
  const isMobile = useMediaQuery( { maxWidth: 768 } );
  const activeStyle = {
    width: isMobile ? '35.73px' : '48px',
    height: isMobile ? '35.35px' : '44px',
    borderRadius: '12px 0px 0px 12px',
    backgroundColor: '#4E9C0B',
  };
  const StylePara = {
    width: isMobile ? '80px' : '112px',
    height: isMobile ? ' 25.35px' : '44px ',
    borderRadius: '0px 12px 12px 0px'
  };

  const textStyles = {
    color: isActive ? '#515151' : '#959595',
    fontSize: isMobile ? '12px' : '16px',
    fontWeight: '400',
  };
  const notActiveStyle = {
    width: isMobile ? '35.73px' : '48px',
    height: isMobile ? '35.35px' : '44px',
    borderRadius: '12px 0px 0px 12px',
  };

  const toggleCheckBox = () =>
  {
    setIsActive( !isActive );
  };

  return (
    <div>


      <Row className={ `d-flex justify-content-between align-items-center mt-5 ${ isActive ? 'active' : 'not-active' }` }>
        <Col xs={ 2 } lg={ 1 } onClick={ toggleCheckBox }>
          <div className={ `shadow d-flex justify-content-center align-items-center` } style={ isActive ? activeStyle : notActiveStyle }>
            <img src="./checkboxTick.svg" alt="" />
          </div>
        </Col>
        <Col xs={ 9 } lg={ 10 }>
          <div className='shadow StylePara ms-0 ms-md-4' style={ StylePara }>
            <p className=' my-0 text-start p-1 p-md-2 ' style={ textStyles } >
              { content }
            </p>
          </div>
        </Col>
      </Row>

    </div>
  );
};

export default checkBox;