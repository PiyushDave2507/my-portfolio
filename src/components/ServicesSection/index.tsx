
import '../../pages/Home/style.css';

export interface ServiceCardProps {
  image: string;
  title: string;
  projects: string;
}
const ServiceCard = ({ image, title, projects }: ServiceCardProps) => {
  return (
    <div className="service-card">
      <div>
      <img src={image} alt={title} />
      </div>
      <div>
        <h4>{title}</h4>
        <p>{projects}</p>
      </div>
      <div className="circle-arrow">↗</div>
    </div>
  );
};
export default ServiceCard;
