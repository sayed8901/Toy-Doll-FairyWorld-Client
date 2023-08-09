import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../AuthContext/AuthProvider";
import Swal from "sweetalert2";


const ToyCard = ({ category }) => {
  // console.log(category);

  const { user } = useContext(AuthContext);
  const [toysData, setToysData] = useState([]);

  // getting toys data based on category
  useEffect(() => {
    fetch(`https://doll-fairyworld-server.vercel.app/toys/${category}`)
      .then((res) => res.json())
      .then((data) => setToysData(data));
  }, [category]);
  //   console.log(toysData);

  const handleSingleToyDetailsView = () => {
    // to show an alert if there found no user while trying to view toy details information
    if (!user) {
      Swal.fire({
        title: "Warning!",
        text: "You have to log in first to view details !",
        icon: "warning",
        confirmButtonText: "Log in",
      });
    }
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-8 my-8">
      {toysData.map((toy) => (
        <div key={toy._id} className="card card-side bg-base-100 shadow-xl glass group hover:scale-110 duration-300">
          <figure className="px-4 mx-auto">
            <img
              className="rounded-xl h-48 lg:h-64 xl:h-72"
              src={toy.picture}
              alt="Movie"
            />
          </figure>
          <div className="card-body text-left">
            <h2 className="card-title mb-8">{toy.toyName}</h2>
            <p>Price: {toy.price}</p>
            <p>Rating: {toy.rating}</p>

            {/* to show details information of a toy */}
            <div className="card-actions justify-end">
              <Link
                onClick={() => handleSingleToyDetailsView(toy._id)}
                to={`/toy/${toy._id}`}
              >
                <button className="btn btn-primary">View Details</button>
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ToyCard;
