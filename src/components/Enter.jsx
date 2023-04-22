import Image from "next/image";
import enter1 from "../Assets/enter1.png";
import b1 from "../Assets/b1.png";
import b2 from "../Assets/b2.png";
import b3 from "../Assets/b3.png";
import star from "../Assets/star.png";
import loc from "../Assets/loc.png";

const Enter = () => {
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
      title: "Party CleanUp Inc",
      content:
        "20 years+ of experience cleaning venues and homes. We are fit to service any...",
      star: star,
      loc: loc,
      type: "Cleaning",
    },
  ];
  const Tickets = [
    {
      title: "ID Verification",
      content:
        "Verify the identity of your guests to ensure a secure and controlled event experience",
    },
    {
      title: "Doc-sign",
      content:
        "Streamline the signing process by allowing guests to digitally sign important documents related to your event.",
    },
    {
      title: "Fundraising",
      content:
        "Raise money for your cause with our built-in fundraiser tools, including donation tracking and goal setting.",
    },
    {
      title: "Auction",
      content:
        "Add an exciting element to your event with our auction fearure, including sales tracking and winner selection.",
    },
    {
      title: "Ticket Customization",
      content:
        "Create unique, professional-looking tickets, including pre-made themes and different ticket types.",
    },
    {
      title: "Doc-Upload",
      content:
        "Allow your guests to upload documents and easily keep record of the uploads",
    },
    {
      title: "Covid-19-Vaccination",
      content:
        "Keep your gurests and event staff safe by verifying Covid-19 vaccination status online.",
    },
    {
      title: "Non-Disclosure Agreements",
      content:
        "Protect sensitive information by requiring guests to sign NDAs before entering event.",
    },
    {
      title: "NFT",
      content:
        "Easily upload and share important documents related to your event with gurests and organizers.",
    },
  ];
  return (
    <>
      <div className="cflexms pt-32 bg-gradient-to-b from-secondary4-100 to-secondary4-200 text-primary1 md:pt-20">
        <div className="cflexss px-10 md:p-5">
          <div className="flexbm w-full gap-5 md:flex-col md:gap-10">
            <div className="cflexsm gap-5 w-[8em] md:w-[2/3]">
              <Image src={enter1} alt="enter" width="100%" height="100%" />
              <div className="bg-primary1 rounded-3xl py-2 px-5 text-black font-semibold cursor-pointer">
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
            <div className="flexmm gap-7 flex-wrap pb-5 text-left">
              {Events.map((event) => {
                return (
                  <>
                    <div className="tickets w-[30em] md:w-[20em] flex-grow-0 flex-shrink">
                      <div className="w-[15em]">
                        <Image src={event.img} />
                      </div>
                      <div className="cflexss gap-3">
                        <p className="text-2xl">{event.title}</p>
                        <div>
                          <p className="text-sm text-[#A4A4AA]">{event.content}</p>
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
                    <div className="tickets w-[22em] md:w-[20em] flex-grow-0 flex-shrink">
                      <div className=" border-2 border-white rounded-2xl py-1 px-5">
                        <p>{ticket.title}</p>
                      </div>
                      <p className="text-sm">{ticket.content}</p>
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
