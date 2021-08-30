// Polyfills of ForEach
Array.prototype.myForEach = function (callback) {
    for (let index = 0; index < this.length; index++) {
        callback(this[index], index, this);
    }
}

// Polyfills of Filter
Array.prototype.myFilter = function (callback) {
    let filteredList = [];
    for (let index = 0; index < this.length; index++) {
        if (callback(this[index], index, this)) {
            filteredList.push(callback(this[index], index, this));
        }
    }
    return filteredList;
}

// Polyfills of Find
Array.prototype.myFind = function (callback) {
    for (let index = 0; index < this.length; index++) {
        if (callback(this[index], index, this)) {
            return this[index];
        }
    }
}

// Polyfills of Map
Array.prototype.myMap = function (callback) {
    let mappedList = [];
    for (let index = 0; index < this.length; index++) {
        mappedList.push(callback(this[index], index, this))
    };
    return mappedList;
}

// Polyfills of Reduce
Array.prototype.myReduce = function (callback, initialValue) {
    let accumulator = initialValue;
    for (let index = 0; index < this.length; index++) {
        accumulator = callback(accumulator, this[index], index, this);
    }
    return accumulator;
}