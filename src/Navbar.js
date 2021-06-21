/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import useFetch from "./useFetch";
import * as useTrends from "./useTrends";

const Navbar = () => {
  const { elementsArray } = useFetch();
  let elementList = document.getElementsByClassName("table-element");

  const showDensity = () => {
    useTrends.showDensity(elementsArray, elementList);
  };

  const showRadius = () => {
    useTrends.showRadius(elementsArray, elementList);
  };

  const showElectronegativity = () => {
    useTrends.showElectronegativity(elementsArray, elementList);
  };

  const showMP = () => {
    useTrends.showMP(elementsArray, elementList);
  };

  const showBP = () => {
    useTrends.showBP(elementsArray, elementList);
  };

  const showFirstIE = () => {
    useTrends.showFirstIE(elementsArray, elementList);
  };

  
  return (
    <div className="menu">
      <div className="logo">
        <a href="http://www.github.com/ahdernasr/periodic-table" className="fab fa-github"></a>
        <a href="/" className="fas fa-home"></a>
      </div>
      <div className="menu-content">
        <div className="menu-select dropdown">
          <span className="dropbtn">
            Trends<i className="fas fa-angle-down"></i>
          </span>
          <div className="dropdown-content">
            <a onClick={showDensity}>Density</a>
            <a onClick={showRadius}>Atomic radius</a>
            <a onClick={showElectronegativity}>Electronegativity</a>
            <a onClick={showMP}>Melting Point</a>
            <a onClick={showBP}>Boiling Point</a>
            <a onClick={showFirstIE}>First I.E.</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
