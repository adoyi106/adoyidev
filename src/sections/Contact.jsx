import { FaMapMarkedAlt, FaEnvelope } from "react-icons/fa";

function Contact() {
  return (
    <section id="contact" className="pt-[4.8rem]  pb-[9.6rem] font-poppins">
      <div className="container text-center">
        <h3 className="uppercase font-medium mb-6 tracking-[0.75px] text-[#147efb] text-2xl">
          contact
        </h3>
        <h2 className="text-4xl text-[#2d2e32] font-bold mb-[9.6rem] lg:mb-[5.6rem]">
          Don't be shy! Hit me up! 👇
        </h2>
        <div className="contact-info flex flex-col sm:flex-row gap-[5rem] sm:gap-[13rem] text-center  justify-center">
          <div className="contact-location flex flex-col lg:flex-row items-center gap-6">
            <span className="mx-auto lg:mx-0 text-[#147efb] bg-white rounded-full h-[5rem] w-[5rem] shadow-5xl">
              <FaMapMarkedAlt className="text-4xl mx-auto my-[1rem]" />
            </span>
            <div className="location flex flex-col gap-5">
              <h3 className="text-[#2d2e32] text-3xl font-bold">Location</h3>
              <p className="text-3xl text-[#767676]">Abuja, Nigeria</p>
            </div>
          </div>
          {/* social part */}
          <div className="contact-social flex flex-col lg:flex-row items-center gap-6">
            <span className="mx-auto text-[#147efb] bg-white rounded-full h-[5rem] w-[5rem] shadow-5xl">
              <FaEnvelope className="text-4xl mx-auto my-[1rem]" />
            </span>
            <div className="social flex flex-col gap-5">
              <h3 className="text-[#2d2e32] text-3xl font-bold">Mail</h3>
              <a
                href="mailto:adoyiowoicho@gmail.com"
                aria-label="mail"
                rel="noreferrer"
                className="text-3xl text-[#767676]"
              >
                adoyiowoicho@gmail.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
