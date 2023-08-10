import { Slide } from "react-awesome-reveal";

const Offerings = () => {
  return (
    <div className="mb-24">
      <Slide>
        <h2 className="text-2xl lg:text-3xl font-bold text-center mt-16 mb-8">
          Our Latest <span className="text-gradient">Offerings</span>
        </h2>
        <p className="py-6 text-center">
          Here you can find most lovely toys of your dream. The toy dolls are
          organized here by their category.
          <br /> <br /> You can find them easily just by clicking onto the
          catogory tabs below.
        </p>
      </Slide>

      <div className="sm:flex sm:gap-8 justify-center">
        {/* card 1 */}
        <div className="card sm:w-96 bg-base-100 shadow-xl mb-8 sm:mb-0 group hover:scale-110 duration-500">
          <div className="card-body">
            <h2 className="card-title text-gradient text-2xl">
              Latest Collection
            </h2>
            <p>
              We have daily updated our online store with all brand new toys of
              your wish..
            </p>
            <div className="card-actions justify-center">
              <button className="btn btn-primary">Check Out Now!</button>
            </div>
          </div>
        </div>

        {/* card 2 */}
        <div className="card sm:w-96 bg-base-100 shadow-xl group hover:scale-110 duration-500">
          <div className="card-body">
            <h2 className="card-title text-gradient text-2xl">
              Subscription packages
            </h2>
            <p>
              We are also providing toy collection as a whole-seller. You can
              check out our packages below as per your requirement.
            </p>
            <div className="flex mx-auto gap-2">
              <div className="card-actions justify-end">
                <button className="btn btn-primary">Monthly</button>
              </div>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">Yearly</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Offerings;

