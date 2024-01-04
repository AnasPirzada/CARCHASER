import { useState } from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { Col, Container, Row } from 'react-bootstrap';

const index = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleThumbnailClick = imageIndex => {
    console.log('CliCked');

    setCurrentImageIndex(imageIndex);
  };

  const handleSlideChanged = e => {
    setCurrentImageIndex(e.item);
  };

  const responsive = {
    0: { items: 1 },
    568: { items: 1 },
    1024: { items: 1 },
  };
  const prevImage = () => {
    console.log('CliCked');
    setCurrentImageIndex(prevIndex => {
      if (prevIndex === 0) {
        return images.length - 1; // Loop back to the last image
      } else {
        return prevIndex - 1;
      }
    });
  };

  // Function to show the next image
  const nextImage = () => {
    console.log('CliCked');

    setCurrentImageIndex(prevIndex => {
      if (prevIndex === images.length - 1) {
        return 0; // Loop back to the first image
      } else {
        return prevIndex + 1;
      }
    });
  };
  const images = [
    'https://cdn.stocksnap.io/img-thumbs/960w/PS7M4VMB9P.jpg',
    'https://cdn.stocksnap.io/img-thumbs/960w/SVSBXHN1OU.jpg',
    'https://cdn.stocksnap.io/img-thumbs/960w/KLSTPV1LBV.jpg',
    'https://cdn.stocksnap.io/img-thumbs/960w/N06ELOLAT9.jpg',
    'https://cdn.stocksnap.io/img-thumbs/960w/YN0MX9OUSY.jpg',
    'https://cdn.stocksnap.io/img-thumbs/960w/JVBWZNCQLW.jpg',
    'https://cdn.stocksnap.io/img-thumbs/960w/LN6MZNMBUR.jpg',
  ];

  return (
    <div>
      <Container className='mt-5'>
        <Row className='pt-5 d-flex justify-content-between align-items-center'>
          <Col lg={10}>
            <p
              style={{ fontSize: '32px', fontWeight: '700', color: '#1F1F1F' }}
            >
              Volkswagen Altas Exceline
            </p>
          </Col>
          <Col lg={2}>
            <button
              className='border-0 rounded-3 w-100 p-2'
              style={{ backgroundColor: '#4E9C0B', color: '#FFFFFF' }}
            >
              Chat support
            </button>
          </Col>
        </Row>

        <Row className='shadow w-100 my-5' style={{ height: '700px' }}>
          <Col lg={8}>
            <div className='text-end'>
              <p
                className='my-0'
                style={{
                  color: '#4C4C4C',
                  fontWeight: '500',
                  fontSize: '16px',
                }}
              >
                Contact us
              </p>
              <p
                className='my-0'
                style={{
                  color: '#777777',
                  fontWeight: '400',
                  fontSize: '14px',
                }}
              >
                Example@gmail.com
              </p>
              <p
                className='my-0'
                style={{
                  color: '#777777',
                  fontWeight: '400',
                  fontSize: '14px',
                }}
              >
                +92 0900 786 01
              </p>
            </div>

            <div style={{ position: 'relative' }}>
              {/* Single large image */}
              <AliceCarousel
                duration={400}
                autoPlay={true}
                startIndex={currentImageIndex}
                fadeOutAnimation={true}
                mouseDragEnabled={true}
                playButtonEnabled={false}
                dotsDisabled={false}
                buttonsDisabled={() => nextImage()}
                autoPlayInterval={2000}
                autoPlayDirection='rtl'
                responsive={responsive}
                autoPlayActionDisabled={true}
                onSlidePrev={() => prevImage()}
                onSlideNext={() => nextImage()}
                onSlideChanged={handleSlideChanged}
              >
                {images.map((image, index) => (
                  <div key={index} className='text-center'>
                    <img
                      src={image}
                      height='400px'
                      width='500px'
                      alt={`Image ${index}`}
                    />
                  </div>
                ))}
              </AliceCarousel>

              {/* Navigation arrows */}
              <div
                className='d-flex justify-content-between align-items-center'
                style={{
                  position: 'absolute',
                  top: '40%',
                  left: '0',
                  right: '0',
                  textAlign: 'center',
                }}
              >
                {/* Place your custom arrow icons here */}
                <div>
                  <button
                    className='border-0 bg-transparent '
                    onClick={prevImage}
                  >
                    <img src='./LeftArrow.svg' alt='' />
                  </button>
                </div>
                <div>
                  <button
                    className='border-0  bg-transparent '
                    onClick={nextImage}
                  >
                    <img src='./RightArrow.svg' alt='' />
                  </button>
                </div>
              </div>
            </div>

            <div
              className='shadow mt-5'
              style={{
                overflowX: 'auto',
                overflowY: 'hidden',
                width: '700px',
                height: '100px',
                whiteSpace: 'nowrap',
              }}
            >
              {images.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  height='80px'
                  width='100px'
                  alt={`Thumbnail ${index}`}
                  style={{
                    margin: '5px',
                    cursor: 'pointer',
                    display: 'inline-block',
                  }}
                  onClick={() => handleThumbnailClick(index)}
                />
              ))}
            </div>
          </Col>
          <Col lg={4}>
            <div
              className=' mt-5'
              style={{ height: '590px', overflowY: 'auto' }}
            >
              <div>
                <h2 className='mb-3'>Car full details</h2>
                <div className='border-bottom'>
                  <p>Model</p>
                  <h5 className='mb-2'>Volkswagen Altas Exceline</h5>
                </div>
                <div className='border-bottom'>
                  <p className='mt-2'>Year</p>
                  <h5 className='mb-2'>2009</h5>
                </div>
                <div className='border-bottom'>
                  <p className='mt-2'>VIN</p>
                  <h5 className='mb-2'>12566896</h5>
                </div>
                <div className='border-bottom'>
                  <p className='mt-2'>Make</p>
                  <h5 className='mb-2'>Answer</h5>
                </div>
                <div className='border-bottom'>
                  <p className='mt-2'>Trim</p>
                  <h5 className='mb-2'>Answer</h5>
                </div>
                <div className='border-bottom'>
                  <p className='mt-2'>Mileage/Odometer</p>
                  <h5 className='mb-2'>Sliver</h5>
                </div>
                <div className='border-bottom'>
                  <p className='mt-2'>Model</p>
                  <h5 className='mb-2'>97951km</h5>
                </div>
                <div>
                  <p className='mt-2'>Keys</p>
                  <h5 className='mb-2'>3</h5>
                </div>
              </div>
              <div>
                <h2 className='my-5'>Additional Features </h2>
                <div
                  className='d-flex'
                  style={{
                    justifyContent: 'space-evenly',
                  }}
                >
                  <div>
                    <p>2 sets of tire</p>
                    <p>Window tint</p>
                    <p>Aftermarket exhaust</p>
                    <p>Aftermarket rims</p>
                    <p>Any rust?</p>
                    <p>No exterior damage</p>
                    <p>Dents</p>
                    <p>Scratches</p>
                  </div>
                  <div>
                    <p>Roof rack</p>
                    <p>Remote starter</p>
                    <p>Aftermarket stereo</p>
                    <p>Aftermarket rims</p>
                    <p>Aftermarket spoiler</p>
                    <p>Any Cracked bodywork</p>
                    <p>Chipped it cracked</p>
                    <p>Paint Chips</p>
                  </div>
                </div>
              </div>
              <div>
                <h2 className='my-5'>Condition & Record</h2>
                <div>
                  <p className='mt-2'>Do you smoke in this vehicle?</p>
                  <h5 className='mb-2'>Yes</h5>
                </div>

                <div>
                  <p className='mt-2'>Do you have original factory rims? </p>
                  <h5 className='mb-2'>Yes</h5>
                </div>
                <div>
                  <p className='mt-2'>Is your vehicle drivable?</p>
                  <h5 className='mb-2'>Yes</h5>
                </div>
                <div>
                  <p className='mt-2'>Any accident claim? </p>
                  <div className='d-flex'>
                    <h5>Yes</h5>
                    <p>Rear damage - $2,000</p>
                  </div>
                </div>
                <div>
                  <p className='mt-2'>Any mechanical issue or warning light?</p>
                  <h5 className='mb-2'>Yes</h5>
                </div>
                <div>
                  <p className='mt-2'>How soon are you ready to sell?</p>
                  <h5 className='mb-2'>Yes</h5>
                </div>
                <div>
                  <p className='mt-2'>
                    Anything you feel we should know about your car
                  </p>
                  <h5 className='mb-2'>Details answer </h5>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
export default index;
