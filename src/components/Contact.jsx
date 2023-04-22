import { useState } from "react";

const Contact = () => {
  const [changing, setChanging] = useState(false);
  const [error, setError] = useState(true);
  const [valid, setValid] = useState(false);
  const [userDetails, setUserDetails] = useState({
    companyName: "",
    natureOfBusiness: "",
    address: "",
    postCode: "",
    contactName: "",
    contactPhone: "",
    email: "",
    likedIn: "",
    idea: "",
    file: "",
  });

  const Fields = [
    {
      name: "companyName",
      placeHolder: "Company Name",
      type: "text",
      required: true,
    },
    {
      name: "natureOfBusiness",
      placeHolder: "Nature of Business",
      type: "text",
      required: true,
    },
    {
      name: "address",
      placeHolder: "Address",
      type: "text",
      required: true,
    },
    {
      name: "postCode",
      placeHolder: "Postcode",
      type: "number",
      required: true,
    },
    {
      name: "contactName",
      placeHolder: "Contact Name",
      type: "text",
      required: true,
    },
    {
      name: "contactPhone",
      placeHolder: "Contact Phone",
      type: "number",
      required: true,
    },
    {
      name: "email",
      placeHolder: "Email",
      type: "email",
      required: true,
    },
    {
      name: "likedIn",
      placeHolder: "LinkedIn",
      type: "link",
      required: true,
    },
    {
      name: "idea",
      placeHolder: "Let's talk about your idea",
      type: "text",
      required: true,
    },
  ];

  const handleChange = (e) => {
    // var file = e.target.files[0];
    var name = e.target.name;
    var value = e.target.value;
    setUserDetails({ ...userDetails, [name]: value });
    setChanging(!changing);
  };

  return (
    <>
      <div className="flexbs md:flex-col md:justify-start md:items-start md:px-5  pt-32 px-10 bg-[#002FA8] text-primary1 md:pt-20">
        <div className="cflexss gap-5 w-1/3 md:w-full">
          <p className="text-5xl font-bold">Get in touch,</p>
          <p className="text-xl">
            thank you for taking the time to go through my website. I am always
            excited to connect with like-minded individuals and expand my
            professional network. If you would like to connect with me, please
            don't hesitate to do so. I would be thrilled to hear from you and
            discuss any opportunities or questions you may have about business.
          </p>
        </div>
        <form className="cflexss w-1/3 md:w-full gap-10 py-10">
          {Fields.map((field) => {
            return (
              <>
                <div className="cflexss gap-2 w-full">
                  <input
                    className="w-full pl-5 border-b-2 bg-transparent border-primary1 focus:outline-none"
                    name={field.name}
                    type={field.type}
                    placeholder={field.placeHolder}
                    required={field.required}
                    onChange={handleChange}
                  />
                  {field.name === "email" && error && (
                    <p className="text-red-900 text-sm">
                      Please, enter a valid email address
                    </p>
                  )}
                </div>
              </>
            );
          })}
          <input type="file" />
        </form>
      </div>
    </>
  );
};
export default Contact;
