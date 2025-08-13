import './style.css';
import { services, stats } from '../../utils/data';
import ServiceCard from '../../components/ServicesSection';
import StatItem from '../../components/StatItem';
function Home() {
  return (
    <div>
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
          <div className="inline-stats">
            {stats.map((stat, index) => (
               <StatItem
                 key={index}
                 count={stat.count}
                 label={stat.label}
                />
             ))}
            </div>
          <div className="experience">
            <div className="years">
              <h6>15+</h6>
              <p>Years Of Experiences</p>
            </div>
            <button className="certified-btn">Certified UX Piyush</button>
          </div>
        </div>
        <div className="services-right">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              image={service.image}
              title={service.title}
              projects={service.projects}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
export default Home;
