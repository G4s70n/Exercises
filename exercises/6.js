/* Story
Ben has a very simple idea to make some profit: he buys something and sells it again. Of course, this wouldn't give him any profit at all if he was simply to buy and sell it at the same price. Instead, he's going to buy it for the lowest possible price and sell it at the highest.

Task
Write a function that returns both the minimum and maximum number of the given list/array. */


function minMax(arr){
    let max = arr[0];
    let min = arr[0];
    arr.map( e => {
      if( e > max) max = e;
      if( e < min) min = e;
    })
    return [min, max];
  }

 console.log( minMax([2334454, 5]));

module.exports = minMax;