const Contact = () => {
  return (
    <div className="mb-28">
      <div>
        <h2 className="text-2xl lg:text-3xl font-bold text-center mt-32 mb-8">
          <span className="text-gradient">Visit</span> us
        </h2>
        <p className="pt-6 pb-12 text-center">
          We always welcoming to our guest, well-wishers & most importantly our
          enthusiastic kids.
          <br /> <br /> We will be so happy & grateful if you would have a look
          at our store at a convenient time to explore more excitement.
        </p>
      </div>

      <div className="sm:flex gap-8 justify-center">
        {/* card 1 */}
        <div className="card w-96 bg-base-100 shadow-xl image-full glass">
          <figure>
            <img
              src={`https://media.istockphoto.com/id/1412566249/photo/christmas-details-of-festive-interior-for-little-princess-girl-decorating-living-room-soft.jpg?b=1&s=170667a&w=0&k=20&c=pxVNgcChYZX2E_ev38YTCjpZBov3GhFXiQFjVSeAuLI=`}
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
          <h2 className="text-3xl mb-4 text-center">
              <span className="font-extrabold">Basundhara</span> Outlet
            </h2>
            <p className="text-xl font-bold">29, West Pathapath, Dhaka-1205</p>
            <p>Contact number: 01915158901</p>
            <p>Email: sayed91515@gmail.com</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Visit Now!</button>
            </div>
          </div>
        </div>

        {/* card 2 */}
        <div className="card w-96 bg-base-100 shadow-xl image-full glass">
          <figure>
            <img
              src={`https://media.istockphoto.com/id/466123671/photo/little-girls-bed.jpg?b=1&s=170667a&w=0&k=20&c=4Mstv2xUHVDzE_xGlii4I-jfWUXmSM5hTiwqb4Ivhtk=`}
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="text-3xl mb-4 text-center">
              <span className="font-extrabold">Dhanmondi</span> Outlet
            </h2>
            <p className="text-xl font-bold">30/A, North Dhanmondi, Dhaka</p>
            <p>Contact number: 01730024046</p>
            <p>Email: sayed@mssbd.org</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Visit Now!</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

