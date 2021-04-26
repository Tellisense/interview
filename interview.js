// BINARY SEARCH :  finding a value in a sorted array
function binarySearch(list, value) {
  let start = 0;
  let stop = list.length - 1;
  let middle = Math.floor((start + stop) / 2);
  while (list[middle] !== value && start < stop) {
    if (value < list[middle]) {
      stop = middle - 1;
    } else {
      start = middle + 1;
    }
    middle = Math.floor((start + stop) / 2);
  }
  return list[middle] !== value ? -1 : middle;
}

//CHECK ANSWER FOR BINARY SEARCH
const list = [2, 5, 8, 9, 13, 45, 67, 99];
console.log(binarySearch(list, 99)); // 7 -> returns the index of the item

function findMatch(listA, listB) {
  var result = [];
  var temp;
  for (let i = 0; i < listB.length; i++) {
    temp = binarySearch(listA, listB[i]);
    if (temp !== -1) {
      result.push(temp);
    }
  }
  return result;
}

var l1 = [2, 5, 8, 9, 13, 45, 67, 99];
var l2 = [545, 77, 65, 4, 7, 2, 68, 67];
findMatch(l1, l2);

///// HASH TABLES

// find the recurring items in an array
const items = [
  "Harry",
  "Rick",
  "Ben",
  "Ben",
  "Harry",
  "Ashley",
  "Connor",
  "Rick",
  "Ashley",
  "Rick",
  "Albert",
  "Ben",
  "Michael",
  "Rick",
  "Albert",
  "Karen",
  "Harry",
  "Karen",
  "Donna",
  "Ashley",
  "Albert",
  "Harry",
  "Dane",
  "Dane",
  "Rick",
  "Donna",
  "Mortimer",
];
//using reduce
const hashTable = items =>
  items.reduce(
    (acc, item) => ({
      ...acc,
      [item]: !acc[item] ? 1 : acc[item] + 1,
    }),
    {}
  );

// using a plain old Object
const HashTable = items => {
  var obj = {};
  for (let i = 0; i < items.length; i++) {
    if (!obj[items[i]]) {
      obj[items[i]] = 1;
    } else {
      obj[items[i]]++;
    }
  }
  return obj;
};

//using new MAP Data structure

// SORTING: MERGE SORT
function mergeSort(arr) {
  if (arr.length === 1) {
    return arr;
  }
  const mid = Math.floor(arr.length / 2);
  const left = arr.splice(0, mid);
  const right = arr.slice(mid);
  return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
  const result = [];
  while (left.length && right.length) {
    if (left[0] < right[0]) {
      result.push(left.shift());
    } else {
      result.push(right.shift());
    }
  }
  return [...result, ...left, ...right];
}

// BUBBLE SORT
function bubbleSort(arr) {
  do {
    var swapped = false;
    arr.forEach((num, i) => {
      if (num > arr[i + 1]) {
        var temp = num;
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
        swapped = true;
      }
    });
  } while (swapped === true);
  return arr;
}

//QUICK SORT
function quickSort(arr, left, right) {
  var len = arr.length,
    pivot,
    partitionIndex;
  if (left < right) {
    pivot = right;
    partitionIndex = partition(arr, pivot, left, right);

    //sort left and right
    quickSort(arr, left, partitionIndex - 1);
    quickSort(arr, partitionIndex + 1, right);
  }
  return arr;
}

function partition(arr, pivot, left, right) {
  var pivotValue = arr[pivot],
    partitionIndex = left;

  for (var i = left; i < right; i++) {
    if (arr[i] < pivotValue) {
      swap(arr, i, partitionIndex);
      partitionIndex++;
    }
  }
  swap(arr, right, partitionIndex);
  return partitionIndex;
}

