import ContactItem from '../../components/Contact';
import { contactDetails, formFields } from '../../utils/contacts';
import './style.css';

function Contact() {
  return (
    <div className="contact section">
      <div className="contact_container container">
        <div className="contact_form">
          <h1>Get in Touch</h1>
          <form>
            {formFields.map((field, index) =>
              field.type === 'textarea' ? (
                <textarea
                  key={index}
                  placeholder={field.placeholder}
                  rows={field.rows}
                  required={field.required}
                />
              ) : (
                <input
                  key={index}
                  type={field.type}
                  placeholder={field.placeholder}
                  required={field.required}
                />
              )
            )}
            <button type="submit">Send Message</button>
          </form>
        </div>
        <div className="contact_card">
          <h2>Contact Info</h2>
          <ul>
            {contactDetails.map((detail, index) => (
              <ContactItem
                key={index}
                label={detail.label}
                value={detail.value}
                icon={detail.icon}
              />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
export default Contact;
