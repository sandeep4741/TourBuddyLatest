import React from 'react';
import Navbar from './Navbar';
import './about.css';
import Leaderboard from './Team';

const About = () => {
  return (
    <div >
      <div className="navbar-with-bg">
        <Navbar />
      </div>
    <div className="image-container">
    <img className='img-thumbnail' src="/images/about.jpg" alt="Indian Tourism Image"/>
    </div>
      <div className="tourismContainer">
        <center>
        <h1>About TourBuddy</h1>
        <p>Tourism can be defined as the practice of traveling for pleasure, leisure, or business purposes to various destinations.
         It involves visiting different places, experiencing their culture, history, and natural attractions, 
         and engaging in activities that provide relaxation, entertainment, or education.</p>
        </center>
        </div>
<div className="indianTourismContainer">
  <div class="leftDiv">
    {/* <div class="card"> */}
      <center>
        <h1>Indian Tourism</h1>
      </center>
      <p>
        <strong>Cultural Heritage:</strong> India is renowned for its cultural heritage, boasting numerous UNESCO World Heritage Sites, ancient temples, palaces, forts, and architectural marvels. Popular destinations include the Taj Mahal in Agra, Jaipur's palaces in Rajasthan, Varanasi's spiritual ghats, and the historical monuments of Delhi.
      </p>
      <p>
        <strong>Spiritual and Wellness Tourism:</strong> India is the birthplace of several major religions, including Hinduism, Buddhism, Jainism, and Sikhism. Pilgrimage sites like Varanasi, Rishikesh, Amritsar, Bodh Gaya, and Haridwar attract spiritual seekers. Additionally, India is known for Ayurveda, yoga, and meditation retreats that offer rejuvenation and wellness experiences.
      </p>
      <p>
        <strong>Natural Beauty:</strong> From the snow-capped peaks of the Himalayas to the pristine beaches of Goa and Kerala, India's diverse landscape provides breathtaking natural beauty. National parks like Jim Corbett, Ranthambore, and Kaziranga offer wildlife safaris to spot tigers, elephants, and other exotic animals.
      </p>
      <p>
        <strong>Festivals and Celebrations:</strong> India is known for its colorful and vibrant festivals celebrated throughout the year. Diwali, Holi, Navratri, Eid, Christmas, and many regional festivals provide unique cultural experiences and an insight into India's diverse traditions.
      </p>
      <p>
        <strong>Adventure Tourism:</strong> India offers exciting adventure opportunities such as trekking in the Himalayas, river rafting in Rishikesh, camel safaris in Rajasthan, paragliding in Himachal Pradesh, and wildlife safaris in national parks. Adventure enthusiasts can find a range of thrilling activities to indulge in.
      </p>
    </div>
  {/* </div> */}
  <div class="rightDiv">
    <img src="/images/India.jpg" alt="Indian Tourism Image" />
  </div>
</div>
      <Leaderboard />
    </div>
  );
}

export default About;