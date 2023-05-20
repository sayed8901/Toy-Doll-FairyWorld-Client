const UpdateToyModal = ({ toy }) => {
  const toyData = toy;
  //   console.log(toyData);

  const handleUpdateToy = (e) => {
    e.preventDefault();
    const form = e.target;
    const price = form.price.value;
    const availableQuantity = form.availableQuantity.value;
    const description = form.description.value;
    console.log(price, availableQuantity, description);
  };

  return (
    <div>
      {/* The button to open modal */}
      <label htmlFor="my-toy-updating-modal" className="btn btn-sm bg-gradient">
        Update
      </label>

      {/* Modal body */}
      <input
        type="checkbox"
        id="my-toy-updating-modal"
        className="modal-toggle"
      />
      <label htmlFor="my-toy-updating-modal" className="modal cursor-pointer">
        <label className="modal-box relative" htmlFor="">
          <form
            onSubmit={handleUpdateToy}
            className="card-body w-full sm:max-w-[90%] lg:max-w-[80%] xl:max-w-[70%] mx-auto"
          >
            <h2 className="text-2xl font-bold text-center text-gradient mb-2">
              Update Toy
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
                  <span className="label-text">
                    Available Quantity (in pcs)
                  </span>
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
              value="Update"
            />
          </form>
        </label>
      </label>
    </div>
  );
};

export default UpdateToyModal;
