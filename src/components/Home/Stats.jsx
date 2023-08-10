// countup
import { Slide } from "react-awesome-reveal";
import CountUp from "react-countup";

// intersection observer
import { useInView } from "react-intersection-observer";


const Stats = () => {
    const { ref, inView } = useInView({
      threshold: 0.5,
    });
        
    return (
      <div className="mt-24 mb-32" name="stats" ref={ref}>
        <Slide>
          <h2 className="text-2xl lg:text-3xl font-bold text-center mt-16 mb-8">
            Success <span className="text-gradient">Stats</span>
          </h2>
          <p className="py-6 text-center">
            We are always committed to provide better services to all our
            honorable customers.
            <br /> <br /> We are happy to showcase our statistical data of
            successful services delivery.
          </p>
        </Slide>

        {/* statistics figure 1 */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-x-2 md:gap-x-8 my-8">
          <div className="card bg-gradient text-primary-content m-8 sm:m-2">
            <div className="card-body">
              <div className="my-8">
                <div className="text-[40px] card-title mb-8">
                  {inView ? (
                    <CountUp start={0} end={1256} duration={3} />
                  ) : null}
                  +
                </div>
                <p>Worldwide Happy Customers</p>
              </div>
              <div className="card-actions justify-end">
                <button className="btn btn-sm">Explore more</button>
              </div>
            </div>
          </div>

          <div className="card bg-gradient text-primary-content m-8 sm:m-2">
            <div className="card-body">
              <div className="my-8">
                <div className="text-[40px] card-title mb-8">
                  {inView ? (
                    <CountUp start={0} end={8967} duration={3} />
                  ) : null}
                  +
                </div>
                <p>Exclusive Toy Collections</p>
              </div>
              <div className="card-actions justify-end">
                <button className="btn btn-sm">Explore more</button>
              </div>
            </div>
          </div>

          <div className="card bg-gradient text-primary-content m-8 sm:m-2">
            <div className="card-body">
              <div className="my-8">
                <div className="text-[40px] card-title mb-8">
                  {inView ? <CountUp start={0} end={72} duration={4} /> : null}+
                </div>
                <p> Reliable Brand partners</p>
              </div>
              <div className="card-actions justify-end">
                <button className="btn btn-sm">Explore more</button>
              </div>
            </div>
          </div>

          {/* <AnimatedSection>
            <div className="group hover:scale-125 duration-300">
              <div className="text-[40px] text-gradient mb-2">
                {inView ? <CountUp start={0} end={1256} duration={3} /> : null}+
              </div>
              <div>
                Happy <br /> Customers
              </div>
            </div>
          </AnimatedSection> */}
          {/* <AnimatedSection>
            <div className="group hover:scale-125 duration-300">
              <div className="text-[40px] text-gradient mb-2">
                {inView ? <CountUp start={0} end={8967} duration={3} /> : null}+
              </div>
              <div>
                Exclusive <br /> Toy Collections
              </div>
            </div>
          </AnimatedSection> */}
          {/* <AnimatedSection>
            <div className="group hover:scale-125 duration-300">
              <div className="text-[40px] text-gradient mb-2">
                {inView ? <CountUp start={0} end={72} duration={4} /> : null}+
              </div>
              <div>
                Reliable <br /> Brand partners
              </div>
            </div>
          </AnimatedSection> */}
        </div>
      </div>
    );
};

export default Stats;