const food = {
  map: {},

  render: () => {
    Object.entries(food.map).forEach(([x, yArray]) => {
      Object.keys(yArray).forEach((y) => {
        fill('gray');
        ellipse(x * blockSize + blockSize / 2, y * blockSize + blockSize / 2, 10, 10);
      })
    });
  },

  generatePiece: () => {
    const randomX = Math.round(Math.random() * rowsAndCols - 1);
    const randomY = Math.round(Math.random() * rowsAndCols - 1);
    food.map[randomX] = {
      ...food.map[randomX],
      [randomY]: 'normal',
    }
  },

  startGenerating: () => {
    setTimeout(() => {
      if (Math.random() > 0.5 && food.getFoodLength() < maxFoodAtOneTime) {
        food.generatePiece();
      }

      food.startGenerating();
    }, 1000)
  },

  getPiece: (x, y) => (food.map[x] || {})[y],

  deletePiece: (x, y) => {
    delete food.map[x][y];
  },

  getFoodLength: () => Object.values(food.map).reduce((totalSum, yArray) => {
    return totalSum += Object.keys(yArray).length;
  }, 0),
}