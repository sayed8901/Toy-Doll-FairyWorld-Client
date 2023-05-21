import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateToy = () => {
  const { id } = useParams();
  //   console.log(id);

  const navigate = useNavigate();
  const [toyData, setToyData] = useState([]);
  useEffect(() => {
    fetch(`https://doll-fairyworld-server.vercel.app/toy/${id}`)
      .then((res) => res.json())
      .then((data) => setToyData(data));
  }, [id]);
  //   console.log(toyData);

  const handleUpdateToy = (e) => {
    e.preventDefault();
    const form = e.target;
    const price = form.price.value;
    const availableQuantity = form.availableQuantity.value;
    const description = form.description.value;
    const updatedData = { price, availableQuantity, description };
    // console.log(updatedData);

    fetch(`https://doll-fairyworld-server.vercel.app/toys/${toyData._id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: "Great...job...!",
            text: "Toy information updated successfully",
            icon: "success",
            confirmButtonText: "Success!",
          });
        }
        // updating state
        // const remaining = myToysData.filter(toy => toy._id !== toyData._id);
        // const updated = myToysData.find(toy => toy._id === toyData._id);
        // const updatedToys = [updated, ...remaining];
        // setMyToysData(updatedToys);
      });
  };

  return (
    <div>
      <form
        onSubmit={handleUpdateToy}
        className="card-body w-full sm:max-w-[90%] md:max-w-[70%] lg:max-w-[60%] xl:max-w-[40%] mx-auto"
      >
        <h2 className="text-2xl font-bold text-center mb-2">
          Update Information for: <br /> <span className="text-gradient text-3xl">{toyData?.toyName}</span>
        </h2>
        <div className="space-y-3">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Price</span>
            </label>
            <input
              type="text"
              name="price"
              placeholder="Toy Price"
              defaultValue={toyData?.price}
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Available Quantity (in pcs)</span>
            </label>
            <input
              type="text"
              name="availableQuantity"
              placeholder="Available Quantity"
              defaultValue={toyData?.availableQuantity}
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Product Details</span>
            </label>
            <textarea
              type="text"
              name="description"
              placeholder="Detail Description"
              defaultValue={toyData?.description}
              className="input input-bordered h-28 textarea"
              required
            />
          </div>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Photo (optional)</span>
            </label>
            <input
              type="url"
              name="picture"
              placeholder="Photo_URL"
              className="input input-bordered"
            />
          </div>
        </div>

        <input
          className="btn btn-primary w-36 mx-auto mt-6 bg-gradient font-bold"
          type="submit"
          value="Update Toy"
        />
      </form>
      <div className="text-right mr-8 mb-12">
            <button
              onClick={() => {
                navigate(-1);
              }}
              className="btn btn-sm btn-outline font-bold sm:mr-12"
            >
              Back to My All toys
            </button>
          </div>;
    </div>
  );
};

export default UpdateToy;
