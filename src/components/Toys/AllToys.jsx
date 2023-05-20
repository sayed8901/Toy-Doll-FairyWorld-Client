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

  //   const [searchedToys, setSearchedToys] = useState([]);

  const handleSearch = (event) => {
    event.preventDefault();
    const searchText = event.target.searchText.value;
    console.log(searchText);

    fetch(`http://localhost:5000/toySearchByToyNameOrCategory/${searchText}`)
      .then((res) => res.json())
      .then((data) => setToysData(data));

    event.target.reset();
  };

  return (
    <div>
      {/* <h2 className="text-2xl lg:text-3xl font-bold text-center my-12">
        Our Exclusive <span className="text-gradient">Doll Gallery</span>
      </h2> */}

      <form
        onSubmit={handleSearch}
        className="form-control w-full max-w-lg mx-auto my-12"
      >
        <label className="text-2xl lg:text-3xl font-bold text-center mb-8">
          Here you can search by- <br /> <span className="text-gradient">Toy name</span> or{" "}
          <span className="text-gradient">Toys category</span>
        </label>
        <div className="flex gap-4 mx-auto">
          <input
            type="text"
            name="searchText"
            placeholder="Type Toy Name/ Category"
            className="input input-bordered w-full max-w-lg"
            required
          />
          <input
            className="btn btn-outline bg-gradient text-white font-bold"
            type="submit"
            value="Search"
          />
        </div>
      </form>

      <div className="overflow-x-auto w-full">
        <table className="table w-full mt-4 mb-12">
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
              <tr className="hover" key={toy._id}>
                <th className="text-center">{index + 1}</th>
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
                    <button className="btn btn-sm btn-primary btn-outline">
                      View Details
                    </button>
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
