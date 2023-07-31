export default function cleanSet(set, startString) {
  if (startString.length === 0 || startString === undefined) {
    return '';
  }

  const matchvals = Array.from(set).filter((value) => value.startsWith(startString));
  const finalset = matchvals.map((value) => value.substring(startString.length));
  return finalset.join('-');
}
