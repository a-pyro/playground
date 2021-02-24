const prezzi = [2, 5, 3, 11, 1, 6];
const tags = ['legal', 'illegal', 'legal', 'illegal', 'legal', 'legal'];
const num = 4;

function maxCost(cost, labels, dailyCount) {
  const production = labels.map((_, idx) => ({
    costo: cost[idx],
    etichetta: labels[idx],
  }));

  let legalCounter = 0;
  let maxCost = 0;
  let passed = 0;
  // let i = 0

  for (let i = 0; i < production.length; i++) {
    const currentLabel = production[i].etichetta;
    if (currentLabel === 'legal') legalCounter++;
    if (legalCounter === dailyCount) {
      const dailyProduction = production.slice(i - legalCounter, i + 1);
      const dailyCost = dailyProduction.reduce((acc, cv) => acc + cv.costo, 0);
      if (dailyCost > maxCost) maxCost = dailyCost;
      legalCounter = 0;
    }
  }

  return maxCost;
}

console.log(maxCost(prezzi, tags, num));
