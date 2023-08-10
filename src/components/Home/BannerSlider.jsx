import { Slide } from "react-awesome-reveal";

const BannerSlider = () => {
  return (
    <div>
      <div className="hero">
        <div className="hero-content text-center">
          <div>
            <Slide>
              {" "}
              <h2 className="text-2xl lg:text-3xl font-bold text-center mt-16 mb-8">
                Welcome to <span className="text-gradient">Fairy World!</span>
              </h2>
              <p className="py-6">
                Here you can find most lovely toys of your dream. Welcome to the
                world of a vast collection of variety of toys that you are
                looking for.
              </p>
              <p>Hope you will get pleasure discovering our toys collection.</p>
            </Slide>
            <br />

            <div className="my-8 carousel w-full">
              {/* slider 1 */}
              <div id="slide1" className="carousel-item relative w-full">
                <img
                  src={`https://media.istockphoto.com/id/1468317002/photo/bulgarian-martenitsa-spring-sign-on-white-background.jpg?b=1&s=170667a&w=0&k=20&c=eUnieq1xbnMkdiYdwvlOCMMbtmgYoB0mUHwNDDtbuSU=`}
                  className="w-full rounded-3xl"
                />

                {/* to overlay text at 1st slide */}
                <div className="absolute right-5 bottom-5 sm:bottom-16 md:bottom-24 lg:bottom-48 xl:bottom-1/2 text-gradient ">
                  <div className="w-1/2 lg:w-2/3 2xl:w-4/5 ml-auto">
                    <h1 className="mb-2 sm:mb-8 font-bold text-2xl lg:text-3xl xl:text-4xl">
                      Welcome Dear..
                    </h1>
                    <div className="mb-2 text-sm lg:text-xl xl:text-2xl">
                      <p>Here you can find most lovely toys of your dream.</p>
                      <br />
                      <p className="hidden sm:inline-block">
                        Hope you will get pleasure discovering our toys
                        collection.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="absolute flex justify-between left-5 right-5 bottom-5">
                  <a href="#slide4" className="btn btn-circle">
                    ❮
                  </a>
                  <a href="#slide2" className="btn btn-circle">
                    ❯
                  </a>
                </div>
              </div>

              {/* slider 2 */}
              <div id="slide2" className="carousel-item relative w-full">
                <img
                  src={`https://images.unsplash.com/photo-1595624871930-6e8537998592?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGRvbGwlMjB0b3klMjBjb3ZlciUyMGltZ3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60`}
                  className="w-full rounded-3xl"
                />
                <div className="absolute flex justify-between left-5 right-5 bottom-5">
                  <a href="#slide1" className="btn btn-circle">
                    ❮
                  </a>
                  <a href="#slide3" className="btn btn-circle">
                    ❯
                  </a>
                </div>
              </div>

              {/* slider 3 */}
              <div id="slide3" className="carousel-item relative w-full">
                <img
                  src={`https://media.istockphoto.com/id/1412566249/photo/christmas-details-of-festive-interior-for-little-princess-girl-decorating-living-room-soft.jpg?b=1&s=170667a&w=0&k=20&c=pxVNgcChYZX2E_ev38YTCjpZBov3GhFXiQFjVSeAuLI=`}
                  className="w-full rounded-3xl"
                />
                <div className="absolute flex justify-between left-5 right-5 bottom-5">
                  <a href="#slide2" className="btn btn-circle">
                    ❮
                  </a>
                  <a href="#slide4" className="btn btn-circle">
                    ❯
                  </a>
                </div>
              </div>

              {/* slider 4 */}
              <div id="slide4" className="carousel-item relative w-full">
                <img
                  src={`https://media.istockphoto.com/id/466123671/photo/little-girls-bed.jpg?b=1&s=170667a&w=0&k=20&c=4Mstv2xUHVDzE_xGlii4I-jfWUXmSM5hTiwqb4Ivhtk=`}
                  className="w-full rounded-3xl"
                />
                <div className="absolute flex justify-between left-5 right-5 bottom-5">
                  <a href="#slide3" className="btn btn-circle">
                    ❮
                  </a>
                  <a href="#slide1" className="btn btn-circle">
                    ❯
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerSlider;

