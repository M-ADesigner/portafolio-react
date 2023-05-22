import { RotatingLines } from "react-loader-spinner";
import "./style.css";


function LoaderRotating() {
  return (
    <div className="sectionLoaderRotating mt-5">
      <RotatingLines
        strokeColor="red"
        strokeWidth="5"
        animationDuration="0.75"
        width="300"
        visible={true}
      />
    </div>
  );
}

export default LoaderRotating;
