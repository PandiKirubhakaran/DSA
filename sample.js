let arr = [1, 2, 2, 1, 3, 3, 3, 4, 4];
let countMap = new Map();

arr.forEach(num => {
  if (countMap.has(num)) {
    countMap.set(num, countMap.get(num) + 1);
  } else {
    countMap.set(num, 1);
  }
});

countMap.forEach((value, key) => {
  console.log(`${key}: ${value}`);
});
