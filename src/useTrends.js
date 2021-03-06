// set of functions to visualise different trends on the periodic table
// key:
// (1) take the trend percentage, by generating a value for each of the element's
//     trends divided by the maximimum value in an element of that certain trend
// (2) change each individual elements background color accordingly to its calculated
//      percentage. This is done in different ways for different trends to show different
//      color patterns using the rgb(r, g, b) color pallette

const hideDataElements = () => {
  // Hides preview, key, and switch button since they are irrellevant when showing trends
  document.querySelector(".preview").style.opacity = "0%";
  document.querySelector(".key").style.opacity = "0%";
  document.querySelector(".fa-exchange-alt").style.opacity = "0%";
};

export const showDensity = (elementsArray, elementList) => {
  for (let i of elementList) {
    i.style.backgroundColor = "lightgray";
    i.style.opacity = "85%";
    // (1)
    let elementDensityPercentage =
      elementsArray[i.firstElementChild.children[2].textContent].density / 26.5;
    // (2)
    if (elementsArray[i.firstElementChild.children[2].textContent].density) {
      i.style.backgroundColor = `rgb(0, ${
        300 - 255 * elementDensityPercentage
      }, 255)`;
    }
  }
  hideDataElements();
};

export const showRadius = (elementsArray, elementList) => {
  for (let i of elementList) {
    i.style.opacity = "85%";
    i.style.backgroundColor = "lightgray";
    // (1)
    let elementRadiusPercentage =
      elementsArray[i.firstElementChild.children[2].textContent].atomicRadius /
      225;
    // (2)
    if (
      elementsArray[i.firstElementChild.children[2].textContent].atomicRadius
    ) {
      i.style.backgroundColor = `rgb(127, 255, ${
        elementRadiusPercentage * 255
      })`;
    }
  }

  hideDataElements();
};

export const showElectronegativity = (elementsArray, elementList) => {
  for (let i of elementList) {
    i.style.backgroundColor = "lightgray";
    i.style.opacity = "85%";
    // (1)
    let elementNegativityPercentage =
      elementsArray[i.firstElementChild.children[2].textContent]
        .electronegativity / 4;
    // (2)
    if (
      elementsArray[i.firstElementChild.children[2].textContent]
        .electronegativity
    ) {
      i.style.backgroundColor = `rgb(255, ${
        255 - elementNegativityPercentage * 255
      }, ${elementNegativityPercentage * 255})`;
    }
  }

  hideDataElements();
};

export const showMP = (elementsArray, elementList) => {
  for (let i of elementList) {
    i.style.opacity = "85%";
    i.style.backgroundColor = "lightgray";
    // (1)
    let elementMeltingPointPercentage =
      elementsArray[i.firstElementChild.children[2].textContent].meltingPoint /
      3550;
    // (2)
    if (
      elementsArray[i.firstElementChild.children[2].textContent].meltingPoint
    ) {
      i.style.backgroundColor = `rgb(255, ${
        255 - elementMeltingPointPercentage * 255
      }, 0)`;
    }
  }

  hideDataElements();
};

export const showBP = (elementsArray, elementList) => {
  for (let i of elementList) {
    i.style.backgroundColor = "lightgray";
    i.style.opacity = "85%";
    // (1)
    let elementBoilingPointPercentage =
      elementsArray[i.firstElementChild.children[2].textContent].boilingPoint /
      5555;
    // (2)
    if (
      elementsArray[i.firstElementChild.children[2].textContent].boilingPoint
    ) {
      i.style.backgroundColor = `rgb(255, ${
        255 - elementBoilingPointPercentage * 255
      }, 0)`;
    }
  }

  hideDataElements();
};

export const showFirstIE = (elementsArray, elementList) => {
  for (let i of elementList) {
    i.style.backgroundColor = "lightgray";
    i.style.opacity = "85%";

    // (1)
    let elementEnergyPercentage =
      elementsArray[i.firstElementChild.children[2].textContent]
        .ionizationEnergy / 1312;
    // (2)
    if (
      elementsArray[i.firstElementChild.children[2].textContent]
        .ionizationEnergy
    ) {
      i.style.backgroundColor = `rgb(125, ${
        255 - elementEnergyPercentage * 125
      }, ${elementEnergyPercentage * 255})`;
    }
  }

  hideDataElements();
};
