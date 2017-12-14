var chocolateBars = () => {
  return ['snickers', 'hundred grand', 'kitkat', 'skittles']
}

var addElementToBeginningOfArray = (array, element) => {return [array, ...element]}

var descructivelyAddElementToBeginningOfArray = (array, element) => {
  array.unshift(element);
  return array;
}