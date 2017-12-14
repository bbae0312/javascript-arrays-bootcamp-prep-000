var chocolateBars = () => {
  return ['snickers', 'hundred grand', 'kitkat', 'skittles']
}

var addElementToBeginningOfArray = (array, element) => {return [element, ...array]}

var descructivelyAddElementToBeginningOfArray = (array, element) => {
  array.unshift(element);
  return array;
}