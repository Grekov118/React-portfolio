import { CiCircleCheck } from "react-icons/ci";
import { FaXmark } from "react-icons/fa6";

function ServicesModal({ item, isActive, closeModal }) {
  return (
    <div className={`service-modal ${isActive ? "active" : null}`}>
      <div className="service-modal-body">
        <FaXmark className="modal-close-btn" onClick={closeModal} />
        <h3>{item.title}</h3>
        <h4>{item.subtitle}</h4>
        <p>{item.description}</p>
        <h4>What I provide</h4>
        <ul>
          {item.list.map((item, i) => {
            return (
              <li key={i}>
                <CiCircleCheck />
                {item}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default ServicesModal;
