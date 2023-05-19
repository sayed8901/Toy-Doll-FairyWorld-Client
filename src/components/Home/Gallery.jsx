import { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";

const Gallery = () => {
  const [toysData, setToysData] = useState([]);

  useEffect(() => {
    fetch("toys.json")
      .then((res) => res.json())
      .then((data) => setToysData(data));
  }, []);

//   console.log(toysData);

  return (
    <div className="my-12">
      <h2 className="text-2xl font-bold text-center text-gradient mb-8">
        Our Doll Collection
      </h2>

      <Marquee speed={200} pauseOnHover={true}>
        {toysData.map((toy) => (
          <div key={toy._id} className="card glass mr-12">
            <figure>
              <img className="h-72 rounded-2xl"
                src={toy?.picture}
                alt="car!"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{toy?.toyName}</h2>
            </div>
          </div>
        ))}
      </Marquee>
    </div>
  );
};

export default Gallery;
