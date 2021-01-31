const isOpposed = (prev, curr) => {
  if (
    (prev === 'NORTH' && curr === 'SOUTH') ||
    (prev === 'EAST' && curr === 'WEST')
  ) {
    return true;
  }
  if (
    (prev === 'SOUTH' && curr === 'NORTH') ||
    (prev === 'WEST' && curr === 'EAST')
  ) {
    return true;
  }
  return false;
};

function dirReduc(arr) {
  const validDirections = [];
  arr.forEach((direction) => {
    if (isOpposed(validDirections[validDirections.length - 1], direction)) {
      validDirections.pop();
    } else {
      validDirections.push(direction);
    }
  });
  return validDirections;
}

console.log(
  dirReduc(['NORTH', 'SOUTH', 'SOUTH', 'EAST', 'WEST', 'NORTH', 'WEST']),
  ['WEST']
);
console.log(dirReduc(['NORTH', 'WEST', 'SOUTH', 'EAST']), [
  'NORTH',
  'WEST',
  'SOUTH',
  'EAST',
]);
console.log(dirReduc(['NORTH', 'SOUTH', 'EAST', 'WEST', 'EAST', 'WEST']), []);
