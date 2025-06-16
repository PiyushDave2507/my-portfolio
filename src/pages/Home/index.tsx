import './style.css';
import ServicesSection from '../../components/ServicesSection';

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

      
  <ServicesSection />

</>
  );
}

export default Home;