function swap(arr, i, j) {
  var temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

//FIBONACCI
//Most efficient while loop
function fibonacci(num) {
  var a = 1,
    b = 0,
    temp;

  while (num > 0) {
    temp = a;
    a = a + b;
    b = temp;
    num--;
  }

  return b;
}
fib(20); //6765

//(regular FOR LOOP)
function fib(n) {
  const result = [0, 1];
  for (let i = 2; i <= n; i++) {
    const a = result[i - 1];
    const b = result[i - 2];
    result.push(a + b);
  }
  return result[n];
}

// MEMOIZATION FORMULA
function memoize(fn) {
  const cache = {};
  return function (...args) {
    if (cache[args]) {
      return cache[args];
    }
    const result = fn.apply(this, args);
    cache[args] = result;
    return result;
  };
}

// RECURSIVE SOLUTION WITH MEMOIZATION
function slowFib(n) {
  if (n < 2) {
    return n;
  }
  return fib(n - 1) + fib(n - 2);
}

const fib = memoize(slowFib);

//sum of ordered set of numbers
var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function sum(arr) {
  let n = arr[arr.length - 1];
  return (n * (n + 1)) / 2;
}
sum(arr); // 55

// fizzBuzz

function fizzBuzz(n) {
  for (let i = 1; i <= n; i++) {
    var result = "";
    if (i % 3 === 0) {
      result += "fizz";
    }
    if (i % 5 === 0) {
      result += "Buzz";
    }
    if (result.length === 0) {
      result = i;
    }
    console.log(result);
  }
}

// add all of the numbers in a series

// find the average in a series

// find mimium

var stockArr = [
  {
    time: 10.0,
    price: 8,
  },
  {
    time: 11.0,
    price: 2,
  },
  {
    time: 12.0,
    price: 4,
  },
  {
    time: 13.0,
    price: 7,
  },
  {
    time: 17.0,
    price: 1,
  },
];

function BestTimeToBuy(arr) {
  var arrTime = [];
  var arrPrice = [];
  for (let obj of arr) {
    arrTime.push(obj.time);
    arrPrice.push(obj.price);
  }
  console.log("arrTime", arrTime);
  console.log("arrPrice", arrPrice);

  var max = Math.max(...arrPrice);
  console.log("max:", max);
  var min = Math.min(...arrPrice);
  console.log("min:", min);
  var minIndex = arrPrice.indexOf(min);
  console.log("minIndex:", minIndex);
  var maxIndex = arrPrice.indexOf(max);
  console.log("manIndex:", maxIndex);
  var bestTimeToBuy = arrTime[minIndex];
  var bestTimeToSell = arrTime[maxIndex];

  return `the best time to buy is ${bestTimeToBuy}, and the best time to sell is ${bestTimeToSell}`;
}

// given an array of socks, find out how many are matching pairs inside of the array.
var arr = [10, 20, 20, 10, 10, 30, 50, 10, 20];
function sockMerchant(n, ar) {
  let obj = {};
  let result = 0;

  for (let i = 0; i < ar.length; i++) {
    if (!obj[ar[i]]) {
      obj[ar[i]] = 1;
    } else {
      obj[ar[i]] += 1;
    }
  }

  for (let value in obj) {
    if (obj[value] >= 2) {
      result += Math.floor(obj[value] / 2);
    }
  }
  return result;
}
undefined;
sockMerchant(9, arr);
3;

//write a function, given an array of object, sort the array according to value inside the objects.

var people = [
  {
    id: 1,
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz",
    address: {
      street: "Kulas Light",
      suite: "Apt. 556",
      city: "Gwenborough",
      zipcode: "92998-3874",
      geo: {
        lat: "-37.3159",
        lng: "81.1496",
      },
    },
    phone: "1-770-736-8031 x56442",
    website: "hildegard.org",
    company: {
      name: "Romaguera-Crona",
      catchPhrase: "Multi-layered client-server neural-net",
      bs: "harness real-time e-markets",
    },
  },
  {
    id: 2,
    name: "Ervin Howell",
    username: "Antonette",
    email: "Shanna@melissa.tv",
    address: {
      street: "Victor Plains",
      suite: "Suite 879",
      city: "Wisokyburgh",
      zipcode: "90566-7771",
      geo: {
        lat: "-43.9509",
        lng: "-34.4618",
      },
    },
    phone: "010-692-6593 x09125",
    website: "anastasia.net",
    company: {
      name: "Deckow-Crist",
      catchPhrase: "Proactive didactic contingency",
      bs: "synergize scalable supply-chains",
    },
  },
];

const sortArray = (arr, sortBy) => {
  return arr.sort((a, b) => (a[sortBy] > b[sortBy] ? 1 : -1));
};
