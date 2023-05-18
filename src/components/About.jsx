const About = ({ position }) => {
  return (
    <>
      <div
        ref={position}
        className="md:flex-col md:justify-start md:items-start flexbs py-28 px-5 pr-26 md:gap-10"
      >
        <div className="w-[35%] cflexss gap-20 md:w-full md:gap-10 ">
          <p className="text-primary2 font-semibold text-4xl">
            Clarice Bonaccorsi
          </p>
          <div>
            <p className="text-primary3 font-bold text-6xl md:text-4xl">
              "Don't wait for opportunities, create them."{" "}
            </p>
            <p className=" text-right pr-8 text-2xl md:text-xl">-unknown</p>
          </div>
        </div>
        <div className="w-[55%] cflexss gap-5 md:w-full">
          <div className="w-full">
            <ul className="list-none flexbm text-2xl flex-wrap">
              <li>Technology</li>
              <li>Entertainment</li>
              <li>Finance</li>
              <li>Artificial Intelligence</li>
              {/* <li>Business</li> */}
            </ul>
          </div>
          <p className="text-[25px] text-primary3 font-semibold">
            Fascinated by the worlds of business, I discovered my passion for innovation.
          </p>
          <p className="text-sm text-primary4 font-normal">
            As a visionary and project manager with a diverse skill set, I have successfully executed projects in a range of sectors, including entertainment, blockchain, trading algorithms, artificial intelligence and more. With six years of experience, I am driven to pursue creative projects that make a positive impact on the world by leveraging my entrepreneurial background and brand-building expertise.
          </p>
          <p className="text-sm text-primary4 font-normal">
            I acquired a passion for business at a young age. As I embarked on my career, I relocated to Los Angeles to collaborate with various teams and optimize project outcomes. By working closely with diverse workforces, I have honed my ability to overcome obstacles to build successful businesses with a solid foundation.
          </p>
          <div className="w-full flexmm gap-10 pt-5 md:text-center flex-wrap">
            <div className="text-[0.8rem] font-semibold cflexmm gap-3">
              <p className="text-5xl font-bold">6+</p>
              <p>Years of Experience</p>
            </div>
            <div className="text-[0.8rem] font-semibold cflexmm gap-3">
              <p className="text-5xl font-bold">4+</p>
              <p>Projects completed</p>
            </div>
            <div className="text-[0.8rem] font-semibold cflexmm gap-3">
              <p className="text-5xl font-bold">30+</p>
              <p>Team members</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default About;
