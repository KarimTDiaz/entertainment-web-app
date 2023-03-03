const fetchData = async url => {
  const response = await fetch(url);
  const data = await response.json();
  return data;
};
const createElement = (element, classes, typeContent, dataset) => {
  const newElement = document.createElement(element);
  newElement.classList.add(...classes);
  newElement.dataset.item = dataset;
  if (element !== 'img') {
    newElement.textContent = typeContent;
  } else {
    newElement.src = typeContent;
  }
  return newElement;
};

const fillElement = (element, textContent, src) => {
  element.textContent = textContent;
  element.src = src;
};
export { fetchData, createElement, fillElement };
