import { useEffect, useRef } from "react";
import useFetch from "./useFetch";

//sfc
const Table = () => {
  const { elementsArray } = useFetch();

  let key = true;

  let atomicNumber = useRef();
  let symbol = useRef();
  let elementName = useRef();
  let relativeAtomicMass = useRef();
  let standardState = useRef();
  let ionizationEnergy = useRef();
  let electronAffinity = useRef();
  let electronegativity = useRef();
  let ionicRadius = useRef();
  let discovered = useRef();
  let density = useRef();
  let atomicRadius = useRef();

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

  const updateKey = (currData) => {
    atomicRadius.current.innerHTML = currData.atomicRadius;
    ionizationEnergy.current.innerHTML = currData.ionizationEnergy;
    electronAffinity.current.innerHTML = currData.electronAffinity;
    electronegativity.current.innerHTML = currData.electronegativity;
    ionicRadius.current.innerHTML = currData.ionRadius;
    discovered.current.innerHTML = currData.yearDiscovered;
    density.current.innerHTML = currData.density;

    if (currData.atomicRadius === "") atomicRadius.current.innerHTML = "N/A";
    if (currData.ionizationEnergy === "")
      ionizationEnergy.current.innerHTML = "N/A";
    if (currData.electronAffinity === "")
      electronAffinity.current.innerHTML = "N/A";
    if (currData.electronegativity === "")
      electronegativity.current.innerHTML = "N/A";
    if (currData.ionRadius === "") ionicRadius.current.innerHTML = "N/A";
    if (currData.density === "") density.current.innerHTML = "N/A";
    if (currData.standardState === "") {
      standardState.current.innerHTML = "N/A";
    } else {
      standardState.current.innerHTML = capitalizeFirstLetter(
        currData.standardState
      );
    }
  };

  const updatePreview = (element) => {
    atomicNumber.current.innerHTML =
      element.firstElementChild.children[0].textContent;
    symbol.current.innerHTML =
      element.firstElementChild.children[1].textContent;
    elementName.current.innerHTML =
      element.firstElementChild.children[2].textContent;
    relativeAtomicMass.current.innerHTML =
      element.firstElementChild.children[3].textContent;
    atomicNumber.current.parentElement.parentElement.className = `preview ${element.className.split(' ')[element.className.split(' ' ).length - 1]}`
  };

  const hoverHandler = (event, element) => {
    if (
      element.firstElementChild.children &&
      !element.classList.contains("filler")
    ) {
      let currData =
        elementsArray[element.firstElementChild.children[2].textContent];

      updateKey(currData);
      updatePreview(element);
    }
  };

  useEffect(() => {
    for (let i of document.getElementsByClassName("table-element")) {
      i.addEventListener("mouseover", (e) => hoverHandler(e, i));
    }
  });
  return (
    <div className="periodic-table">
      {/* Labels for each group (1 to 18) */}
      <div className="period">
        <div className="filler period-label">
          <p>1</p>
        </div>
        <div className="filler period-label">
          <p>2</p>
        </div>
        <div className="filler period-label">
          <p>3</p>
        </div>
        <div className="filler period-label">
          <p>4</p>
        </div>
        <div className="filler period-label">
          <p>5</p>
        </div>
        <div className="filler period-label">
          <p>6</p>
        </div>
        <div className="filler period-label">
          <p>7</p>
        </div>
        <div className="filler period-label">
          <p>8</p>
        </div>
        <div className="filler period-label">
          <p>9</p>
        </div>
        <div className="filler period-label">
          <p>10</p>
        </div>
        <div className="filler period-label">
          <p>11</p>
        </div>
        <div className="filler period-label">
          <p>12</p>
        </div>
        <div className="filler period-label">
          <p>13</p>
        </div>
        <div className="filler period-label">
          <p>14</p>
        </div>
        <div className="filler period-label">
          <p>15</p>
        </div>
        <div className="filler period-label">
          <p>16</p>
        </div>
        <div className="filler period-label">
          <p>17</p>
        </div>
        <div className="filler period-label">
          <p>18</p>
        </div>
      </div>
      {/* Multiperiod holding certain elements, key, and preview */}
      <div className="multi-period">
        <div className="period-section-1">
          <div>
            <div className="period1 table-element non-metal">
              <div>
                <h3>1</h3>
                <h1>H</h1>
                <h3>Hydrogen</h3>
                <h3>1.008</h3>
              </div>
            </div>
            <div className="period2 table-element alkali">
              <div>
                <h3>3</h3>
                <h1>Li</h1>
                <h3>Lithium</h3>
                <h3>6.94</h3>
              </div>
            </div>
            <div className="period3 table-element alkali">
              <div>
                <h3>11</h3>
                <h1>Na</h1>
                <h3>Sodium</h3>
                <h3>22.99</h3>
              </div>
            </div>
          </div>
          <div>
            <div className="filler"></div>
            <div className="table-element alkaline">
              <div>
                <h3>4</h3>
                <h1>Be</h1>
                <h3>Beryllium</h3>
                <h3>9.01</h3>
              </div>
            </div>
            <div className="table-element alkaline">
              <div>
                <h3>12</h3>
                <h1>Mg</h1>
                <h3>Magnesium</h3>
                <h3>24.31</h3>
              </div>
            </div>
          </div>
        </div>
        <div className="period-section-2">
          <div className="preview">
            {" "}
            <div>
              <h3 ref={atomicNumber}>Atomic Number</h3>
              <h1 ref={symbol}>Symbol</h1>
              <h3 ref={elementName}>Element</h3>
              <h3 ref={relativeAtomicMass}>Relative Atomic Mass</h3>
            </div>
          </div>
        </div>
        <div className="period-section-3">
          <div className="key">
            <table>
              <tbody>
                <tr>
                  <th>Standard State</th>
                  <td ref={standardState}>Gas</td>
                </tr>
                <tr>
                  <th>Atomic Radius</th>
                  <td ref={atomicRadius}>37</td>
                </tr>
                <tr>
                  <th>Ionisation Energy</th>
                  <td ref={ionizationEnergy}>1312</td>
                </tr>
                <tr>
                  <th>Electron Affinity</th>
                  <td ref={electronAffinity}>-73</td>
                </tr>
              </tbody>
            </table>
            <table>
              <tbody>
                <tr>
                  <th>Electronegativity</th>
                  <td ref={electronegativity}>2.2</td>
                </tr>
                <tr>
                  <th>Ionic Radius</th>
                  <td ref={ionicRadius}>N/A</td>
                </tr>
                <tr>
                  <th>Discovered</th>
                  <td ref={discovered}>1766</td>
                </tr>
                <tr>
                  <th>Density</th>
                  <td ref={density}>0.0899</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="period-section-4">
          <div>
            <div className="filler fas fa-exchange-alt"></div>
            <div className="table-element metalloid">
              {" "}
              <div>
                <h3>5</h3>
                <h1>B</h1>
                <h3>Boron</h3>
                <h3>10.81</h3>
              </div>
            </div>
            <div className="table-element basic">
              {" "}
              <div>
                <h3>13</h3>
                <h1>Al</h1>
                <h3>Aluminum</h3>
                <h3>26.98</h3>
              </div>
            </div>
          </div>
          <div>
            <div className="filler"></div>
            <div className="table-element non-metal">
              {" "}
              <div>
                <h3>6</h3>
                <h1>C</h1>
                <h3>Carbon</h3>
                <h3>12.01</h3>
              </div>
            </div>
            <div className="table-element metalloid">
              {" "}
              <div>
                <h3>14</h3>
                <h1>Si</h1>
                <h3>Silicon</h3>
                <h3>28.09</h3>
              </div>
            </div>
          </div>
          <div>
            <div className="filler"></div>
            <div className="table-element non-metal">
              {" "}
              <div>
                <h3>7</h3>
                <h1>N</h1>
                <h3>Nitrogen</h3>
                <h3>14.01</h3>
              </div>
            </div>
            <div className="table-element non-metal">
              {" "}
              <div>
                <h3>15</h3>
                <h1>P</h1>
                <h3>Phosphorus</h3>
                <h3>30.97</h3>
              </div>
            </div>
          </div>
          <div>
            <div className="filler"></div>
            <div className="table-element non-metal">
              {" "}
              <div>
                <h3>8</h3>
                <h1>O</h1>
                <h3>Oxygen</h3>
                <h3>16.00</h3>
              </div>
            </div>
            <div className="table-element non-metal">
              {" "}
              <div>
                <h3>16</h3>
                <h1>S</h1>
                <h3>Sulfur</h3>
                <h3>32.06</h3>
              </div>
            </div>
          </div>
          <div>
            <div className="filler"></div>
            <div className="table-element halogen">
              {" "}
              <div>
                <h3>9</h3>
                <h1>F</h1>
                <h3>Fluorine</h3>
                <h3>19.00</h3>
              </div>
            </div>
            <div className="table-element halogen">
              {" "}
              <div>
                <h3>17</h3>
                <h1>Sc</h1>
                <h3>Chlorine</h3>
                <h3>35.45</h3>
              </div>
            </div>
          </div>
          <div>
            <div className="table-element noble">
              {" "}
              <div>
                <h3>2</h3>
                <h1>He</h1>
                <h3>Helium</h3>
                <h3>4.00</h3>
              </div>
            </div>
            <div className="table-element noble">
              {" "}
              <div>
                <h3>10</h3>
                <h1>Ne</h1>
                <h3>Neon</h3>
                <h3>20.18</h3>
              </div>
            </div>
            <div className="table-element noble">
              {" "}
              <div>
                <h3>18</h3>
                <h1>Ar</h1>
                <h3>Argon</h3>
                <h3>39.95</h3>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="period">
        <div className="period4 table-element alkali">
          <div>
            <h3>19</h3>
            <h1>K</h1>
            <h3>Potassium</h3>
            <h3>39.098</h3>
          </div>
        </div>
        <div className="table-element alkaline">
          {" "}
          <div>
            <h3>20</h3>
            <h1>C</h1>
            <h3>Calcium</h3>
            <h3>40.078</h3>
          </div>
        </div>
        <div className="table-element transition">
          {" "}
          <div>
            <h3>21</h3>
            <h1>Sc</h1>
            <h3>Scandium</h3>
            <h3>44.96</h3>
          </div>
        </div>
        <div className="table-element transition">
          {" "}
          <div>
            <h3>22</h3>
            <h1>Ti</h1>
            <h3>Titanium</h3>
            <h3>47.87</h3>
          </div>
        </div>
        <div className="table-element transition">
          {" "}
          <div>
            <h3>23</h3>
            <h1>V</h1>
            <h3>Vanadium</h3>
            <h3>50.94</h3>
          </div>
        </div>
        <div className="table-element transition">
          {" "}
          <div>
            <h3>24</h3>
            <h1>Cr</h1>
            <h3>Chromium</h3>
            <h3>52.00</h3>
          </div>
        </div>
        <div className="table-element transition">
          {" "}
          <div>
            <h3>25</h3>
            <h1>Mn</h1>
            <h3>Manganese</h3>
            <h3>54.94</h3>
          </div>
        </div>
        <div className="table-element transition">
          {" "}
          <div>
            <h3>26</h3>
            <h1>Fe</h1>
            <h3>Iron</h3>
            <h3>55.85</h3>
          </div>
        </div>
        <div className="table-element transition">
          {" "}
          <div>
            <h3>27</h3>
            <h1>Co</h1>
            <h3>Cobalt</h3>
            <h3>58.93</h3>
          </div>
        </div>
        <div className="table-element transition">
          {" "}
          <div>
            <h3>28</h3>
            <h1>Ni</h1>
            <h3>Nickel</h3>
            <h3>58.69</h3>
          </div>
        </div>
        <div className="table-element transition">
          {" "}
          <div>
            <h3>29</h3>
            <h1>Cu</h1>
            <h3>Copper</h3>
            <h3>63.55</h3>
          </div>
        </div>
        <div className="table-element transition">
          {" "}
          <div>
            <h3>30</h3>
            <h1>Zn</h1>
            <h3>Zinc</h3>
            <h3>65.38</h3>
          </div>
        </div>
        <div className="table-element basic">
          {" "}
          <div>
            <h3>31</h3>
            <h1>Ga</h1>
            <h3>Gallium</h3>
            <h3>69.723</h3>
          </div>
        </div>
        <div className="table-element metalloid">
          {" "}
          <div>
            <h3>32</h3>
            <h1>Ge</h1>
            <h3>Germanium</h3>
            <h3>72.63</h3>
          </div>
        </div>
        <div className="table-element metalloid">
          {" "}
          <div>
            <h3>33</h3>
            <h1>As</h1>
            <h3>Arsenic</h3>
            <h3>74.92</h3>
          </div>
        </div>
        <div className="table-element non-metal">
          {" "}
          <div>
            <h3>34</h3>
            <h1>Se</h1>
            <h3>Selenium</h3>
            <h3>78.97</h3>
          </div>
        </div>
        <div className="table-element halogen">
          {" "}
          <div>
            <h3>35</h3>
            <h1>Br</h1>
            <h3>Bromine</h3>
            <h3>79.90</h3>
          </div>
        </div>
        <div className="table-element noble">
          {" "}
          <div>
            <h3>36</h3>
            <h1>Kr</h1>
            <h3>Krypton</h3>
            <h3>83.80</h3>
          </div>
        </div>
      </div>

      <div className="period">
        <div className="period5 table-element alkali">
          {" "}
          <div>
            <h3>37</h3>
            <h1>Rb</h1>
            <h3>Rubidium</h3>
            <h3>85.47</h3>
          </div>
        </div>
        <div className="table-element alkaline">
          {" "}
          <div>
            <h3>38</h3>
            <h1>Sr</h1>
            <h3>Strontium</h3>
            <h3>87.62</h3>
          </div>
        </div>
        <div className="table-element transition">
          {" "}
          <div>
            <h3>39</h3>
            <h1>Y</h1>
            <h3>Yttrium</h3>
            <h3>88.91</h3>
          </div>
        </div>
        <div className="table-element transition">
          {" "}
          <div>
            <h3>40</h3>
            <h1>Zr</h1>
            <h3>Zirconium</h3>
            <h3>91.22</h3>
          </div>
        </div>
        <div className="table-element transition">
          {" "}
          <div>
            <h3>41</h3>
            <h1>Nb</h1>
            <h3>Niobium</h3>
            <h3>92.91</h3>
          </div>
        </div>
        <div className="table-element transition">
          {" "}
          <div>
            <h3>42</h3>
            <h1>Mo</h1>
            <h3>Molybdenum</h3>
            <h3>95.95</h3>
          </div>
        </div>
        <div className="table-element transition">
          {" "}
          <div>
            <h3>43</h3>
            <h1>Tc</h1>
            <h3>Technetium</h3>
            <h3>(98)</h3>
          </div>
        </div>
        <div className="table-element transition">
          {" "}
          <div>
            <h3>44</h3>
            <h1>Ru</h1>
            <h3>Ruthenium</h3>
            <h3>101.07</h3>
          </div>
        </div>
        <div className="table-element transition">
          {" "}
          <div>
            <h3>45</h3>
            <h1>Rh</h1>
            <h3>Rhodium</h3>
            <h3>102.91</h3>
          </div>
        </div>
        <div className="table-element transition">
          {" "}
          <div>
            <h3>46</h3>
            <h1>Pd</h1>
            <h3>Palladium</h3>
            <h3>106.42</h3>
          </div>
        </div>
        <div className="table-element transition">
          {" "}
          <div>
            <h3>47</h3>
            <h1>Ag</h1>
            <h3>Silver</h3>
            <h3>107.87</h3>
          </div>
        </div>
        <div className="table-element transition">
          {" "}
          <div>
            <h3>48</h3>
            <h1>Cd</h1>
            <h3>Cadmium</h3>
            <h3>112.41</h3>
          </div>
        </div>
        <div className="table-element basic">
          {" "}
          <div>
            <h3>49</h3>
            <h1>In</h1>
            <h3>Indium</h3>
            <h3>114.82</h3>
          </div>
        </div>
        <div className="table-element basic">
          {" "}
          <div>
            <h3>50</h3>
            <h1>Sn</h1>
            <h3>Tin</h3>
            <h3>118.71</h3>
          </div>
        </div>
        <div className="table-element metalloid">
          {" "}
          <div>
            <h3>51</h3>
            <h1>Sb</h1>
            <h3>Antimony</h3>
            <h3>121.76</h3>
          </div>
        </div>
        <div className="table-element metalloid">
          {" "}
          <div>
            <h3>52</h3>
            <h1>Te</h1>
            <h3>Tellurium</h3>
            <h3>127.60</h3>
          </div>
        </div>
        <div className="table-element halogen">
          {" "}
          <div>
            <h3>53</h3>
            <h1>I</h1>
            <h3>Iodine</h3>
            <h3>126.90</h3>
          </div>
        </div>
        <div className="table-element noble">
          {" "}
          <div>
            <h3>54</h3>
            <h1>Xe</h1>
            <h3>Xenon</h3>
            <h3>131.29</h3>
          </div>
        </div>
      </div>

      <div className="period">
        <div className="period6 table-element alkali">
          {" "}
          <div>
            <h3>55</h3>
            <h1>Cs</h1>
            <h3>Cesium</h3>
            <h3>132.91</h3>
          </div>
        </div>
        <div className="table-element alkaline">
          {" "}
          <div>
            <h3>56</h3>
            <h1>Ba</h1>
            <h3>Barium</h3>
            <h3>137.33</h3>
          </div>
        </div>
        <div className="filler lan-act">
          <p>57 - 71</p>
        </div>
        <div className="table-element transition">
          {" "}
          <div>
            <h3>72</h3>
            <h1>Hf</h1>
            <h3>Hafnium</h3>
            <h3>178.49</h3>
          </div>
        </div>
        <div className="table-element transition">
          {" "}
          <div>
            <h3>73</h3>
            <h1>Ta</h1>
            <h3>Tantalum</h3>
            <h3>180.95</h3>
          </div>
        </div>
        <div className="table-element transition">
          {" "}
          <div>
            <h3>74</h3>
            <h1>W</h1>
            <h3>Tungsten</h3>
            <h3>183.84</h3>
          </div>
        </div>
        <div className="table-element transition">
          {" "}
          <div>
            <h3>75</h3>
            <h1>Re</h1>
            <h3>Rhenium</h3>
            <h3>186.21</h3>
          </div>
        </div>
        <div className="table-element transition">
          {" "}
          <div>
            <h3>76</h3>
            <h1>Os</h1>
            <h3>Osmium</h3>
            <h3>190.23</h3>
          </div>
        </div>
        <div className="table-element transition">
          {" "}
          <div>
            <h3>77</h3>
            <h1>Ir</h1>
            <h3>Iridium</h3>
            <h3>192.22</h3>
          </div>
        </div>
        <div className="table-element transition">
          {" "}
          <div>
            <h3>78</h3>
            <h1>Pt</h1>
            <h3>Platinum</h3>
            <h3>195.08</h3>
          </div>
        </div>
        <div className="table-element transition">
          {" "}
          <div>
            <h3>79</h3>
            <h1>Au</h1>
            <h3>Gold</h3>
            <h3>196.97</h3>
          </div>
        </div>
        <div className="table-element transition">
          {" "}
          <div>
            <h3>80</h3>
            <h1>Hg</h1>
            <h3>Mercury</h3>
            <h3>200.59</h3>
          </div>
        </div>
        <div className="table-element basic">
          {" "}
          <div>
            <h3>81</h3>
            <h1>Ti</h1>
            <h3>Thallium</h3>
            <h3>204.38</h3>
          </div>
        </div>
        <div className="table-element basic">
          {" "}
          <div>
            <h3>82</h3>
            <h1>Pb</h1>
            <h3>Lead</h3>
            <h3>207.2</h3>
          </div>
        </div>
        <div className="table-element basic">
          {" "}
          <div>
            <h3>83</h3>
            <h1>Bi</h1>
            <h3>Bismuth</h3>
            <h3>208.98</h3>
          </div>
        </div>
        <div className="table-element metalloid">
          {" "}
          <div>
            <h3>84</h3>
            <h1>Po</h1>
            <h3>Polonium</h3>
            <h3>(209)</h3>
          </div>
        </div>
        <div className="table-element halogen">
          {" "}
          <div>
            <h3>85</h3>
            <h1>At</h1>
            <h3>Astatine</h3>
            <h3>(210)</h3>
          </div>
        </div>
        <div className="table-element noble">
          {" "}
          <div>
            <h3>86</h3>
            <h1>Rn</h1>
            <h3>Radon</h3>
            <h3>(222)</h3>
          </div>
        </div>
      </div>

      <div className="period">
        <div className="period7 table-element alkali">
          {" "}
          <div>
            <h3>87</h3>
            <h1>Fr</h1>
            <h3>Francium</h3>
            <h3>(223)</h3>
          </div>
        </div>
        <div className="table-element alkaline">
          {" "}
          <div>
            <h3>88</h3>
            <h1>Ra</h1>
            <h3>Radium</h3>
            <h3>(226)</h3>
          </div>
        </div>
        <div className="filler lan-act">
          <p>89 - 103</p>
        </div>
        <div className="table-element transition">
          {" "}
          <div>
            <h3>104</h3>
            <h1>Rf</h1>
            <h3>Rutherfordium</h3>
            <h3>(267)</h3>
          </div>
        </div>
        <div className="table-element transition">
          {" "}
          <div>
            <h3>105</h3>
            <h1>Db</h1>
            <h3>Dubnium</h3>
            <h3>(268)</h3>
          </div>
        </div>
        <div className="table-element transition">
          {" "}
          <div>
            <h3>106</h3>
            <h1>Sg</h1>
            <h3>Seaborgium</h3>
            <h3>(269)</h3>
          </div>
        </div>
        <div className="table-element transition">
          {" "}
          <div>
            <h3>107</h3>
            <h1>Bh</h1>
            <h3>Bohrium</h3>
            <h3>(270)</h3>
          </div>
        </div>
        <div className="table-element transition">
          {" "}
          <div>
            <h3>108</h3>
            <h1>Hs</h1>
            <h3>Hassium</h3>
            <h3>(277)</h3>
          </div>
        </div>
        <div className="table-element transition">
          {" "}
          <div>
            <h3>109</h3>
            <h1>Mt</h1>
            <h3>Meitnerium</h3>
            <h3>(278)</h3>
          </div>
        </div>
        <div className="table-element transition">
          {" "}
          <div>
            <h3>110</h3>
            <h1>Ds</h1>
            <h3>Darmstadtium</h3>
            <h3>(281)</h3>
          </div>
        </div>
        <div className="table-element transition">
          {" "}
          <div>
            <h3>111</h3>
            <h1>Rg</h1>
            <h3>Roentgenium</h3>
            <h3>(282)</h3>
          </div>
        </div>
        <div className="table-element transition">
          {" "}
          <div>
            <h3>112</h3>
            <h1>Cn</h1>
            <h3>Copernicium</h3>
            <h3>(285)</h3>
          </div>
        </div>
        <div className="table-element basic">
          {" "}
          <div>
            <h3>113</h3>
            <h1>Nh</h1>
            <h3>Nihonium</h3>
            <h3>(286)</h3>
          </div>
        </div>
        <div className="table-element basic">
          {" "}
          <div>
            <h3>114</h3>
            <h1>Fl</h1>
            <h3>Flerovium</h3>
            <h3>(289)</h3>
          </div>
        </div>
        <div className="table-element basic">
          {" "}
          <div>
            <h3>115</h3>
            <h1>Mc</h1>
            <h3>Moscovium</h3>
            <h3>(290)</h3>
          </div>
        </div>
        <div className="table-element basic">
          {" "}
          <div>
            <h3>116</h3>
            <h1>Lv</h1>
            <h3>Livermorium</h3>
            <h3>(293)</h3>
          </div>
        </div>
        <div className="table-element halogen">
          {" "}
          <div>
            <h3>117</h3>
            <h1>Ts</h1>
            <h3>Tennessine</h3>
            <h3>(294)</h3>
          </div>
        </div>
        <div className="table-element noble">
          {" "}
          <div>
            <h3>118</h3>
            <h1>Og</h1>
            <h3>Oganesson</h3>
            <h3>(294)</h3>
          </div>
        </div>
      </div>

      <div className="period">
        <div className="filler"></div>
        <div className="filler"></div>
        <div className="filler"></div>
        <div className="filler"></div>
        <div className="filler"></div>
        <div className="filler"></div>
        <div className="filler"></div>
        <div className="filler"></div>
        <div className="filler"></div>
        <div className="filler"></div>
        <div className="filler"></div>
        <div className="filler"></div>
        <div className="filler"></div>
        <div className="filler"></div>
        <div className="filler"></div>
        <div className="filler"></div>
        <div className="filler"></div>
        <div className="filler"></div>
      </div>

      <div className="period">
        <div className="filler"></div>
        <div className="filler"></div>
        <div className="filler"></div>
        <div className="table-element lanthanides">
          {" "}
          <div>
            <h3>57</h3>
            <h1>La</h1>
            <h3>Lanthanum</h3>
            <h3>138.91</h3>
          </div>
        </div>
        <div className="table-element lanthanides">
          {" "}
          <div>
            <h3>58</h3>
            <h1>Ce</h1>
            <h3>Cerium</h3>
            <h3>140.12</h3>
          </div>
        </div>
        <div className="table-element lanthanides">
          {" "}
          <div>
            <h3>59</h3>
            <h1>Pr</h1>
            <h3>Praseodymium</h3>
            <h3>140.91</h3>
          </div>
        </div>
        <div className="table-element lanthanides">
          {" "}
          <div>
            <h3>60</h3>
            <h1>Nd</h1>
            <h3>Neodymium</h3>
            <h3>144.24</h3>
          </div>
        </div>
        <div className="table-element lanthanides">
          {" "}
          <div>
            <h3>61</h3>
            <h1>Pm</h1>
            <h3>Promethium</h3>
            <h3>(145)</h3>
          </div>
        </div>
        <div className="table-element lanthanides">
          {" "}
          <div>
            <h3>62</h3>
            <h1>Sm</h1>
            <h3>Samarium</h3>
            <h3>150.36</h3>
          </div>
        </div>
        <div className="table-element lanthanides">
          {" "}
          <div>
            <h3>63</h3>
            <h1>Eu</h1>
            <h3>Europium</h3>
            <h3>151.96</h3>
          </div>
        </div>
        <div className="table-element lanthanides">
          {" "}
          <div>
            <h3>64</h3>
            <h1>Gd</h1>
            <h3>Gadolinium</h3>
            <h3>157.25</h3>
          </div>
        </div>
        <div className="table-element lanthanides">
          {" "}
          <div>
            <h3>65</h3>
            <h1>Tb</h1>
            <h3>Terbium</h3>
            <h3>158.93</h3>
          </div>
        </div>
        <div className="table-element lanthanides">
          {" "}
          <div>
            <h3>66</h3>
            <h1>Dy</h1>
            <h3>Dysprosium</h3>
            <h3>162.50</h3>
          </div>
        </div>
        <div className="table-element lanthanides">
          {" "}
          <div>
            <h3>67</h3>
            <h1>Ho</h1>
            <h3>Holmium</h3>
            <h3>164.93</h3>
          </div>
        </div>
        <div className="table-element lanthanides">
          {" "}
          <div>
            <h3>68</h3>
            <h1>Er</h1>
            <h3>Erbium</h3>
            <h3>167.26</h3>
          </div>
        </div>
        <div className="table-element lanthanides">
          {" "}
          <div>
            <h3>69</h3>
            <h1>Tm</h1>
            <h3>Thulium</h3>
            <h3>168.93</h3>
          </div>
        </div>
        <div className="table-element lanthanides">
          {" "}
          <div>
            <h3>70</h3>
            <h1>Yb</h1>
            <h3>Ytterbium</h3>
            <h3>173.05</h3>
          </div>
        </div>
        <div className="table-element lanthanides">
          {" "}
          <div>
            <h3>71</h3>
            <h1>Lu</h1>
            <h3>Lutetium</h3>
            <h3>174.97</h3>
          </div>
        </div>
      </div>

      <div className="period">
        <div className="filler"></div>
        <div className="filler"></div>
        <div className="filler"></div>
        <div className="table-element actinides">
          {" "}
          <div>
            <h3>89</h3>
            <h1>Ac</h1>
            <h3>Actinium</h3>
            <h3>(227)</h3>
          </div>
        </div>
        <div className="table-element actinides">
          {" "}
          <div>
            <h3>90</h3>
            <h1>Th</h1>
            <h3>Thorium</h3>
            <h3>232.04</h3>
          </div>
        </div>
        <div className="table-element actinides">
          {" "}
          <div>
            <h3>91</h3>
            <h1>Pa</h1>
            <h3>Protactinium</h3>
            <h3>231.04</h3>
          </div>
        </div>
        <div className="table-element actinides">
          {" "}
          <div>
            <h3>92</h3>
            <h1>U</h1>
            <h3>Uranium</h3>
            <h3>238.03</h3>
          </div>
        </div>
        <div className="table-element actinides">
          {" "}
          <div>
            <h3>93</h3>
            <h1>Np</h1>
            <h3>Neptunium</h3>
            <h3>(237)</h3>
          </div>
        </div>
        <div className="table-element actinides">
          {" "}
          <div>
            <h3>94</h3>
            <h1>Pu</h1>
            <h3>Plutonium</h3>
            <h3>(244)</h3>
          </div>
        </div>
        <div className="table-element actinides">
          {" "}
          <div>
            <h3>95</h3>
            <h1>Am</h1>
            <h3>Americium</h3>
            <h3>(243))</h3>
          </div>
        </div>
        <div className="table-element actinides">
          {" "}
          <div>
            <h3>96</h3>
            <h1>Cm</h1>
            <h3>Curium</h3>
            <h3>(247)</h3>
          </div>
        </div>
        <div className="table-element actinides">
          {" "}
          <div>
            <h3>97</h3>
            <h1>Bk</h1>
            <h3>Berkelium</h3>
            <h3>(247)</h3>
          </div>
        </div>
        <div className="table-element actinides">
          {" "}
          <div>
            <h3>98</h3>
            <h1>Cf</h1>
            <h3>Californium</h3>
            <h3>(251)</h3>
          </div>
        </div>
        <div className="table-element actinides">
          {" "}
          <div>
            <h3>99</h3>
            <h1>Es</h1>
            <h3>Einsteinium</h3>
            <h3>(252)</h3>
          </div>
        </div>
        <div className="table-element actinides">
          {" "}
          <div>
            <h3>100</h3>
            <h1>Fm</h1>
            <h3>Fermium</h3>
            <h3>(257)</h3>
          </div>
        </div>
        <div className="table-element actinides">
          {" "}
          <div>
            <h3>101</h3>
            <h1>Md</h1>
            <h3>Mendelevium</h3>
            <h3>(258)</h3>
          </div>
        </div>
        <div className="table-element actinides">
          {" "}
          <div>
            <h3>102</h3>
            <h1>No</h1>
            <h3>Nobelium</h3>
            <h3>(259)</h3>
          </div>
        </div>
        <div className="table-element actinides">
          {" "}
          <div>
            <h3>103</h3>
            <h1>Sc</h1>
            <h3>Scandium</h3>
            <h3>(266)</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Table;
