export default function cleanSet(set, startString) {
  if (!startString || startString.length === 0) {
    return '';
  }

  // the set of arrays
  const arrayFromSet = Array.from(set);

  const filteredAndModifiedValues = arrayFromSet
    .filter((value) => value !== undefined && value.startsWith(startString))
    .map((value) => value.slice(startString.length));

  const resultString = filteredAndModifiedValues.join('-');

  return resultString;
}
