import founderImg from "../assets/founder.png";
const List = [
  {
    id: 1,
    item: "A company serving Canadian Vendors/Outfitters/Experience Professionals.",
  },
  {
    id: 2,
    item: "A company supporting local events and regional experiences.",
  },
  {
    id: 3,
    item: "A company that views our vendors and customers as community.",
  },
  {
    id: 4,
    item: "A company that lists and promotes creative and ecological experiences.",
  },
  {
    id: 5,
    item: "A company adhering to strong Vendor credentials & consumer guarantees",
  },
  {
    id: 6,
    item: "A company that enhances online exposure for Vendors and a variety of choices for Consumers.",
  },
  {
    id: 7,
    item: "A company using unique automation API tools for cost efficiency and real time bookings",
  },
  {
    id: 8,
    item: "A company that recognizes and contributes to charities.",
  },
  {
    id: 9,
    item: "A company that will be fulfilled only when the vendors are successful and customers are satisfied. This is whom we are as individuals; and what we strive to be as a Company.",
  },
];
const FoundersMessage = () => {
  return (
    <div>
      <div className="container">
        <h2 className="uppercase text-center mt-5  ">Founder’s Message</h2>
        <div className="grid items-center md:grid-cols-[minmax(0,1fr),236px] lg:grid-cols-[minmax(0,1fr),416px] pt-[30px] md:pt-[60px] pb-10 gap-[30px] md:gap-10 lg:gap-[60px] ">
          <div className="order-2 md:order-1">
            <p className="text-base leading-[30px] ">
              Hi, I AM THE FOUNDER OF EXPLORIST.ca{" "}
            </p>
            <p className="my-[14px] md:text-base md:leading-[30px]">
              I have always been an avid outdoor enthusiast and recognize an
              opportunity to showcase incredible Canadian small and medium size
              providers of events, experiences and adventures; mostly within
              Canada
            </p>
            <p className="md:text-base md:leading-[30px]">
              {" "}
              Our focus is to promote the best independent owned businesses, and
              to be your favorite online Marketplace to shop events and
              experiences in Canada
            </p>
            <p className="mt-5 md:text-base md:leading-[30px]">
              - Barry Campbell
            </p>
          </div>
          <div>
            <img
              src={founderImg}
              alt=""
              className="rounded-full aspect-square max-w-[230px] mx-auto md:max-w-full "
            />
          </div>
        </div>
        <div>
          <h3 className="text-[#212121] text-xl mb-[18px] leading-[30px] ">
            IMAGINE
          </h3>
          <ol className="ml-[30px] ">
            {List.map((data) => (
              <li
                key={data.id}
                className="list-decimal my-[6px] text-sm md:text-base text-[#757575] md:leading-[30px] leading-[26px]  "
              >
                {data.item}{" "}
              </li>
            ))}
          </ol>
        </div>
        <div className="my-10 md:my-[80px] text-center bg-white px-5 py-[30px] md:p-10 rounded-[10px] shadow-[0px_0px_20px_0px_rgba(0,0,0,0.10)] ">
          <h3 className="text-lg md:text-2xl leading-[36px] md:leading-[46px] mb-5 mx-auto max-w-[970px] ">
            Our most thoughtful expression guiding our company’s journey is to
            have more Canadians engaged, learning, socializing and experiencing.
          </h3>
          <p className="md:text-lg mb-[10px] ">Best Regards - Barry Campbell</p>

          <a
            href="mailto:partnerships@explorist.ca"
            className="text-[#757575] text-sm underline leading-[30px] italic "
          >
            partnerships@explorist.ca
          </a>
        </div>
        <div className="mb-10 md:mb-[80px] text-center max-w-[460px] mx-auto ">
          <h3 className="text-xl leading-[40px] font-normal md:leading-[46px] italic text-[#363636] tracking-[1px] ">
            “PRODUCTS LAST FOR TIME EXPERIENCES LAST A LIFETIME”
          </h3>
          <p className="text-[#757575] mt-[10px] ">
            A timely truth and respite for our planet
          </p>
        </div>
      </div>
    </div>
  );
};

export default FoundersMessage;
