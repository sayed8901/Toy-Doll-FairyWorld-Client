import { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";
import LazyLoad from "react-lazy-load";

const Gallery = () => {
  const [toysData, setToysData] = useState([]);

  useEffect(() => {
    // fetch("toys.json")
    fetch("http://localhost:5000/toys")
      .then((res) => res.json())
      .then((data) => setToysData(data));
  }, []);

  //   console.log(toysData);

  return (
    <div className="my-16">
      <h2 className="text-2xl lg:text-3xl font-bold text-center mb-8">
        Our Exclusive <span className="text-gradient">Doll Gallery</span>
      </h2>

      <Marquee speed={220} pauseOnHover={true}>
        {toysData.map((toy) => (
          <div key={toy._id} className="card glass mr-12">
            <figure>
              <LazyLoad>
                <img
                  className="h-48 lg:h-64 xl:h-72 rounded-2xl"
                  src={toy?.picture}
                  alt="car!"
                />
              </LazyLoad>
            </figure>
            <LazyLoad>
              <div className="card-body">
                <h2 className="card-title">{toy?.toyName}</h2>
                <small className="text-right">
                  category <b>{toy?.category}</b>
                </small>
              </div>
            </LazyLoad>
          </div>
        ))}
      </Marquee>
    </div>
  );
};

export default Gallery;
