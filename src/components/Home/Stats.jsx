// countup
import CountUp from "react-countup";

// intersection observer
import { useInView } from "react-intersection-observer";


const Stats = () => {
    const { ref, inView } = useInView({
      threshold: 0.5,
    });
        
    return (
      <div className="mt-24 mb-32" name="stats" ref={ref}>
        <div>
          <h2 className="text-2xl lg:text-3xl font-bold text-center mt-16 mb-8">
            Success <span className="text-gradient">Stats</span>
          </h2>
          <p className="py-6 text-center">
            We are always committed to provide better services to all our
            honorable customers.
            <br /> <br /> We are happy to showcase our statistical data of
            successful services delivery.
          </p>
        </div>

        {/* statistics figure 1 */}
        <div className="flex justify-center gap-x-10 md:gap-x-16 my-8">
          <div>
            <div className="text-[40px] text-gradient mb-2">
              {inView ? <CountUp start={0} end={1256} duration={3} /> : null}+
            </div>
            <div>
              Happy <br /> Customers
            </div>
          </div>
          <div>
            <div className="text-[40px] text-gradient mb-2">
              {inView ? <CountUp start={0} end={8967} duration={3} /> : null}+
            </div>
            <div>
              Exclusive <br /> Toy Collections
            </div>
          </div>
          <div>
            <div className="text-[40px] text-gradient mb-2">
              {inView ? <CountUp start={0} end={72} duration={4} /> : null}+
            </div>
            <div>
              Reliable <br /> Brand partners
            </div>
          </div>
        </div>
        
      </div>
    );
};

export default Stats;