const About = () => {
  return (
    <>
      <div className="flexbs py-24 pl-5 pr-20">
        <div className="w-[35%] cflexss gap-20">
          <p className="text-primary2 font-semibold text-4xl">
            Clarice Bonaccorsi
          </p>
          <div>
            <p className="text-primary3 font-bold text-6xl">
              "Don't wait for opportunities, create them."{" "}
            </p>
            <p className=" text-right pr-8 text-2xl">-unknown</p>
          </div>
        </div>
        <div className="w-[55%] cflexss gap-5">
          <div className="w-full">
            <ul className="list-none flexbm text-2xl">
              <li>Technology</li>
              <li>Finance</li>
              <li>Music</li>
              <li>Design</li>
              <li>Business</li>
            </ul>
          </div>
          <p className="text-[25px] text-primary3 font-semibold">
            I've always been intrigued by business and music; subsequently, I
            developed a love for innovation, which led to my engagement in the
            tech and financial industries.
          </p>
          <p className="text-1xl text-primary4 font-semibold">
            As an experienced visionary and project manager with a diverse skill
            set, I have successfully executed projects in a range of sectors,
            including blockchain, trading algorithms, music, artist development
            and more. With six years of experience in various fields, I am
            driven to pursue creative projects that make a positive impact on
            the world, leveraging my entrepreneurial background and
            brand-building expertise.
          </p>
          <p className="text-1xl text-primary4 font-semibold">
            Born in Italy and raised in Michigan,  I acquired a passion for
            business at a young age. As I embarked on my career, I relocated to
            Los Angeles to collaborate with various teams and optimize project
            outcomes. By working closely with diverse workforces, I have honed
            my ability to overcome obstacles to establish successful businesses
            with a solid foundation.
          </p>
          <div className="w-full flexmm gap-10 pt-5">
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
