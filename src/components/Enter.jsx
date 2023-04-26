import { useRef, useEffect } from "react";
import Image from "next/image";
import enter1 from "../Assets/enter1.png";
import b1 from "../Assets/b1.png";
import b2 from "../Assets/b2.png";
import b3 from "../Assets/b3.png";
import star from "../Assets/star.png";
import loc from "../Assets/loc.png";
import f1 from "../Assets/f1.png";
import f2 from "../Assets/f2.png";
import f3 from "../Assets/f3.png";
import f4 from "../Assets/f4.png";
import f5 from "../Assets/f5.png";
import f6 from "../Assets/f6.png";
import Script from "next/script";

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
  async function loadVanta() {
    const VANTA = await import(
      "../../node_modules/vanta/dist/vanta.halo.min.js"
    );

    setVanta();
  }
  useEffect(() => {
    loadVanta();
    return () => {
      if (vantaEffect.current) vantaEffect.current.destroy();
    };
  }, []);

  const Events = [
    {
      img: b1,
      title: "Party CleanUp Inc",
      content:
        "20 years+ of experience cleaning venues and homes. We are fit to service any...",
      star: star,
      loc: loc,
      type: "Cleaning",
    },
    {
      img: b2,
      title: "Venue MAX",
      content: "Book a venue with us for a max experience at your next event.",
      star: star,
      loc: loc,
      type: "Venues",
    },
    {
      img: b3,
      title: "Party Rentals LLC",
      content:
        "Offering the most popular party rentals in the city, ready to serve the Los Angeles area...",
      star: star,
      loc: loc,
      type: "Rentals",
    },
  ];
  const Tickets = [
    {
      img: f1,
      title: "NoN-Disclosure",
      content:
        "Protect sensitive information by requiring guests to sign E-NDAs before entering event.",
    },
    {
      img: f2,
      title: "ID Verification",
      content:
        "Verify the identity of your guests to ensure a secure and controlled event experience",
    },
    {
      img: f3,
      title: "Doc-sign",
      content:
        "Streamline the signing process by allowing guests to digitally sign important documents related to your event.",
    },
    {
      img: f4,
      title: "Raffles",
      content:
        "Create and manage raffles for your event, complete with winning number generation.",
    },
    {
      img: f5,
      title: "Doc-Upload",
      content:
        "Allow your guests to upload documents and easily keep record of the uploads",
    },
    {
      img: f6,
      title: "Fundraising",
      content:
        "Raise money for your cause with our built-in fundraiser tools, including donation tracking and goal setting.",
    },
  ];
  return (
    <>
      <Script src="https://cdn.jsdelivr.net/npm/three@0.132.2/build/three.min.js"></Script>
      <div
        ref={vantaRef}
        className="w-full cflexms pt-32 bg-gradient-to-b from-secondary4-100 to-secondary4-200 text-primary1 md:pt-20"
      >
        <div className="cflexss px-24 md:p-5">
          <div className="flexbm w-full gap-5 md:flex-col md:gap-10">
            <div className="cflexsm gap-5 w-1/3 md:w-full">
              <div className="flexmm w-[10em] md:w-[8em]">
                <Image src={enter1} alt="enter" width="100%" height="100%" />
              </div>
              <div className="bg-primary1 rounded-3xl py-2 px-5 text-black cursor-pointer hover:text-primary1 border-2 hover:border-primary1 hover:bg-black transition-colors duration-300">
                Visit
              </div>
            </div>
            <div className="cflexss gap-4 w-2/3 md:w-full">
              <p className="font-bold text-6xl">ENTR</p>
              <p className="text-4xl md:text-3xl font-semibold capitalize">
                Streamline your party planning, elevate your event’s experience
              </p>
              <p className="text-sm">
                Introducing ENTR, a revolutionary event creation platform that
                makes setting-up parties, events and meetings for all occasions
                easy and hassle-free. We give the power to the host,
                streamlining the entire process of hosting events, from planning
                to execution. Our app allows hosts to create events on both
                mobile and desktop platforms, making it easy to invite guests,
                set event requirements and build the most custom event. Whether
                you're planning a small gathering or a large event, Event Social
                has everything you need to make your event a success. Give
                yourself the power to host with confidence.
              </p>
            </div>
          </div>
          <div className="cflexmm gap-7 pt-28 pb-32 w-full md:text-center">
            <p className="font-bold text-2xl sm1:text-2xl">
              Book and manage event services,
            </p>
            <div className="flexmm w-full gap-7 flex-wrap pb-5 text-left">
              {Events.map((event) => {
                return (
                  <>
                    <div className="tickets w-[25em] md:w-[20em] flex-grow-0 flex-shrink">
                      <div className="w-[15em] md:w-full">
                        <Image src={event.img} />
                      </div>
                      <div className="cflexss gap-1">
                        <p className="text-2xl">{event.title}</p>
                        <div>
                          <p className="text-sm text-[#A4A4AA]">
                            {event.content}
                          </p>
                          <Image src={event.star} />
                        </div>
                        <div className="flexsm gap-2">
                          <Image src={event.loc} />
                          <p className="text-xl text-[#A4A4AA]">{event.type}</p>
                        </div>
                      </div>
                    </div>
                  </>
                );
              })}
            </div>
          </div>

          <div className="cflexmm gap-7 pb-32 w-full md:text-center">
            <p className="font-bold text-2xl sm1:text-2xl">
              Elevate your event planning with our comprehensive add-on features
            </p>
            <div className="flexmm gap-7 flex-wrap pb-5 text-left">
              {Tickets.map((ticket) => {
                return (
                  <>
                    <div className="tickets p-3 w-[25em] md:w-[20em] flex-grow-0 flex-shrink">
                      <div className="w-[10em] md:w-full">
                        <Image src={ticket.img} />
                      </div>
                      <div className="cflexss gap-1">
                        <p className="text-2xl">{ticket.title}</p>
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
