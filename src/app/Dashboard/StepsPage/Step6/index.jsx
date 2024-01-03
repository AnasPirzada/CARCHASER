import React, { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useMediaQuery } from 'react-responsive';
const questions = [
  {
    question: 'How soon are you ready to sell? ',
    options: [ 'Immediately', '2-3 Months', '6 Months', '1 Year' ],
  },
  {
    question: 'Any mechanical issue or warning light?',
    options: [ 'Yes', 'No' ],
  },
  {
    question: 'Any accident claim? ',
    options: [ 'Yes', 'No' ],
  },
];
export const index = () =>
{
  const [ activeButtons, setActiveButtons ] = useState(
    new Array( questions.length ).fill( '' )
  ); // Array to track active buttons for each question
  const isMobile = useMediaQuery( { maxWidth: 768 } );

  const handleButtonClick = ( questionIndex, buttonName ) =>
  {
    const newActiveButtons = [ ...activeButtons ];
    newActiveButtons[ questionIndex ] = buttonName;
    setActiveButtons( newActiveButtons ); // Update active button for specific question
  };

  return (
    <div>
      <Container
        className='mt-5 shadow rounded-5 px-5'
        style={ { height: '619px' } }
      >
        <Row className='px-4 '>
          <Col lg={ 12 } className='m-auto pt-5' style={ { width: '100%' } }>
            <p
              className='text-start '
              style={ { color: '#515151', fontWeight: '600', fontSize: '24px' } }
            >
              Now is the perfect moment to sell your vehicle. No time !
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

        <Row className=' mt-3'>
          <Col lg={ 6 } xs={ 12 }>
            <div
              className='d-flex flex-column justify-content-start align-items-start'
              style={ {
                maxHeight: isMobile ? '390px' : '420px',
                overflowY: 'auto',
              } }
            >
              { questions.map( ( q, index ) => (
                <div className='w-100 mt-5' key={ index }>
                  <p
                    className='my-0 shadow p-2 rounded-4'
                    style={ {
                      color: '#515151',
                      fontSize: '16px',
                      fontWeight: '500',
                    } }
                  >
                    { q.question }
                  </p>
                  <div className='d-flex justify-content-center align-items-center w-100 mt-4'>
                    { q.options.map( ( option, idx ) => (
                      <div className='w-50' key={ idx }>
                        <p
                          className={ `my-0 shadow p-2 rounded-4 ms-1 ${ activeButtons[ index ] === option.toLowerCase()
                            ? 'active-button'
                            : ''
                            }` }
                          style={ {
                            color:
                              activeButtons[ index ] === option.toLowerCase()
                                ? '#FFFFFF'
                                : '#BBBBBB',
                            fontSize: '16px',
                            fontWeight: '500',
                            backgroundColor:
                              activeButtons[ index ] === option.toLowerCase()
                                ? '#4E9C0B'
                                : '',
                          } }
                          onClick={ () =>
                            handleButtonClick( index, option.toLowerCase() )
                          }
                        >
                          { option }
                        </p>
                      </div>
                    ) ) }
                  </div>
                </div>
              ) ) }
              <div className='d-flex justify-content-center align-items-center w-100 mt-4'>
                <textarea
                  className='my-0 w-100 border-0  shadow p-2 rounded-4 ms-1'
                  placeholder='E.g Rear damage - $2,000'
                  style={ {
                    color: '#FFFFFF',
                    fontSize: '16px',
                    fontWeight: '500',
                  } }
                />
              </div>
              <div className='w-100 mt-4'>
                <p
                  className='my-0 shadow p-2 rounded-4'
                  style={ {
                    color: '#515151',
                    fontSize: '16px',
                    fontWeight: '500',
                  } }
                >
                  Anything you feel we should know about your car
                </p>
                <div className='d-flex justify-content-center align-items-center w-100 mt-4'>
                  <textarea
                    className='my-0 w-100 border-0  shadow p-2 rounded-4 ms-1'
                    placeholder='If Yes leave a note'
                    style={ {
                      color: '#FFFFFF',
                      fontSize: '16px',
                      fontWeight: '500',
                    } }
                  />
                </div>
              </div>
            </div>
          </Col>

          <Col lg={ 6 } xs={ 12 }>
            <img src='./PNG/6387973.png' alt='' />
          </Col>
        </Row>
      </Container>
    </div>
  );
};
export default index;
