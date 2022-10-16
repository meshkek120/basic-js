const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(sampleActivity) {
  //let isNum = /^\d+$/.test(sampleActivity)
  let isNum = /^[0-9.,]+$/.test(sampleActivity)
  if (isNum && typeof sampleActivity === 'string' && parseFloat(sampleActivity) > 0 && parseFloat(sampleActivity) < MODERN_ACTIVITY) {
  let n_DividedBy_N0 = MODERN_ACTIVITY/parseFloat(sampleActivity)
  let k = 0.693/HALF_LIFE_PERIOD
  let t = Math.ceil(Math.log(n_DividedBy_N0)/k)
  return t
  } else {
  return false
  }
}

module.exports = {
  dateSample
};
