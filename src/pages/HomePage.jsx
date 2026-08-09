
import Spline from "@splinetool/react-spline";

const HomePage = () => {

  return (
    <div className="flex">
      <div
        className="relative w-full h-[94vh] overflow-hidden"
      >
        <Spline
          scene="https://prod.spline.design/2nhStKo4FVljPn-P/scene.splinecode"
          className="scale-120"
        />
      </div>
    </div>
  );
};

export default HomePage;