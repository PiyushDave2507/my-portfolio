import React from 'react';
import '../../pages/Home/style.css';
export interface StatItemProps {
  count: string;
  label: string;
}
const StatItem=({ count, label }  :StatItemProps) => {
  return (
    <div className="stat-item">
      <h2>{count}</h2>
      <p>{label}</p>
    </div>
  );
};
export default StatItem;
