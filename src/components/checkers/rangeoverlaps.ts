/**
 * Check if 2 ranges overlap
 *
 * @param {number | Date} aStart
 * @param {number | Date} aEnd
 * @param {number | Date} bStart
 * @param {number | Date} bEnd
 * @return {boolean}
 */
export default (aStart :number | Date, aEnd :number | Date, bStart :number | Date, bEnd :number | Date ) :boolean => {
  // B starts in A
  if(aStart < bStart && bStart < aEnd)
    return true;
  // B ends in A
  if(aStart < bEnd && bEnd < aEnd)
    return true;
  // A in B
  if(bStart < aStart && aEnd < bEnd)
    return true;
  // no intersection
  return false;
}
