import './style.css';
import { services, stats } from '../../utils/data';

function Home() {
  return (
    <>
     
      <div className="section">
        <div className="left">
          <h2 className="tagline">Full Stack Developer</h2>
          <h1 className="title">Hello I'm Piyush Dave</h1>
          <p className="description">
            Hi, I'm Piyush Dave — a passionate Full Stack Web Developer with a knack for crafting seamless,
            responsive, and scalable web applications. From designing intuitive front-end interfaces to building
            powerful back-end systems.
          </p>
          <div className="buttons">
            <button className="btn-primary">Let’s Talk</button>
            <button className="btn-secondary">View Projects</button>
          </div>
        </div>
        <div className="right">
          <img src="/images/2.jpg" alt="Home Logo" className="img" />
        </div>
      </div>

      
  <div className="services-section">
  <div className="services-left">
    <h5 className="subtitle">Best Services</h5>
    <h1 className="section-title">What Can I Do For You</h1>
    <p className="section-desc">
      I craft modern, responsive websites and powerful web applications to help you grow your business online...
    </p>

    <div className="stats">
      {stats.map((stat, index) => (
        <div className="stat-item" key={index}>
          <h2>{stat.count}</h2>
          <p>{stat.label}</p>
        </div>
      ))}
    </div>

    <div className="experience">
      <div className="years">
        <h6>15+</h6>
        <p>Years Of Experiences</p>
      </div>
      <button className="certified-btn">Certified UX Professional</button>
    </div>
  </div>

  <div className="services-right">
    {services.map((service, index) => (
      <div className="service-card" key={index}>
        <img src={service.image} alt={service.title} />
        <div>
          <h4>{service.title}</h4>
          <p>{service.projects}</p>
        </div>
        
        <div className="circle-arrow">↗</div>
      </div>
    ))}
  </div>
</div>
</>
  );
}

export default Home;
