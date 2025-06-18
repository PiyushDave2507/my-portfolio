import ContactCard from '../../components/Contact';
import './style.css';

function Contact() {
  return (
    <section className="contact section">
      <div className="contact_container container">
        <div className="contact_form">
          <h1>Get in Touch</h1>
          <form>
            <input type="text" placeholder="Name" required />
            <input type="text" placeholder="Mobile Number" required />
            <input type="text" placeholder="Email" required />
            <textarea placeholder="Message" rows={5} required></textarea>
            <button type="submit">Send Message</button>
          </form>
        </div>
        <ContactCard />
      </div>
    </section>
  );
}

export default Contact;
