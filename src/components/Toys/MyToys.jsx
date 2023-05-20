import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../AuthContext/AuthProvider";
import UpdateToyModal from "./UpdateToyModal";


const MyToys = () => {
  const { user } = useContext(AuthContext);
  //   console.log(user.email);
  const [myToysData, setMyToysData] = useState([]);

  useEffect(() => {
    // fetch(`https://doll-fairyworld-server-sayed8901.vercel.app/myToys/${user.email}`)
    fetch(`https://doll-fairyworld-server.vercel.app/myToys/${user.email}`)
      .then((res) => res.json())
      .then((data) => setMyToysData(data));
  }, [user]);
  //   console.log(myToysData);

  return (
    <div>
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
            {myToysData.map((toy, index) => (
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
                <td className="text-center">
                    <div className="flex gap-2">
                        <UpdateToyModal></UpdateToyModal>
                    <button className="btn btn-sm btn-error btn-outline">
                      Delete
                    </button>
                    </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyToys;
