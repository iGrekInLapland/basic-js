const MODERN_ACTIVITY = 15
const HALF_LIFE_PERIOD = 5730

module.exports = function dateSample(x) {
  const num = parseFloat(x)
  const age = num >= 1 && num < 15 ? num : NaN
  if (!isNaN(age) && typeof x === "string") {
    return Math.ceil(Math.log(MODERN_ACTIVITY / age) * HALF_LIFE_PERIOD / 0.693)
  } else {
    return false
  }
}
