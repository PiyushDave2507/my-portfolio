import { contactDetails } from '../../utils/contacts';
import '../../pages/Contact/style.css';

const ContactCard = () => {
  return (
    <div className="contact_card">
      <h2>Contact Info</h2>
      <ul>
        {contactDetails.map((detail, index) => (
          <li key={index}>
            <span className="icon">{detail.icon}</span>
            <span className="info">
              <strong>{detail.label}:</strong>
              {detail.label === "GitHub" ? (
                <a href={detail.value} target="_blank" rel="noreferrer">{detail.value}</a>
              ) : (
                <span>{detail.value}</span>
              )}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContactCard;
