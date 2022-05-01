// TODO fix typescript error
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import type { calculationsMap } from "/src/interfaces";

/**
 * Transform milliseconds in minutes/hours/days/etc
 * Return object with numerous variantions, to recombine later as one want
 *
 * @param {number} time
 * @return {Object}
 */
export default (time = 0) :Record<string,number> => {
  // millisecondsOnly = is the same
  // secondsOnly = same but /1000
  const calculations :calculationsMap = {
    years: 31536000000,
    months: 2592000000,
    weeks: 604800000,
    days: 86400000,
    hours: 3600000,
    minutes: 60000,
    seconds: 1000,
    milliseconds: 1
  }

  const timeObject :Record<string,number> = {};
  let timeDepletion = time;

  // TODO better typescript / cycle
  Object.keys(calculations).forEach((key) => {
    timeObject[key + 'Only'] = Math.floor(time / calculations[key as keyof calculationsMap]);
    timeObject[key] = Math.floor(timeDepletion / calculations[key as keyof calculationsMap]);
    timeDepletion -= timeObject[key]! * calculations[key as keyof calculationsMap];
  });

  return timeObject;
};
