import "./Clients.css";
import { clientData } from "../../data/clientData";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

// import { FaChevronRight,FaChevronLeft } from "react-icons/fa";
import SecTitle from "../secTitle/SecTitle";

function Clients() {
  return (
    <section className="section our-client" id="clients">
      <div className="container flex-center">
        <SecTitle title={"Our Clients"} subtitle={"Our Clients"} />
        <div className="our-client-wrapper">
          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={30}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            loop={true}
            className="client-swiper"
          >
            {clientData.map((client) => (
              <SwiperSlide key={client.id}>
                <div className="swiper-slide swiper-client-block">
                  <div className="client-img">
                    <img src={client.imgSrc} alt={client.name} />
                  </div>
                  <div className="client-details">
                    <p>{client.description}</p>
                    <h3>{client.name}</h3>
                    <span>{client.position}</span>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}

export default Clients;
