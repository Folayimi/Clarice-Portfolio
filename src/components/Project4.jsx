import Image from "next/image";
import enter from "../Assets/enter.png";
import companies from "../Assets/companies.png";

const Project4 = () => {
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
      <div className="cflexms pt-32 bg-gradient-to-b bg-black text-primary1">
        <div className="cflexss pl-16 pr-10">
          <div className="flexbm w-full gap-5">
            <div className="cflexsm gap-5 w-1/3">
              <Image src={enter} alt="enter" width="100%" height="100%" />
              <div className="bg-primary1 rounded-3xl py-2 px-5 text-black font-semibold cursor-pointer">
                Visit
              </div>
            </div>
            <div className="cflexss gap-4 w-2/3">
              <p className="font-bold text-6xl">ENTR</p>
              <p className="text-xl font-semibold">
                Streamline your party planning, elevate your event’s experience
              </p>
              <p className="text-sm">
                Introducing Event Social, a revolutionary event creation
                platform that makes setting-up parties, events and meetings for
                all occasions easy and hassle-free. Event Social gives the power
                to the host, streamlining event planning and management. With a
                focus on monetization and a comprehensive service marketplace,
                Event Social streamlines the entire process of hosting events,
                from planning to execution.
              </p>
            </div>
          </div>
          <div className="cflexmm gap-7 pt-28 pb-32 ">
            <p className="font-bold text-3xl capitalize">
              Elevate your event planning with our comprehensive add-on features
            </p>
            <div className="flexmm gap-7 flex-wrap pb-5">
              {Tickets.map((ticket) => {
                return (
                  <>
                    <div className="tickets bg-gradient-to-r from-secondary2-100 to-secondary2-200 w-[22em] flex-grow-0 flex-shrink">
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
export default Project4;
