import type { secondsToTimeMap } from "../../interfaces";

/**
 * Transform milliseconds in minutes/hours/days/etc
 * Return object with numerous variantions, to recombine later as one want
 *
 * @param {number} time
 * @return {Object}
 */
export default (time = 0) :secondsToTimeMap => {
  // millisecondsOnly = is the same
  // secondsOnly = same but /1000
  const timeFactory :Record<string,number> = {
    years: 31536000000,
    months: 2592000000,
    weeks: 604800000,
    days: 86400000,
    hours: 3600000,
    minutes: 60000,
    seconds: 1000,
    milliseconds: 1
  }
  let timeDepletion = time;
  const timeObject :secondsToTimeMap = {};
  // loop
  for(const key in timeFactory)
    if(key && Object.prototype.hasOwnProperty.call(timeFactory, key) && timeFactory[key]){
      timeObject[key + 'Only' as keyof secondsToTimeMap] = Math.floor(time / timeFactory[key]!);
      timeObject[key as keyof secondsToTimeMap] = Math.floor(timeDepletion / timeFactory[key]!);
      timeDepletion -= timeObject[key as keyof secondsToTimeMap]! * timeFactory[key as keyof secondsToTimeMap]!;
    }
  // final object
  return timeObject;
};
