import "./Contact.css";

import SecTitle from "../secTitle/SecTitle";
import ContactLeft from "./ContactLeft";
import ContactRight from "./ContactRight";

function Contact() {
  return (
    <section className="contact section" id="contact">
      <div className="container flex-center">
        <SecTitle title={"Contact Me"} subtitle={"Contact Me"} />
        <div className="contact-wrapper">
          <ContactLeft />
          <ContactRight />
        </div>
      </div>
    </section>
  );
}

export default Contact;
