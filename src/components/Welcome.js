import React from 'react';
import './welcome.css';
import Navbar from './Navbar';
import { Link } from 'react-router-dom';
import Test from './Test';
import Chatbox from './Chatbox';
import FeatureIcons from './FeatureIcons';
import Footer from './Footer';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const Homepage = () => {
  
  return (
    <div>
      {/* <div className="video-container">
       <video src="/media/bgvd4.mp4" autoPlay loop muted />
       <div className='bar'>
         <Navbar showSearchBar={false} />
       </div>
        <div className="video-text">
          <h1>Welcome To TourBuddy</h1>
          <p>Explore The India, Just One Click!</p>
          <Link to='/states'><button className='button1'>Get Started</button></Link>
        </div>
      </div> */}
       <div className="image-carousel">
  <Carousel autoPlay infiniteLoop showArrows={false} showThumbs={false} showStatus={false}>
    <div>
      <img src="https://cdn.pixabay.com/photo/2016/09/02/12/56/munnar-1639120_1280.jpg" alt="Image 1" />
      <div className="carousel-content">
        <h1>Welcome To TourBuddy</h1>
        <p>Explore India with Just One Click!</p>
        <Link to='/states'>
          <button className='button1'>Get Started</button>
        </Link>
      </div>
    </div>
    <div>
      <img src="https://cdn.pixabay.com/photo/2019/08/19/16/23/hills-4416877_1280.jpg" alt="Image 2" />
      <div className="carousel-content">
        <h1>Welcome To TourBuddy</h1>
        <p>Explore India with Just One Click!</p>
        <Link to='/states'>
          <button className='button1'>Get Started</button>
        </Link>
      </div>
    </div>
    <div>
      <img src="https://cdn.pixabay.com/photo/2020/02/02/17/24/travel-4813658_1280.jpg" alt="Image 3" />
      <div className="carousel-content">
        <h1>Welcome To TourBuddy</h1>
        <p>Explore India with Just One Click!</p>
        <Link to='/states'>
          <button className='button1'>Get Started</button>
        </Link>
      </div>
    </div>
  </Carousel>
  <div className='bar'>
    <Navbar showSearchBar={false} />
  </div>
</div>

      <section className="sectiont">
        <h3 className="section-title"><i class="fa-solid fa-landmark-flag"></i> Trending Destinations</h3>
        <div className="tour_container">
        <div className="tour__card">
            <img src='images/tajmahal3.jpg' alt="" className="tour__card-img" />
            <div className="tour__data">
              <h5 className="tour__data-title">Taj Mahal</h5>
              <span className="tour__data-subtitle">Delhi</span>
            </div>
          </div>
          <div className="tour__card">
            <img src='images/hyd/hyderabad.jpg' alt="abc" className="tour__card-img" />
            <div className="tour__data">
              <h5 className="tour__data-title">Charminar</h5>
              <span className="tour__data-subtitle">Hyderabad</span>
            </div>
          </div>
          <div class="tour__card">
            <img src='images/mumbai1.jpg' alt="abc" className="tour__card-img" />
            <div className="tour__data">
              <h5 className="tour__data-title">Gate Of India</h5>
              <span className="tour__data-subtitle">Mumbai</span>
            </div>
          </div>
        </div>
      </section>
    
      <h3 className="section-title"><i class="fa-solid fa-landmark-dome"></i> Must Visit Destinations</h3>
      <Test />
      <div className="testimonials-section">
  <h2 className='section-title'><i class="fa fa-quote-left" aria-hidden="true"></i> Testimonials</h2>
  <div className="testimonial">
    <div className="testimonial-content">
      <p className="quote">""TourBuddy makes exploring effortless, providing detailed maps and personalized recommendations, ensuring an incredible travel experience in every destination.""</p>
      <p className="author">- John Doe</p>
    </div>
  </div>
  <div className="testimonial">
    <div className="testimonial-content">
      <p className="quote">"Discover hidden gems and immerse yourself in local culture with TourBuddy's curated itineraries and audio guides, making every trip unforgettable."</p>
      <p className="author">- Jane Smith</p>
    </div>
  </div>
  <div className="testimonial">
    <div className="testimonial-content">
      <p className="quote">"With TourBuddy as your travel companion, explore new destinations confidently, with real-time updates and expertly crafted content at your fingertips."</p>
      <p className="author">- Jane Smith</p>
    </div>
  </div>
  </div>
      <section className="section recognitions">
        <h3 className="section-title"><i className="fa-solid fa-award"></i> Recognitions</h3>
        <div className="recognitions__container">
          {/* Add your recognitions here */}
          <div className="recognition__card">
            <img src="/media/Award1.webp" alt="Award 1" className="recognition__card-img" />
          </div>
          <div className="recognition__card">
            <img src="/media/Award2.webp" alt="Award 2" className="recognition__card-img" />
          </div>
          <div className="recognition__card">
            <img src="/media/Award3.webp" alt="Award 1" className="recognition__card-img" />
          </div>
        </div>
      </section>
      <FeatureIcons />
      <Chatbox />
      <Footer />
    </div>
  );
};

export default Homepage;

