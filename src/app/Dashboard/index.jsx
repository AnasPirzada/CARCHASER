import React, { useState } from 'react';
import { Row, Container, Col } from 'react-bootstrap';
import { useMediaQuery } from 'react-responsive';
import Step1 from './StepsPage/Step1/index.jsx';
import Step2 from './StepsPage/Step2/index.jsx';
import Step3 from './StepsPage/Step3/index.jsx';
import Step4 from './StepsPage/Step4/index.jsx';
import Step5 from './StepsPage/Step5/index.jsx';
import Step6 from './StepsPage/Step6/index.jsx';
import Step7 from './StepsPage/Step7/index.jsx';
const stepsContent = [
  // Display "Hello" at index -1
  <Step1 />,
  <Step2 />,
  <Step3 />,
  <Step4 />,
  <Step5 />,
  <Step6 />,
  <Step7 />,
  
];

function Dashboard ()
{
  const [ currentStep, setCurrentStep ] = useState( 0 );
  const isMobile = useMediaQuery( { maxWidth: 768 } );

  const handleNext = () =>
  {
    if ( currentStep < stepsContent.length - 1 )
    {
      setCurrentStep( currentStep + 1 );
    }
  };

  const handleBack = () =>
  {
    if ( currentStep > 0 )
    {
      setCurrentStep( currentStep - 1 );
    }
  };
  return (
    <div>
      <Container className='mt-5'>
        <Row>
          <p style={ { fontWeight: '500', fontSize: '32px', color: '#4C4C4C', fontFamily: 'Glory' } }>Upload Vehicle Details</p>
        </Row>
        <Row className='m-auto' style={ { width: '90%' } }>
          {/* Mapping steps with checkboxes */ }
          { Array.from( { length: stepsContent.length - 1 }, ( _, index ) => (
            <Col key={ index } lg={ 2 } xs={ 2 }>
              <div
                className='d-flex justify-content-center align-items-center'
                style={ {
                  width: isMobile ? '27px' : '42px',
                  height: isMobile ? '26px' : '40px',
                  borderRadius: '8px',
                  backgroundColor:
                    index < currentStep ? '#4E9C0B' : '#EBEBEB', // Change the condition for checkbox
                  position: 'relative',
                } }
              >
                { index < currentStep && (
                  <img src='./checkboxTick.svg' alt='Checkbox' />
                ) }
              </div>
              { index < stepsContent.length - 2 && (
                <div
                  className='ms-4 ms-md-5'
                  style={ {
                    borderBottom: '2px solid #EBEBEB',

                    width: isMobile ? '33px' : '100px',
                  } }
                ></div>
              ) }
            </Col>
          ) ) }
        </Row>
        <Row className='mt-3'>
          <Col className='text-center'>
            {/* Display content based on currentStep */ }
            <p>{ stepsContent[ currentStep ] }</p>
          </Col>
        </Row>
        <Row className='d-flex justify-content-center align-items-center my-5'>
          <Col lg={ 4 }>
            <button className='w-75 p-2 rounded-5 ' style={ { backgroundColor: '#FFFFFF', border: '1px solid #F3B755', color: '#F3B755' } } onClick={ handleBack }>Back</button>
          </Col>
          <Col lg={ 4 }>
            <button className='w-75 p-2 rounded-5 border-0 ' style={ { backgroundColor: '#F3B755', color: '#FFFFFF ' } } onClick={ handleNext }>Next</button>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Dashboard;
