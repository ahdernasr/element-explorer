// set of functions to visualise different trends on the periodic table
// key:
// (1) take the trend percentage, by generating a value for each of the element's
//     trends divided by the maximimum value in an element of that certain trend
// (2) change each individual elements background color accordingly to its calculated
//      percentage. This is done in different ways for different trends to show different
//      color patterns using the rgb(r, g, b) color pallette
// (3) if the trend is undefined or it is equal to 0, the color light gray is used
// (4) style the key according to the color trend


export const showDensity = (elementsArray, elementList) => {
  for (let i of elementList) {
    // (1)
    let elementDensityPercentage = (elementsArray[i.firstElementChild.children[2].textContent].density / 26.5);
    // (2)
    i.style.backgroundColor = `rgb(255, ${255 - (elementDensityPercentage) * 255}, ${elementDensityPercentage * 255})`
    // (3)
    if (elementDensityPercentage === 0) {
      i.style.backgroundColor = 'lightgray'
    }
    i.style.opacity = '85%'
  }

  // (4)
  let label = document.querySelector('.trend-label');
  for (let i of label.children) {
    i.style.display = 'none'
  }
  label.style.display = 'flex'
  label.children[0].style.display = 'flex'
  label.children[0].children[0].style.backgroundColor = `rgb(255, 255, 0)`
  label.children[0].children[1].style.backgroundColor = `rgb(255, 0, 255)`
}

export const showRadius = (elementsArray, elementList) => {
  for (let i of elementList) {
    // (1)
    let elementRadiusPercentage = (elementsArray[i.firstElementChild.children[2].textContent].atomicRadius / 225);
    // (2)
    i.style.backgroundColor = `rgb(125, ${125 - (elementRadiusPercentage/2) * 255}, 125)`
    // (3)
    if (elementRadiusPercentage === 0) {
      i.style.backgroundColor = 'lightgray'
    }
    i.style.opacity = '85%'
  }
  
  // (4)
  let label = document.querySelector('.trend-label');
  for (let i of label.children) {
    i.style.display = 'none'
  }
  label.style.display = 'flex'
  label.children[1].style.display = 'flex'
  label.children[1].children[0].style.backgroundColor = `rgb(125, 125, 125)`
  label.children[1].children[1].style.backgroundColor = `rgb(125, 0, 125)`
}

export const showElectronegativity = (elementsArray, elementList) => {
  for (let i of elementList) {
    // (1)
    let elementNegativityPercentage = (elementsArray[i.firstElementChild.children[2].textContent].electronegativity / 4);
    // (2)
    i.style.backgroundColor = `rgb(255, ${255 - (elementNegativityPercentage) * 255}, ${elementNegativityPercentage * 255})`
    // (3)
    if (elementNegativityPercentage === 0) {
      i.style.backgroundColor = 'lightgray'
    }
    i.style.opacity = '85%'
  }
  
  // (4)
  let label = document.querySelector('.trend-label');
  for (let i of label.children) {
    i.style.display = 'none'
  }
  label.style.display = 'flex'
  label.children[2].style.display = 'flex'
  label.children[2].children[0].style.backgroundColor = `rgb(255, 255, 0)`
  label.children[2].children[1].style.backgroundColor = `rgb(255, 0, 255)`
}

export const showMP = (elementsArray, elementList) => {
  for (let i of elementList) {
    // (1)
    let elementMeltingPointPercentage = (elementsArray[i.firstElementChild.children[2].textContent].meltingPoint / 3550);
    // (2)
    i.style.backgroundColor = `rgb(255, ${255 - (elementMeltingPointPercentage) * 255}, ${elementMeltingPointPercentage/2 * 100})`
    // (3)
    if (elementMeltingPointPercentage === 0) {
      i.style.backgroundColor = 'lightgray'
    }
    i.style.opacity = '85%'
  }
  
  // (4)
  let label = document.querySelector('.trend-label');
  for (let i of label.children) {
    i.style.display = 'none'
  }
  label.style.display = 'flex'
  label.children[3].style.display = 'flex'
  label.children[3].children[0].style.backgroundColor = `rgb(255, 255, 0)`
  label.children[3].children[1].style.backgroundColor = `rgb(255, 0, 50)`
}

export const showBP = (elementsArray, elementList) => {
  for (let i of elementList) {
    // (1)
    let elementBoilingPointPercentage = (elementsArray[i.firstElementChild.children[2].textContent].boilingPoint / 5555 );
    // (2)
    i.style.backgroundColor = `rgb(255, ${255 - (elementBoilingPointPercentage) * 255}, ${elementBoilingPointPercentage/2 * 100})`
    // (3)
    if (elementBoilingPointPercentage === 0) {
      i.style.backgroundColor = 'lightgray'
    }
    i.style.opacity = '85%'
  }
  
  // (4)
  let label = document.querySelector('.trend-label');
  for (let i of label.children) {
    i.style.display = 'none'
  }
  label.style.display = 'flex'
  label.children[4].style.display = 'flex'
  label.children[4].children[0].style.backgroundColor = `rgb(255, 255, 0)`
  label.children[4].children[1].style.backgroundColor = `rgb(255, 0, 50)`
}

export const showFirstIE = (elementsArray, elementList) => {
  for (let i of elementList) {
    // (1)
    let elementEnergyPercentage = (elementsArray[i.firstElementChild.children[2].textContent].ionizationEnergy / 1312)
    // (2)
    i.style.backgroundColor = `rgb(125, ${255 - (elementEnergyPercentage) * 125}, ${elementEnergyPercentage * 255})`
    // (3)
    if (elementEnergyPercentage === 0) {
      i.style.backgroundColor = 'lightgray'
    }
    i.style.opacity = '85%'
  }
  
  // (4)
  let label = document.querySelector('.trend-label');
  for (let i of label.children) {
    i.style.display = 'none'
  }
  label.style.display = 'flex'
  label.children[5].style.display = 'flex'
  label.children[5].children[0].style.backgroundColor = `rgb(125, 255, 0)`
  label.children[5].children[1].style.backgroundColor = `rgb(125, 130, 255)`
}