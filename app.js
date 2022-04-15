var arr = [1, 2, 4, 8, 10, 12];

// forEach

//array.forEach(callback(currentValue, index, arr))

Array.prototype.myForEach = function (callback) {
  for (let index = 0; index < this.length; index++) {
    callback(this[index], index, this);
  }
};

arr.myForEach((currentValue) => {
  console.log("forEach" , currentValue);
});

//map

//array.map(callback(currentValue, index, array))

Array.prototype.myMap = function (callback) {
  let result = [];
  for (let index = 0; index < this.length; index++) {
    result.push(callback(this[index], index, this));
  }
  return result;
};

const multiplyByFive = arr.myMap(currentValue => currentValue * 5);
console.log("myMap", multiplyByFive);

// filter

//array.filter(callback(currentValue, index, arr))

Array.prototype.myFilter = function (callback) {
  let result = [];
  for (let index = 0; index < this.length; index++) {
    if (callback(this[index], index, this)) {
      result.push(this[index]);
    }
  }
  return result;
};

let moreThanEigth = arr.myFilter((item) => {
  return item > 8;
});

console.log("myFilter", moreThanEigth);

//find

//array.find(callback(currentValue, index, arr))

Array.prototype.myFind = function (callback) {
  for (let index = 0; index < this.length; index++) {
    if (callback(this[index], index, this)) {
      return this[index];
    }
  }
};

console.log("myFind", arr.myFind((item) => item > 8));

//reduce

//arr.reduce((accumulator, currentValue, index, arr)=>{}, initialValue);

Array.prototype.myReduce = function (callback, initialValue) {
  let accumulator = initialValue;
  for (let index = 0; index < this.length; index++) {
    accumulator = accumulator ? callback(accumulator, this[index], index, this) : this[index];
  }

  return accumulator;
};

console.log("myReduce", arr.myReduce((acc, value, index, arr) => acc + value, 0));
