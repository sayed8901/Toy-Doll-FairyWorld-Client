import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../AuthContext/AuthProvider";
import Swal from "sweetalert2";

const AllToys = () => {
  const { user } = useContext(AuthContext);
  const [toysData, setToysData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/toys")
      .then((res) => res.json())
      .then((data) => setToysData(data));
  }, []);

  const handleSingleToyDetailsView = () => {
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
    <div>
      <h2 className="text-2xl lg:text-3xl font-bold text-center my-8">
        Our Exclusive <span className="text-gradient">Doll Gallery</span>
      </h2>

      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr>
              <th className="text-center">SL</th>
              <th className="text-center">Seller info</th>
              <th className="text-center">Toy Info</th>
              <th className="text-center">
                Price <br />
                (in BD Tk)
              </th>
              <th className="text-center">
                Available Quantity <br />
                (in pcs)
              </th>
              <th className="text-center">Details</th>
            </tr>
          </thead>
          <tbody>
            {/* table row */}
            {toysData.map((toy, index) => (
              <tr key={toy._id}>
                <td className="text-center">{index + 1}</td>
                <td>
                  {toy?.sellerName}
                  <br />
                  <span className="badge badge-ghost badge-sm">
                    {toy?.sellerEmail}
                  </span>
                </td>
                <td>
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img
                          src={toy?.picture}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{toy?.toyName}</div>
                      <div className="text-sm opacity-50">
                        category: <b>{toy?.category}</b>
                      </div>
                    </div>
                  </div>
                </td>
                <td className="text-center">{toy?.price}</td>
                <td className="text-center">{toy?.availableQuantity}</td>
                <th className="text-center">
                  <Link
                    onClick={() => handleSingleToyDetailsView(toy._id)}
                    to={`/toy/${toy._id}`}
                  >
                    <button className="btn btn-sm btn-primary btn-outline">View Details</button>
                  </Link>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllToys;
