function countDown(n) {
  for (let i = n; i > 0; i--) {
    console.log(i);
  }
  console.log(`end of the loop`);
}

countDown(5);

function countDownRecursive(n) {
  if (n <= 0) {
    console.log(`end of the loop`);
    return;
  }
  console.log(n);
  countDownRecursive(n - 1);
}

countDownRecursive(5);

// countDownRecursive(5);
// countDownRecursive(4);
// countDownRecursive(3);
// countDownRecursive(2);
// countDownRecursive(1);
// countDownRecursive(0);
// return;
// return;
// return;
// return;
// return;
// return;
// //stack is clear

function sumRangeNumbers(n) {
  let total = 0;
  for (let i = 0; i > 0; i--) {
    total += i;
  }
  return total;
}

function sumRangeNumbersRecursive(n, total = 0) {
  if (n <= 0) {
    return total;
  }
  return sumRangeNumbersRecursive(n - 1, total + n);
}

// sumRangeNumbersRecursive(6, 0) // Paused
//    sumRangeNumbersRecursive(5, 6); // paused
//       sumRangeNumbersRecursive(4, 11); //paused
//          sumRangeNumbersRecursive(3, 15);  //paused
//              sumRangeNumbersRecursive(2, 18); //paused
//                 sumRangeNumbersRecursive(1, 20);
//                    sumRangeNumbersRecursive(0, 21);
//                        return
//                      return
//                   return
//               return
//             return
//         return
//     return

const tree = {
  name: "john",
  children: [
    {
      name: "Yehuda",
      children: [],
    },
    {
      name: "Mendel",
      children: [
        {
          name: "Sholom",
          children: [],
        },
        {
          name: "Yassi",
          children: [],
        },
      ],
    },
  ],
};
