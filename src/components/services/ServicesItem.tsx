import { useState } from "react";
import ServicesModal from "./ServicesModal";
import { ServiceType } from "../../data/services";

import { FaArrowRightLong } from "react-icons/fa6";


interface ServicesItemProps {
  services: ServiceType[];
}

function ServicesItem({ services }:ServicesItemProps) {
  const [activeIdx, setActiveIdx] = useState<number | null>(null);

  const openModal = (index:number) => {
    setActiveIdx(index);
  };

  const closeModal = () => {
	setActiveIdx(null)
  }

  return (
    <>
      {services.map((item, i) => (
        <li className="services-container" key={i}>
          <div className="service-card">
            <item.icon className="services-icon" />
            <h3>{item.title}</h3>
            <div className="learn-more-btn" onClick={() => openModal(i)}>
              Learn More
              <FaArrowRightLong className="learn-more-icon" />
            </div>
          </div>
          <ServicesModal item={item} isActive= {activeIdx === i} closeModal={closeModal}/>
        </li>
      ))}
    </>
  );
}

export default ServicesItem;
