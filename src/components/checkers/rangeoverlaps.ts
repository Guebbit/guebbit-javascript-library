/**
 * Check if 2 ranges overlap
 *
 * @param {number} aStart
 * @param {number} aEnd
 * @param {number} bStart
 * @param {number} bEnd
 * @return {boolean}
 */
export default (aStart :number, aEnd :number, bStart :number, bEnd :number ) :boolean => {
  // B starts in A
  if(aStart <= bStart && bStart <= aEnd)
    return true;
  // B ends in A
  if(aStart <= bEnd && bEnd <= aEnd)
    return true;
  // A in B
  if(bStart < aStart && aEnd < bEnd)
    return true;
  // no intersection
  return false;
}
