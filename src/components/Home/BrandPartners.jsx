import Marquee from "react-fast-marquee";
import LazyLoad from "react-lazy-load";

const BrandPartners = () => {
    return (
      <div className="mt-16 mb-32">
        <h2 className="text-2xl lg:text-3xl font-bold text-center mb-16">
          Our Proud <span className="text-gradient">Brand Partners</span>
        </h2>

        {/* Showing images in a sliding card using "Marquee" package */}
        <Marquee speed={100} pauseOnHover={true} loop={0} gradient={true}>
          <LazyLoad>
            <img
              className="h-48 lg:h-64 xl:h-72 rounded-2xl mr-24"
              src="https://images.unsplash.com/photo-1620288627223-53302f4e8c74?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=464&q=80"
              alt="car!"
            />
          </LazyLoad>
          <LazyLoad>
            <img
              className="h-48 lg:h-64 xl:h-72 rounded-2xl mr-24"
              src="https://images.unsplash.com/photo-1622964318124-d87cb88d24e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80"
              alt="car!"
            />
          </LazyLoad>
          <LazyLoad>
            <img
              className="h-48 lg:h-64 xl:h-72 rounded-2xl mr-24"
              src="https://images.unsplash.com/photo-1620632523414-054c7bea12ac?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80"
              alt="car!"
            />
          </LazyLoad>
          <LazyLoad>
            <img
              className="h-48 lg:h-64 xl:h-72 rounded-2xl mr-12"
              src="https://images.unsplash.com/photo-1605152277138-359efd4a6862?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
              alt="car!"
            />
          </LazyLoad>
          <LazyLoad>
            <img
              className="h-48 lg:h-64 xl:h-72 rounded-2xl mr-12"
              src="https://images.unsplash.com/photo-1619454016518-697bc231e7cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=580&q=80"
              alt="car!"
            />
          </LazyLoad>
          <LazyLoad>
            <img
              className="h-48 lg:h-64 xl:h-72 rounded-2xl mr-12"
              src="https://images.unsplash.com/photo-1618836436067-3665afbc4ee9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=465&q=80"
              alt="car!"
            />
          </LazyLoad>
          <LazyLoad>
            <img
              className="h-48 lg:h-64 xl:h-72 rounded-2xl mr-12"
              src="https://images.unsplash.com/photo-1617566347924-ad5ebdaa014e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80"
              alt="car!"
            />
          </LazyLoad>
          <LazyLoad>
            <img
              className="h-48 lg:h-64 xl:h-72 rounded-2xl mr-12"
              src="https://images.unsplash.com/photo-1619551734325-81aaf323686c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=449&q=80"
              alt="car!"
            />
          </LazyLoad>
          <LazyLoad>
            <img
              className="h-48 lg:h-64 xl:h-72 rounded-2xl mr-12"
              src="https://images.unsplash.com/photo-1612810806563-4cb8265db55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=327&q=80"
              alt="car!"
            />
          </LazyLoad>
        </Marquee>
      </div>
    );
};

export default BrandPartners;