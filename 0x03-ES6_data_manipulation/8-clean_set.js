export default function cleanSet(set, startString) {
  if (startString === undefined || startString.length === 0) {
    return '';
  }
  if (!set || !Array.isArray(set)) {
    return '';
  }

  const matchvals = Array.from(set).filter((value) => value.startsWith(startString));
  const finalset = matchvals.map((value) => value.substring(startString.length));
  return finalset.join('-');
}
