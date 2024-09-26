import "./BottomHeader.css";
//import geoIcon from "src/assets/img/icon-geo.png"; 
//import arrowDownIcon from "src/assets/img/icon-arrow-down.png";

export default function BottomHeader() {
  return (
    <div className="bottom-header">
      <hr />
      <div className="bottom-header-a">
        <a className="btn-link d-flex align-items-center border-0 m-0 px-0 outline-none" href="#">
          <img 
            className="svg-w3-marker mr-2 v-2" 
            role="img" 
            aria-hidden="true" 
            width="20" 
            height="20" 
            src="src/assets/img/icon-geo.png" 
            alt="Geo marker" 
          />
          <span>Виберіть магазин Jysk</span>
          <img 
            className="svg-w3-marker mr-2 v-2" 
            role="img" 
            aria-hidden="true" 
            width="10" 
            height="10" 
            src="src/assets/img/icon-arrow-down.png" 
            alt="Arrow down" 
          />
        </a>
      </div>
      <hr />
    </div>
  );
}
