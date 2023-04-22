import { useState, useEffect } from "react";
import { Upload } from "heroicons-react";
import FileBase64 from "react-file-base64";

const Contact = () => {
  const EMAIL_REGEX = /^(\w+)([\.\-]?\w+)*\@(\w+)([\.\-]?\w+)*(\.[a-z|A-Z]+)$/;
  const PHONE_REGEX =
    /^([+]?[(]?[0-9]{1,3}?[)]?)?\(?([0-9]{3,4})\)?[\-\.\ ]?([0-9]{3,4})[\-\.\ ]?([0-9]{4})$/;
  const [changing, setChanging] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [phoneError, setPhoneError] = useState(false);
  const [fileError, setFileError] = useState(false);
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

  useEffect(() => {
    if (
      userDetails["companyName"].trim().length > 0 &&
      userDetails["natureOfBusiness"].trim().length > 0 &&
      userDetails["address"].trim().length > 0 &&
      userDetails["postCode"].trim().length > 0 &&
      userDetails["contactName"].trim().length > 0 &&
      PHONE_REGEX.test(userDetails["email"].trim()) &&
      EMAIL_REGEX.test(userDetails["email"].trim()) &&
      userDetails["likedIn"].trim().length > 0 &&
      userDetails["idea"].trim().length > 0
    ) {
      setValid(true);
    } else {
      setValid(false);
    }
    if (!EMAIL_REGEX.test(userDetails["email"].trim())) {
      setEmailError(true);
    } else {
      setEmailError(false);
    }
    if (!PHONE_REGEX.test(userDetails["contactPhone"].trim())) {
      setPhoneError(true);
    } else {
      setPhoneError(false);
    }
  }, [changing]);

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

  const upload = (file) => {
    if (file.size <= 10240) {
      setUserDetails({ ...userDetails, file: file.base64 });
      setFileError(false);
      setChanging(!changing);
    } else {
      setFileError(true);
    }
    setUserDetails({ ...userDetails, file: file.base64 });
    setChanging(!changing);
    // services.api.userRequests
    //   .updateUserProfile(userDetails)
    //   .then((res) => {
    //     setLoader(false);
    //     if (type == "profile") {
    //       setImageP(image);
    //     } else if (type === "cover") {
    //       setImageC(image);
    //     }
    //     localStorage.setItem("user", JSON.stringify(res.data));
    //     services.toast.success("Uploaded Successfully");
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //     services.toast.error(error);
    //   });
  };

  const handleChange = (e) => {
    // var file = e.target.files[0];
    var name = e.target.name;
    var value = e.target.value;
    setUserDetails({ ...userDetails, [name]: value });
    setChanging(!changing);
  };

  const handleSubmit = (e) => {
    if (valid) {
      // SAVE AND UPDATE USER DETAILS ENDPOINT
      return;
    }
  };

  return (
    <>
      <div className="flexbs md:flex-col md:justify-start md:items-start md:px-5  pt-32 px-10 bg-[#002FA8] text-primary1">
        <div className="cflexss gap-5 w-1/3 md:w-full">
          <p className="text-5xl font-bold">Get in touch,</p>
          <p className="text-xl md: text-neutral-50">
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
                  {field.name === "email" && emailError && (
                    <p className="text-red-900 text-sm">
                      Please, enter a valid email address
                    </p>
                  )}
                  {field.name === "contactPhone" && phoneError && (
                    <p className="text-red-900 text-sm">
                      Please, enter a valid phone number
                    </p>
                  )}
                </div>
              </>
            );
          })}
          <div className="w-full">
            <div className="relative flexmm w-full p-10 border-2 border-dotted border-white cursor-pointer">
              <div className="flexmm gap-2">
                <Upload />
                <p>Upload Additional file</p>
              </div>
              <div className="absolute opacity-0">
                <FileBase64
                  name="profilePicture"
                  defaultValue={userDetails["file"]}
                  multiple={false}
                  onDone={(base64) => {
                    upload(base64);
                  }}
                />
              </div>
            </div>
            {fileError && (
              <p className="text-red-900 text-sm">
                Can't accept files greater than 10mb.
              </p>
            )}
            <p className="text-sm font-light">
              Attach file. File size of your documents should not exceed 10MB
            </p>
          </div>
        </form>
      </div>
    </>
  );
};
export default Contact;
