// Given a 2D grid of size m x n and an integer k. You need to shift the grid k times.
// In one shift operation:

// Element at grid[i][j] moves to grid[i][j + 1].
// Element at grid[i][n - 1] moves to grid[i + 1][0].
// Element at grid[m - 1][n - 1] moves to grid[0][0].
// Return the 2D grid after applying shift operation k times.

const shiftGrid = (grid, k) => {
  // convert grid into flat array stored in new variable
  const flatGrid = grid.flat();
  console.log(flatGrid)
  // iterate through flat array
  while (k--) {
    // keep shifting flat array until it reaches k times
    flatGrid.unshift(flatGrid.pop())
  }
  console.log(flatGrid);
  // once we have new shifted array, we must convert and put it back in place as a grid
  // make new grid
  let newGrid = [];
  // iterate through  the length of original grid row
  let gridLength = grid[0].length
  while (gridLength--) {
    // add elements to that new grid (add len elements)
    newGrid.push(flatGrid.splice(0, grid.length))
  }
  return newGrid;
};
console.log(shiftGrid([[1,2,3],[4,5,6],[7,8,9]], 1))
console.log(shiftGrid([[3,8,1,9],[19,7,2,5],[4,6,11,10],[12,0,21,13]], 4))
console.log(shiftGrid([[1],[2],[3],[4],[7],[6],[5]], 23))
