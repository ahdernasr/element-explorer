import { useParams } from "react-router-dom";
import useFetch from "./useFetch";

const ElementInfo = () => {
  const { elementName } = useParams();
  const { elementsArray } = useFetch();

  const capitalizeFirstLetter = (word) => {
    let newWord = "",
      tempWord;
    tempWord = word.split("");
    newWord += tempWord[0].toUpperCase();
    for (let i = 1; i < word.length; i++) {
      newWord += tempWord[i];
    }
    return newWord;
  };

  let element = elementsArray[capitalizeFirstLetter(elementName)];

  for (let i in element) {
    if (element[i].length < 1) {
      element[i] = "N/A";
    } else if (typeof element[i] === "string") {
      element[i] = capitalizeFirstLetter(element[i]);
    }
  }
  return (
    <div className="info">
      <h1>{element.name}-{parseInt(element.atomicMass).toFixed(0)}</h1>
      <div className="info-box">
        <div className="info-slot">
          <p className="info-title">Atomic Mass</p>
          <p>{element.atomicMass}</p>
        </div>
        <div className="info-slot">
          <p className="info-title">Atomic Number</p>
          <p>{element.atomicNumber}</p>
        </div>
        <div className="info-slot">
          <p className="info-title">Atomic Radius</p>
          <p>{element.atomicRadius}</p>
        </div>
        <div className="info-slot">
          <p className="info-title">Melting Point</p>
          <p>{element.meltingPoint}</p>
        </div>
        <div className="info-slot">
          <p className="info-title">Boiling Point</p>
          <p>{element.boilingPoint}</p>
        </div>
        <div className="info-slot">
          <p className="info-title">Bonding Type</p>
          <p>{element.bondingType}</p>
        </div>
        <div className="info-slot">
          <p className="info-title">CPK Hex Color</p>
          <p>{element.cpkHexColor}</p>
        </div>
        <div className="info-slot">
          <p className="info-title">Density</p>
          <p>{element.density}</p>
        </div>
        <div className="info-slot">
          <p className="info-title">Electron Affinity</p>
          <p>{element.electronAffinity}</p>
        </div>
        <div className="info-slot">
          <p className="info-title">Electronegativity</p>
          <p>{element.electronegativity}</p>
        </div>
        <div className="info-slot">
          <p className="info-title">Configuration</p>
          <p>{element.electronicConfiguration}</p>
        </div>
        <div className="info-slot">
          <p className="info-title">Group Block</p>
          <p>{element.groupBlock}</p>
        </div>
        <div className="info-slot">
          <p className="info-title">Ionic Radius</p>
          <p>{element.ionRadius}</p>
        </div>
        <div className="info-slot">
          <p className="info-title">First Ionization Energy</p>
          <p>{element.ionizationEnergy}</p>
        </div>
        <div className="info-slot">
          <p className="info-title">Oxidation States</p>
          <p>{element.oxidationStates}</p>
        </div>
        <div className="info-slot">
          <p className="info-title">Year Discovered</p>
          <p>{element.yearDiscovered}</p>
        </div>
      </div>
    </div>
  );
};

export default ElementInfo;
