function minimumSwaps(ratings) {
  var reversed = ratings.slice().sort((a, b) => b - a),
    count = 0,
    i = ratings.length,
    p;

  while (i--) {
    if (ratings[i] === reversed[i]) continue;
    p = ratings.indexOf(reversed[i]);
    [ratings[i], ratings[p]] = [ratings[p], ratings[i]];
    count++;
  }

  return count;
}
