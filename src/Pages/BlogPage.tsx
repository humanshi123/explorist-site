import blog from "../assets/Ontario.jpg";
import { useLocation  } from 'react-router-dom'; 

const BlogPage = () => {
    // const { id } = useParams();
    const location = useLocation();
    const { heading, description, image } = location.state || {};

  return (
    <div>
      <div className="container ">
        <div className="main inline-block relative py-[30px] md:py-[50px] ">
          <div className="left lg:float-left lg:w-[calc(100%-383px)] lg:pr-[21px] ">
            <img src={blog} alt="" className="rounded-xl " />
            <p className="my-[10px] ">2024-05-27</p>
            <h3 className="mb-4">SASKATCHEWAN</h3>
            <p className="text-base "> {description}
            </p>
          </div>
          <div className="rightt mt-7 lg:mt-0 lg:w-[383px] lg:float-left lg:sticky lg:top-0 ">
            <div className="p-5 lg:p-[30px] rounded-[10px] bg-white shadow-[0px_0px_20px_0px_rgba(0,0,0,0.1)]  ">
              <h4 className="border-b border-[#ECECEC] text-2xl mb-5 pb-4  ">Related Post</h4>
             <div className="grid grid-cols-[60px,minmax(0,1fr)] gap-3">
                <div>
                    <img src={image} alt="" className="aspect-square rounded-full" />
                </div>
                <div>
                    <h4>{heading} </h4>
                    <p className="line-clamp-[10] ">{description} </p>
                </div>
             </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
