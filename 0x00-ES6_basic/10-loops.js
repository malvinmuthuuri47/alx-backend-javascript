export default function appendToEachArrayValue(array, appendString) {
  for (const idx of array) {
    const newVal = appendString + idx;
    array[array.indexOf(idx)] = newVal;
  }

  return array;
}
