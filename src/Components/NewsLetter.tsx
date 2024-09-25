import newsimg from "../assets/newsletter.gif";

const NewsLetter = () => {
  return (
        <div className="grid md:grid-cols-2 gap-5 items-center bg-[#eeeeee] rounded-[24px]  ">
          <div>
            <img src={newsimg} alt="" className="rounded-t-[15px] md:rounded-tr-none md:rounded-s-[24px]"/>
          </div>
          <div className="flex justify-center h-full flex-col p-5 md:pl-0">
        <h4 className="text-[28px] md:text-[36px] mb-2 md:mb-5 ">Become an <span className="font-Dmserif text-[#1c9d41] ">Explorist</span></h4>
        <p className="max-w-[513px] mb-5">This is for the curious, the adventurous, those who refuse to settle for ordinary. <br/> <br/>
        Discover the real Canada.</p>
      <div className="relative">
      <input type="email" name="" id="" placeholder="Enter your email" className="w-full text-black rounded-[50px] px-4 h-[60px] "/>
      <button className="absolute right-0 top-0 w-[163px] text-white h-full rounded-[50px] bg-[#1c9d41]">Join the Tribe</button>
      </div>
        </div>
        </div>
  );
};

export default NewsLetter;
