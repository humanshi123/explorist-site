import founderImg from "../assets/founder.png";
const List = [
  {
    id: 1,
    item: "A company serving Canadian Vendors/Outfitters/Experience Professionals",
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
    item: "A company that will be fulfilled only when the vendors are successful and customers are satisfied. This is whom we are as individuals; and what we strive to be as a Company",
  },
];
const FoundersMessage = () => {
  return (
    <div>
      <div className="container">
        <h1>Founder’s Message</h1>
        <div className="grid items-center md:grid-cols-[minmax(0,1fr),416px] gap-[60px] ">
          <div>
            <p>
              Hi, I AM THE FOUNDER OF EXPLORIST.ca <br />
              I have always been an avid outdoor enthusiast and recognize an
              opportunity to showcase incredible Canadian small and medium size
              providers of events, experiences and adventures; mostly within
              Canada
              <br />
              Our focus is to promote the best independent owned businesses, and
              to be your favorite online Marketplace to shop events and
              experiences in Canada
              <br />- Barry Campbell
            </p>
          </div>
          <div>
            <img
              src={founderImg}
              alt=""
              className="rounded-full aspect-square"
            />
          </div>
        </div>
        <div>
            <h3>IMAGINE</h3>
            <ol>
                {List.map((data)=>(
                    <li>{data.item} </li>
                ))}
            </ol>
        </div>
      </div>
    </div>
  );
};

export default FoundersMessage;
