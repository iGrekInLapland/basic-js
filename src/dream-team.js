module.exports = function createDreamTeam(mem) {
  if (mem === null || !mem || mem[0] === undefined) {
    return false;
  }

  return mem.filter(item => {
    if (typeof(item) === "string") {
      return item;
    }
  }).map(item => {
    return item.trim()[0].toUpperCase();
  }).sort().join('');
};
