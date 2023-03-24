module.exports = function calculateNumber(type, a, b) {
  const A = Number(a);
  const B = Number(b);

  if (Number.isNaN(A) || Number.isNaN(B))
  throw TypeError;

  if (type === "SUM") {
    return (Math.round(A) + Math.round(B));
  } else if (type === "SUBTRACT") {
    return (Math.round(A) - Math.round(B));
  } else if (type === "DIVIDE") {
    if (Math.round(B) === 0) {
      return ('Error');
    }
    return (Math.round(A) / Math.round(B));
  } else {
    throw TypeError;
  }
}
