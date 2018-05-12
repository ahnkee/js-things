module.exports = function* (n) {
  const isInifite = n === undefined;

    let current = 0;
    let next = 1;

    while (isInifite || n--) {
      yield current;
      [current, next] = [next, current + next];
    }
};
