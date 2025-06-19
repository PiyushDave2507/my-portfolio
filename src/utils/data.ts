import { ServiceCardProps } from '../components/ServicesSection';
import { StatItemProps } from '../components/StatItem';

export const services: ServiceCardProps[] = [
 {
    title: "UI/UX Design",
    image: "/images/UIUX Design.png",
    projects: "150 Projects Done",
  },
  {
    title: "Product Design",
    image: "/images/Product Design.png",
    projects: "85 Projects Done",
  },
  {
    title: "Branding Design",
    image: "/images/Branding Design.png",
    projects: "115 Projects Done",
  },
];
export const stats: StatItemProps[] = [
  {count: '3,460+', label: 'Satisfied Clients'},
  {count: '1,458+',label: 'Project Completed'}
];
