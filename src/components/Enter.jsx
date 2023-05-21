import { useRef, useEffect } from "react";
import Image from "next/image";
import enter1 from "../Assets/enter1.png";
import b1 from "../Assets/b1.svg";
import b2 from "../Assets/b2.png";
import b3 from "../Assets/b3.svg";
import star from "../Assets/star.svg";
import loc from "../Assets/loc.svg";
import f1 from "../Assets/f1.png";
import f2 from "../Assets/f2.png";
import f3 from "../Assets/f3.png";
import f4 from "../Assets/f4.png";
import f5 from "../Assets/f5.png";
import f6 from "../Assets/f6.png";
import Link from "next/link";

const Enter = () => {
  const vantaRef = useRef(null);
  let vantaEffect = useRef(null);
  var setVanta = () => {
    if (window.VANTA) {
      vantaEffect.current = window.VANTA.HALO({
        el: vantaRef.current,
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.0,
        minWidth: 200.0,
        baseColor: 0x0,
        backgroundColor: 0x0,
        xOffset: 0,
        yOffset: 0,
        size: 0.8,
      });
    }
  };
  const loadVanta = async () => {
    const VANTA = await import(
      "../../node_modules/vanta/dist/vanta.halo.min.js"
    );
    setVanta();
  };

  // useEffect(() => {
  //   loadVanta();
  //   return () => {
  //     if (vantaEffect.current) vantaEffect.current.destroy();
  //   };
  // }, []);

  const Events = [
    {
      img: b1,
      title: "Party Clean-Up Inc",
      content:
        "20 years+ of experience cleaning venues and homes. We are fit to service any...",
      star: star,
      loc: loc,
      type: "Cleaning",
      width: "8em",
    },
    {
      img: b2,
      title: "Venue MAX",
      content: "Book a venue with us for a max experience at your next event.",
      star: star,
      loc: loc,
      type: "Venues",
      width: "7em",
    },
    {
      img: b3,
      title: "Party Rentals LLC",
      content:
        "Offering the most popular party rentals in the city, ready to serve the Los Angeles area...",
      star: star,
      loc: loc,
      type: "Rentals",
      width: "11em",
    },
  ];

  const Tickets = [
    {
      img: f1,
      title: "Non-Disclosure",
      content:
        "Protect sensitive information with option to require guests to sign nda before entering event.",
      width: "10em",
    },
    {
      img: f2,
      title: "ID Verification",
      content:
        "Verify the identity of your guests to ensure a secure and controlled event experience",
      width: "10em",
    },
    {
      img: f3,
      title: "Doc-Sign",
      content:
        "Streamline the signing process by allowing guests to digitally sign important documents related to your event.",
      width: "13em",
    },
    {
      img: f4,
      title: "Raffles",
      content:
        "Create, manage and monetize raffles for your event, complete with winning number generation.",
      width: "10em",
    },
    {
      img: f5,
      title: "Doc-Upload",
      content:
        "Allow your guests to upload documents and easily keep record of the uploads",
      width: "10em",
    },
    {
      img: f6,
      title: "Fundraising",
      content:
        "Raise money for your cause with our built-in fundraiser tools, including payment processing, donation tracking and goal setting.",
      width: "13em",
    },
  ];
  
  return (
    <>
      <div
        ref={vantaRef}
        className="h-screen overflow-auto w-full cflexmm pt-32 lg:h-[100vh] bg-gradient-to-b from-secondary4-100 to-secondary4-200 text-primary1 md:pt-20"
      >
        <div className="h-full max-w-[1600px] mx-auto cflexss md:p-5">
          <div className="flexbm w-full gap-5 md:flex-col md:gap-10 px-24 md:px-0">
            <div className="cflexsm gap-2 w-1/3 md:w-full mr-[35px] mt-[-30px]">
              <div className="flexmm w-[20em] md:w-[15em] sm:w-[70%]">
                <Image
                  src={"/enter-logo.svg"}
                  alt="big music label"
                  width={416}
                  height={428}
                  className="w-[260px] h-fit"
                />
              </div>
              <Link
                href="https://entr.events"
                className="bg-primary1 rounded-3xl py-2 px-5 text-black cursor-pointer hover:text-primary1 hover:bg-black transition-colors duration-500 -ml-10"
              >
                Visit
              </Link>
            </div>

            <div className="cflexss pt-2 gap-4 w-2/3 md:w-full">
              <p className="header" style={{ textTransform: "inherit" }}>
                ENTR.events
              </p>
              <p className="text-xl font-semibold capitalize">
                Streamline your party planning, elevate your event’s experience
              </p>
              <p className="text-sm text-justify w-full">
                Introducing ENTR, a revolutionary event creation platform that
                makes setting-up parties, events and meetings for all occasions
                easy and hassle-free. We give the power to the host,
                streamlining the entire process of hosting events, from planning
                to execution. Our app allows hosts to create events on both
                mobile and desktop platforms, making it easy to invite guests,
                set event requirements, book services and build custom events.
                Whether you're planning a small gathering or a large event, ENTR
                has everything you need to make your event a success.
              </p>
            </div>
          </div>

          <div className="cflexmm gap-7 py-[55px] w-full md:text-center">
            <p className="font-bold text-2xl sm1:text-2xl">
              Book and manage event services
            </p>
            <div className="flexmm gap-3 w-screen md:w-full flex-wrap pb-5 text-left px-18">
              {Events.map((event, index) => {
                return (
                  <div
                    key={`m_${index}`}
                    className="py-[22px] px-[14px] bg-[#0D0E15] rounded-[16px]"
                  >
                    <div className="flex items-center h-[133px] sm:h-auto w-full">
                      <div className="min-w-[123px] h-full">
                        <Image
                          src={event.img}
                          alt="smt"
                          className="h-full w-full"
                        />
                      </div>
                      <div className="max-w-[320px] h-full pl-4">
                        <div className="cflexss gap-1">
                          <p className="text-[22px] md:text-xl">
                            {event.title}
                          </p>
                          <div>
                            <p className="text-[13px] text-[#A4A4AA] flex-wrap">
                              {event.content}
                            </p>
                            <div className="flex items-center mt-2">
                              <Image
                                src={event.star}
                                alt="smt"
                                className="w-[5em]"
                              />
                              <span className="text-[12px] text-[#A4A4A4]">
                                (32)
                              </span>
                            </div>
                          </div>
                          <div className="flexsm gap-2">
                            <div className="flexmm w-[18px] h-[19px]">
                              <Image
                                src={event.loc}
                                width="100%"
                                height="100%"
                                alt="smt"
                              />
                            </div>
                            <p className="text-[14px] text-[#A4A4AA]">
                              {event.type}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="cflexmm gap-7 pb-32 w-full md:text-center">
            <p className="font-bold text-2xl sm1:text-xl">
              Elevate your event planning with our comprehensive add-on features
            </p>
            <div className="flexmm gap-7 w-screen md:w-full flex-wrap pb-5 text-left px-18">
              {Tickets.map((ticket) => {
                return (
                  <>
                    <div className="tickets p-3 py-[22px] px-[14px] h-[150px] sm:h-auto">
                      <div className="min-w-[100px] h-full">
                        <Image
                          src={ticket.img}
                          alt="smt"
                          className="h-full w-full"
                        />
                      </div>                     
                      <div className="cflexss gap-1 max-w-[320px] h-full">
                        <p className="text-2xl md:text-xl">{ticket.title}</p>
                        <div>
                          <p className="text-sm text-[#A4A4AA]">
                            {ticket.content}
                          </p>
                        </div>
                      </div>
                    </div>
                  </>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Enter;
