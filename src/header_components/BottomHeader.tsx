import "./BottomHeader.css"
export default function BottomHeader() {
    return (
      <div className="bottom-header">
        <hr></hr>
        <div className="bottom-header-button">
        <button type="button" className="btn-link d-flex align-items-center border-0 m-0 px-0 outline-none">
            <span>Виберіть магазин Jysk</span>
        </button>
        </div>
        <hr></hr>
      </div>
    );
  }