import backgroundImage from "../../../../assets/bienvenida.png";
import "./style.css";

function Header() {
  return (
    <header>
      <div
        className="p-5 text-center bg-image"
        id="imageHeader"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="mask" style={{ backgroundColor: "rgba(0, 0, 0, 0.6)" }}>
          <div className="d-flex justify-content-center align-items-center h-100">
            <div className="text-white">
              <h1 className="mb-3">Heading</h1>
              <h4 className="mb-3">Subheading</h4>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
