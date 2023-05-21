import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import useTitle from "../../CustomHooks/useTitle";

const AddToy = () => {
  useTitle('Add a Toy')
  const [toysData, setToysData] = useState([]);

  // getting all toys data via fetching
  useEffect(() => {
    fetch("https://doll-fairyworld-server.vercel.app/toys")
      .then((res) => res.json())
      .then((data) => setToysData(data));
  }, []);

  // extract the unique category names from the "toysData" array
  const uniqueCategories = [...new Set(toysData.map((toy) => toy.category))];
  // console.log(uniqueCategories);

  const handleAddToy = (e) => {
    e.preventDefault();
    const form = e.target;
    const toyName = form.toyName.value;
    const category = form.category.value;
    const rating = form.rating.value;
    const price = form.price.value;
    const availableQuantity = form.availableQuantity.value;
    const picture = form.picture.value;
    const description = form.description.value;
    const sellerName = form.sellerName.value;
    const sellerEmail = form.sellerEmail.value;
    const newToy = {
      toyName,
      category,
      rating,
      price,
      availableQuantity,
      picture,
      description,
      sellerName,
      sellerEmail,
    };
    // console.log(newToy);

    // to send data to backend using "POST" method
    fetch("https://doll-fairyworld-server.vercel.app/toys", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newToy),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        // after successful data posting to MongoDB, showing a sweet alert info
        if (data.insertedId) {
          Swal.fire({
            title: "Yaa...hoo...!",
            text: "New toy added successfully",
            icon: "success",
            confirmButtonText: "Success!",
          });
        }
      });
  };

  return (
    <div>
      <form
        onSubmit={handleAddToy}
        className="card-body w-full sm:max-w-[90%] md:max-w-[80%] lg:max-w-[70%] xl:max-w-[60%] mx-auto"
      >
        <h2 className="text-2xl font-bold text-center text-gradient mb-2">
          Add a Toy
        </h2>
        <div>
          <h3 className="text-xl font-bold mb-4">Toy Info:</h3>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              name="toyName"
              placeholder="Toy Name"
              className="input input-bordered"
              required
            />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 lg:gap-8">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Select Category</span>
              </label>
              <select
                className="border-2 rounded-lg p-3 bg-transparent"
                name="category"
                id="category"
                placeholder="add a category"
                required
              >
                <option className="font-bold" value={uniqueCategories[0]}>
                  {uniqueCategories[0]}
                </option>
                <option className="font-bold" value={uniqueCategories[1]}>
                  {uniqueCategories[1]}
                </option>
                <option className="font-bold" value={uniqueCategories[2]}>
                  {uniqueCategories[2]}
                </option>
                <option className="font-bold" value={uniqueCategories[3]}>
                  {uniqueCategories[3]}
                </option>
              </select>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Rating</span>
              </label>
              <input
                type="text"
                name="rating"
                placeholder="Rating"
                className="input input-bordered"
                required
              />
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 lg:gap-8">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Price</span>
              </label>
              <input
                type="text"
                name="price"
                placeholder="Price"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Quantity</span>
              </label>
              <input
                type="text"
                name="availableQuantity"
                placeholder="Available Quantity"
                className="input input-bordered"
                required
              />
            </div>
          </div>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Photo</span>
            </label>
            <input
              type="url"
              name="picture"
              placeholder="Photo_URL"
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
              className="input input-bordered textarea h-24"
              required
            />
          </div>
        </div>

        <div>
          <h3 className="text-xl font-bold mt-10 mb-4">Seller Info:</h3>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Seller Name</span>
            </label>
            <input
              type="text"
              name="sellerName"
              placeholder="Seller Name"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Seller Email</span>
            </label>
            <input
              type="email"
              name="sellerEmail"
              placeholder="Seller Email"
              className="input input-bordered"
              required
            />
          </div>
        </div>

        <input
          className="btn btn-primary w-36 mx-auto mt-6 bg-gradient font-bold"
          type="submit"
          value="Add"
        />
      </form>
    </div>
  );
};

export default AddToy;