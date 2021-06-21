
export const showDensity = (elementsArray, elementList) => {
  for (let i of elementList) {
    let elementDensityPercentage = (elementsArray[i.firstElementChild.children[2].textContent].density / 26.5);
    i.style.backgroundColor = `rgb(255, ${255 - (elementDensityPercentage) * 255}, ${elementDensityPercentage * 255})`
    if (elementDensityPercentage === 0) {
      i.style.backgroundColor = 'lightgray'
    }
    i.style.opacity = '85%'
  }

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
    let elementRadiusPercentage = (elementsArray[i.firstElementChild.children[2].textContent].atomicRadius / 225);
    i.style.backgroundColor = `rgb(125, ${125 - (elementRadiusPercentage/2) * 255}, 125)`
    if (elementRadiusPercentage === 0) {
      i.style.backgroundColor = 'lightgray'
    }
    i.style.opacity = '85%'
  }
  
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
    let elementNegativityPercentage = (elementsArray[i.firstElementChild.children[2].textContent].electronegativity / 4);
    i.style.backgroundColor = `rgb(255, ${255 - (elementNegativityPercentage) * 255}, ${elementNegativityPercentage * 255})`
    if (elementNegativityPercentage === 0) {
      i.style.backgroundColor = 'lightgray'
    }
    i.style.opacity = '85%'
  }
  
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
    let elementMeltingPointPercentage = (elementsArray[i.firstElementChild.children[2].textContent].meltingPoint / 3550);
    i.style.backgroundColor = `rgb(255, ${255 - (elementMeltingPointPercentage) * 255}, ${elementMeltingPointPercentage/2 * 100})`
    if (elementMeltingPointPercentage === 0) {
      i.style.backgroundColor = 'lightgray'
    }
    i.style.opacity = '85%'
  }
  
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
    let elementBoilingPointPercentage = (elementsArray[i.firstElementChild.children[2].textContent].boilingPoint / 5555 );
    i.style.backgroundColor = `rgb(255, ${255 - (elementBoilingPointPercentage) * 255}, ${elementBoilingPointPercentage/2 * 100})`
    if (elementBoilingPointPercentage === 0) {
      i.style.backgroundColor = 'lightgray'
    }
    i.style.opacity = '85%'
  }
  
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
    let elementEnergyPercentage = (elementsArray[i.firstElementChild.children[2].textContent].ionizationEnergy / 1312)
    i.style.backgroundColor = `rgb(125, ${255 - (elementEnergyPercentage) * 125}, ${elementEnergyPercentage * 255})`
    if (elementEnergyPercentage === 0) {
      i.style.backgroundColor = 'lightgray'
    }
    i.style.opacity = '85%'
  }
  
  let label = document.querySelector('.trend-label');
  for (let i of label.children) {
    i.style.display = 'none'
  }
  label.style.display = 'flex'
  label.children[5].style.display = 'flex'
  label.children[5].children[0].style.backgroundColor = `rgb(125, 255, 0)`
  label.children[5].children[1].style.backgroundColor = `rgb(125, 130, 255)`
}