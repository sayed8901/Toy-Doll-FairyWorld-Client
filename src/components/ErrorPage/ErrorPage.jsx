import Lottie from "lottie-react";
import ErrorAnimation from "../../../public/carton-animated-error-page.json";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    // <div className="hero min-h-screen">
    //   <div className="hero-content text-center">
    //     <div>
    //       <h1 className="text-3xl text-error font-bold">
    //         Oops!! page not found!
    //       </h1>
    //       <Lottie className="my-4" animationData={ErrorAnimation} loop={true} />
    //       <Link>
    //         <button className="btn btn-outline btn-info">Back to Home</button>
    //       </Link>
    //     </div>
    //   </div>
    // </div>

    <div className="hero min-h-screen">
      <div className="my-container card sm:card-side bg-base-100">
        <figure>
          <Lottie animationData={ErrorAnimation} loop={true} />
        </figure>
        <div className="card-body text-center flex flex-col justify-evenly sm:mr-4 lg:mr-12">
          <h1 className="text-3xl sm:text-xl md:text-3xl lg:text-5xl text-error font-bold mb-8">
            Oops!! <br /> <br /> Page not found!
          </h1>
          <Link>
            <button className="btn btn-outline btn-info w-36">Back to Home</button>
          </Link>
        </div>
      </div>
    </div>
  );
};


export default ErrorPage;
