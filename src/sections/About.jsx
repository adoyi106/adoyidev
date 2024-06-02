function About() {
  return (
    <section id="about" className="pt-[4.8rem]  pb-[9.6rem] font-poppins">
      <div className="container grid grid-cols-1 lg:grid-cols-2 gap-12 text-center relative">
        <div className="about-image relative">
          <img
            src="./img/laptop.jpg"
            alt="laptop"
            className="h-auto w-[90%] lg:h-[35rem] lg:w-[41rem] mx-auto rounded-lg"
          />
          <span className="hidden lg:block animate-rotate bg-white absolute bottom-[-6rem] h-[19rem] w-[19rem] right-[-4rem] rounded-full">
            <img
              src="./img/fontend.svg"
              alt="fontend"
              className=" lg:w-[19rem] "
            />
            <img
              src="./img/working-emoji.png"
              alt="working emoji"
              className="w-[7rem] absolute bottom-[7.5rem] left-[6rem]"
            />
          </span>
        </div>
        <div className="about-description">
          <h3 className="uppercase font-medium mb-6 tracking-[0.75px] text-[#147efb] text-2xl">
            ABOUT ME
          </h3>
          <h4 className="text-[#2d2e32] text-4xl font-bold mb-10 leading-[1.2] tracking-[-0.5px]">
            Front-end Developer based in Abuja, Nigeria 📍
          </h4>
          <p className="font-mulish text-3xl leading-[1.5] font-medium text-[#767676]">
            Hey, my name is Adoyi, and I'm a Frontend Developer. My passion is
            to create and develop a clean UI/UX for my users.
            <br />
            <br /> My main stack currently is React in combination with Tailwind
            CSS.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
