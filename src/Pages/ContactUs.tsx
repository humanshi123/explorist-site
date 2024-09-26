import React, { useState } from "react";

import { CallIcon, EmailIcon, Location } from "../Utils/SvgIcons";

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  instagram: string;
  reasonToConnect: string;
};

const contactData = [
  {
    id: 1,
    icon: <CallIcon />,
    title: "Phone Number",
    value: "1 780-995-1460",
  },
  {
    id: 2,
    icon: <EmailIcon />,
    title: "Email Address",
    value: "partnerships@explorist.ca",
  },
  {
    id: 3,
    icon: <Location />,
    title: "Location",
    value: "208C - 8135-102 St. Edmonton, Alberta, CA, T6E-4A4",
  },
];

const ContactUs: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    instagram: "",
    reasonToConnect: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form Data Submitted: ", formData);
  };

  return (
    <div className="py-[30px] md:py-[50px] ">
      <div className="container  ">
        <div className="grid md:grid-cols-[minmax(0,1fr),minmax(0,2fr)] gap-[30px] ">
          <div>
            <h2 className="mb-5 md:mb-[30px] text-[28px] md:text-[36px] ">Contact</h2>
            {contactData.map((data) => (
              <div className="flex items-center gap-5 mb-[30px] last:mb-0 ">
                <div>{data.icon} </div>
                <div className="max-w-[220px] ">
                  <p className="text-[#001A27] font-semibold leading-[normal] mb-1 ">
                    {data.title}{" "}
                  </p>
                  <p className="text-[#001A27] leading-[26px] md:leading-[normal] font-light ">
                    {data.value}{" "}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div>
            <h2 className="mb-5 md:mb-[30px] text-[28px] md:text-[36px]">Your Contact Info</h2>

            <div className="bg-white rounded-[10px] p-5 shadow-[0px_0px_20px_0px_rgba(0,0,0,0.10)] ">
              <form onSubmit={handleSubmit} className="contact-form ">
                <div className="grid md:flex md:flex-wrap md:justify-center md:gap-x-[30px] gap-y-5">
                  <div className="md:w-[calc(50%-15px)]">
                    <label htmlFor="">First Name</label>
                    <input
                      type="text"
                      name="firstName"
                      placeholder="First Name"
                      value={formData.firstName}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="md:w-[calc(50%-15px)]">
                    <label htmlFor="">Last Name</label>
                    <input
                      type="text"
                      name="lastName"
                      placeholder="Last Name"
                      value={formData.lastName}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="md:w-full">
                    <label htmlFor="">Email Address</label>
                    <input
                      type="email"
                      name="email"
                      placeholder="Email Address"
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="md:w-[calc(50%-15px)]">
                    <label htmlFor="">Phone Number</label>
                    <input
                      type="number"
                      name="phoneNumber"
                      placeholder="Phone Number"
                      value={formData.phoneNumber}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="md:w-[calc(50%-15px)]">
                    <label htmlFor="">Instagram Handle</label>
                    <input
                      type="text"
                      name="instagram"
                      placeholder="Home Address"
                      value={formData.instagram}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="md:w-full">
                    <label htmlFor="">Reason To Contact</label>
                    <textarea
                      rows={3}
                      name="reasonToConnect"
                      id=""
                      placeholder=""
                      value={formData.reasonToConnect}
                      onChange={handleChange}
                    ></textarea>
                  </div>
                  <div className="md:mt-[20px] flex justify-center ">
                    <button
                      type="submit"
                      className="text-white bg-[#0f6528] rounded-[10px] text-base py-3 md:py-5 px-10 min-w-[200px] "
                    >
                      Submit{" "}
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
