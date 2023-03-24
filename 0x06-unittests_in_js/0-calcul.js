module.exports = function calculateNumber(a, b) {
  const A = Number(a);
  const B = Number(b);

  if (Number.isNaN(A) || Number.isNaN(B))
  throw TypeError;

  return (Math.round(A) + Math.round(B));
}
