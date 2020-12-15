const gymMem = (arr) => {
  let gymNumber = arr[1];
  let counter = 0;
  for (let i = 0; i < gymNumber.length; i++) {
    if 
    ((gymNumber[i] == 4 && i === 0) || 
    (gymNumber[i] == 5 && i === 0) || 
    (gymNumber[i] == 3 && i === 0) || 
    (gymNumber[i] == 7 && i === 1)) {
      counter++;
      console.log(counter)
      } else {
        
      }
  }
}

console.log(gymMem([3, '42345-67891-11111', '327345-67891-11d11', '52345-67891-1e111']))