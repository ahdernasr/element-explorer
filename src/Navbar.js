const Navbar = () => {
  return (
    <div className="menu">
      <div className="logo">
        <i className="fab fa-github"></i>
      </div>
      <div className="menu-content">
        <div className="menu-select">
          <span>Table</span>
        </div>
        <div className="menu-select">
          <span>Play</span>
        </div>
        <div className="menu-select">
          <span>Timeline</span>
        </div>
        <div className="menu-select">
          <span>Scientists</span>
        </div>
        <div className="menu-select dropdown">
          <span className="dropbtn">
            Trends<i className="fas fa-angle-down"> </i>
          </span>
          <div className="dropdown-content">
            <a>Density</a>
            <a>Atomic radius</a>
            <a>Electronegativity</a>
            <a>Melting Point</a>
            <a>Boiling Point</a>
            <a>First I.E.</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
