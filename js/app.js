'use strict';

const price = [200, 550, 4000, 23, 58, 5000, 485, 711];
let sum = 0;
for (const value of price) {
  sum += value;
}
const bonus = sum > 10000 ? (sum * 5 / 100) : 0;
ceilBonus = Math.round(bonus);
console.log(ceilBonus);
