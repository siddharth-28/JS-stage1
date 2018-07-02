function logArrayElements(element, index, array) {
    console.log('a[' + index + '] = ' + element);
  }
  
  // Notice that index 2 is skipped since there is no item at
  // that position in the array.
  [2, 5, , 9].forEach(logArrayElements);
 