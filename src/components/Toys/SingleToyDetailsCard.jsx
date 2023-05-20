import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const SingleToyDetailsCard = () => {
  const { id } = useParams();
  // console.log(id);

  const [toy, setToy] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`https://doll-fairyworld-server.vercel.app/toy/${id}`)
      .then((res) => res.json())
      .then((data) => setToy(data));
  }, [id]);

  // console.log(toy);
  const {
    picture,
    toyName,
    sellerName,
    sellerEmail,
    price,
    rating,
    availableQuantity,
    description,
    category,
  } = toy;

  return (
    <div>
      <div
        className="hero min-h-screen mt-4 mb-8"
        style={{ minHeight: `calc(100vh - 24em)` }}
      >
        <div className="card grid grid-cols-1 md:grid-cols-3 shadow-xl">
          <figure className="col-span-1">
            <img
              className="h-64 md:h-72 lg:h-80 xl:h-96 rounded-2xl"
              src={picture}
              alt="Album"
            />
          </figure>

          <div className="card-body col-span-2">
            <div className="my-8 text-center">
              <h2 className="text-2xl lg:text-3xl font-bold text-center mb-8 text-gradient">
                {toyName}
              </h2>
              <p>
                category: <b>{category}</b>
              </p>
            </div>
            <p>
              Seller Name: <b>{sellerName}</b>
            </p>
            <p>
              Seller Email: <b>{sellerEmail}</b>
            </p>
            <p>
              Price: <b>{price}</b>
            </p>
            <p>
              Rating: <b>{rating}</b>
            </p>
            <p>
              Available Quantity: <b>{availableQuantity}</b>
            </p>
            <p>
              Detail Description:{" "}
              <span className="ps-8 block">
                <b>{description}</b>
              </span>
            </p>
          </div>
        </div>
      </div>

      <div className="text-right mr-8 mb-12">
        <button onClick={() => {navigate(-1)}} className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg btn-outline bg-gradient text-white font-bold">
          Back to previous page
        </button>
      </div>
    </div>
  );
};

export default SingleToyDetailsCard;
