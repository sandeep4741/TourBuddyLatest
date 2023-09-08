import React from 'react';
import "./Team.css";
import Footer from './Footer';

const Leaderboard = () => {
  const teamMembers = [
    { name: 'Sandeep', image: '/images/sandeep1.jpeg', info: 'UI/UX Designer' },
    { name: 'Krishnamraju', image: '/images/krishna.jpeg', info: 'UI/UX Designer', special: true },
    { name: 'Yashwanth', image: '/images/yashwanth.jpg', info: 'UI/UX Designer' },
    { name: 'Soumyaranjan', image: '/images/soumya1.jpeg', info: 'UI/UX Designer' },
    { name: 'Mamatha Anjaneyulu', image: '/images/mamatha2.jpeg', info: 'UI/UX Designer' },
    { name: 'Geetanjali Behera', image: '/images/geetha@.jpeg', info: 'UI/UX Designer' },
    { name: 'Saijyothi Gupta', image: '/images/saijyothi.jpeg', info: 'UI/UX Designer' },
  ];

  return (
    <div className="leaderboardContainer">
      <h1>CONTRIBUTORS</h1>
      <div className="teamMembersContainer">
        <div className="row">
          <div className="col-md-4 d-flex justify-content-center">
            {teamMembers.slice(0, 4).map((member, index) => (
              <div key={index} className={`memberContainer ${member.special ? 'specialMember' : ''}`} style={{ borderRadius: '10px' }} >
                <img src={member.image} alt={member.name} />
                <p className="member-name">{member.name}</p>
                <p>{member.info}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="row">
          <div className="col-md-3 d-flex justify-content-center">
            {teamMembers.slice(4).map((member, index) => (
              <div key={index} className={`memberContainer ${member.special ? 'specialMember' : ''}`}>
                <img src={member.image} alt={member.name} />
                <p className="member-name">{member.name}</p>
                <p>{member.info}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Leaderboard;