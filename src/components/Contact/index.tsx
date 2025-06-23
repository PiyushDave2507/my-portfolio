
import '../../pages/Contact/style.css';

type ContactItemProps={
  label:string;
  value:string;
  icon:string;
};
const ContactCard = ({ label, value, icon }: ContactItemProps) => {
  return (
    <li>
      <span className="icon">{icon}</span>
      <span className="info">
        <strong>{label}:</strong>{' '}
        {label === "GitHub" ? (
          <a href={value} target="_blank" rel="noreferrer">{value}</a>
        ) : (
          <span>{value}</span>
        )}
      </span>
    </li>
  );
};

export default ContactCard;
