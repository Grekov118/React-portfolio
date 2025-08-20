import { FaArrowRightLong } from "react-icons/fa6";
import ServicesModal from "./ServicesModal";
import { useState } from "react";

function ServicesItem({ services }) {
  const [activeIdx, setActiveIdx] = useState(null);

  const openModal = (index) => {
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
