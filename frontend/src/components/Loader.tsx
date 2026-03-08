import Lottie from "lottie-react";
import loaderAnimation from "../assets/animations/loader.json";

interface LoaderProps {
  size?: number;
  fullPage?: boolean;
}

const Loader = ({ size = 200, fullPage = false }: LoaderProps) => {
  const animation = (
    <Lottie
      animationData={loaderAnimation}
      loop
      autoplay
      style={{ width: size, height: size }}
    />
  );

  return (
    <div className={fullPage ? "full-screen-loader" : "loader"}>
      {animation}
    </div>
  );
};

export default Loader;
