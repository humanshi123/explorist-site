import React, { useState } from 'react';

const faqData = [
  {
    title: 'j. How do I join as a Supplier with my great experiences',
    content: 'Please contact us for more information at partnerships@explorist.ca.',
  },
  {
    title: 'm. What should I do if I have special dietary requirements or allergies?',
    content: 'Please inform us and the supplier at the time of booking, and will do our best to accommodate your needs.',
  },
  {
    title: 'c. Do you offer multi-day experiences?',
    content: 'Yes, we offer a variety of multi-day experiences, including guided tours and adventure packages.',
  },
];

const faqData2 = [
  {
    title: 'k. What documents do I need for international travel to Canada? How can I stay informed about travel advisories and restrictions?',
    content: `Generally, you'll need a valid passport, as well some countries will require a visa. We recommend viewing https://ircc.canada.ca/english/visit/visas.asp for current visa information.`,
  },
  {
    title: 'b. What experiences do you offer?',
    content: 'We offer thousands of experiences over a wide range of locations across Canada; from tours, classes, courses, events, etc. Something for everybody',
  },
  {
    title: 'e. How does the booking platform work',
    content: 'You can book the experience online through our website. Soon after a confirmation detail will be sent to your email you have used to connect.',
  },
];

const Faq: React.FC = () => {
  const [dropdownStates1, setDropdownStates1] = useState<boolean[]>(
    faqData.map(() => false) 
  );
  const [dropdownStates2, setDropdownStates2] = useState<boolean[]>(
    faqData2.map(() => false) 
  );

  const toggleDropdown1 = (index: number) => {
    setDropdownStates1((prevState) =>
      prevState.map((isOpen, i) => (i === index ? !isOpen : isOpen))
    );
  };

  const toggleDropdown2 = (index: number) => {
    setDropdownStates2((prevState) =>
      prevState.map((isOpen, i) => (i === index ? !isOpen : isOpen))
    );
  };

  return (
    <section className='pb-10 pt-10 md:pt-[80px] '>
      <div className="container">
      <h2 className='mb-5 '>Frequently Asked Questions</h2>
        <div className="grid md:grid-cols-2 md:gap-[21px] ">
          <div>
            {faqData.map((dropdown, index) => (
              <div
                className={`main-drop p-4 md:p-[30px] mb-5 bg-white rounded-[10px] cursor-pointer shadow-[0px_0px_20px_0px_rgba(0,0,0,0.1)] ${
                  dropdownStates1[index] ? 'active' : ''
                }`}
                onClick={() => toggleDropdown1(index)}
                key={index}
              >
                <h5 className="drop-icon text-lg md:text-xl pr-10 relative ">
                  {dropdown.title}
                </h5>
                <div
                  className={`transition-max-height duration-300 ease-in-out overflow-hidden ${
                    dropdownStates1[index] ? 'max-h-screen' : 'max-h-0'
                  }`}
                >
                  <p className='px-[10px] pt-[10px] '>{dropdown.content}</p>
                </div>
              </div>
            ))}
          </div>

          <div>
            {faqData2.map((dropdown, index) => (
              <div
              className={`main-drop p-4 md:p-[30px] mb-5 bg-white rounded-[10px] cursor-pointer shadow-[0px_0px_20px_0px_rgba(0,0,0,0.1)] ${
                dropdownStates2[index] ? 'active' : ''
              }`}
                onClick={() => toggleDropdown2(index)}
                key={index}
              >
                <h5 className="drop-icon text-lg md:text-xl pr-10 relative">
                  {dropdown.title}
                </h5>
                <div
                  className={`transition-max-height duration-300 ease-in-out overflow-hidden ${
                    dropdownStates2[index] ? 'max-h-screen' : 'max-h-0'
                  }`}
                >
                  <p className='px-[10px] pt-[10px] '>{dropdown.content}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faq;
