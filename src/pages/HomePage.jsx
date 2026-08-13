import Spline from "@splinetool/react-spline";
import Tokyo from "../assets/HomepageImg/TokyoPentHouse.jpg";
import Maxico from "../assets/HomepageImg/MaxicoVilla.jpg"

const HomePage = () => {
  return (
    <div className="w-full bg-black">
      <div className="relative w-full h-[100vh] overflow-hidden">
        <Spline
          scene="https://prod.spline.design/2nhStKo4FVljPn-P/scene.splinecode"
          className="scale-120"
        />
      </div>
      
      <div className="md:flex">
        <div className="md:w-[50%]">
          <div className="px-4">
            <div className="my-2">
              <img src={Tokyo} className="rounded-4xl" />
            </div>
            <div className="flex justify-between px-2">
              <div className="">
                <p className="footerheading">TOKYO, JAPAN</p>
                <h1 className="font-bodo">Aman Tokyo PentHouse</h1>
              </div>
              <div className="text-white">
                <p>Starting from</p>
                <p>$12,500</p>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-4 md:pt-0">
          <div className="px-4">
            <div className="my-2">
              <img src={Maxico} className="rounded-4xl" />
            </div>
            <div className="flex justify-between px-2">
              <div className="">
                <p className="footerheading">TOKYO, JAPAN</p>
                <h1 className="font-bodo">Aman Tokyo PentHouse</h1>
              </div>
              <div className="text-white">
                <p>Starting from</p>
                <p>$12,500</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
