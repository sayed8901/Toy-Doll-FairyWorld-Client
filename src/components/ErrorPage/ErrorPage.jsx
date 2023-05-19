import Lottie from "lottie-react";
import ErrorAnimation from "../../../public/carton-animated-error-page.json";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="hero min-h-screen">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-3xl text-error font-bold">
            Oops!! page not found!
          </h1>
          <Lottie className="my-4" animationData={ErrorAnimation} loop={true} />
          <Link>
            <button className="btn btn-outline btn-info">Back to Home</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
