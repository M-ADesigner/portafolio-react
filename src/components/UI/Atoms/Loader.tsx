// importamos esta libreria https://github.com/mhnpd/react-loader-spinner
import { CirclesWithBar } from "react-loader-spinner";
import "./style.css";

function Loader() {
  return (
   <section className="loader-Section mt-5">
     <div className="containerLoader">
       <CirclesWithBar
         height="200"
         width="300"
         color="#4fa94d"
         wrapperStyle={{}}
         wrapperClass=""
         visible={true}
         outerCircleColor=""
         innerCircleColor=""
         barColor=""
         ariaLabel="circles-with-bar-loading"
       />
     </div>
   </section>
  );
}

export default Loader;
