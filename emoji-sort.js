var stepCount = 0;          // Comparison counter
var moveCount = 0;          // Move counter
var sortType = "None";

// PRINTER FUNCTION
function printInChars(arr,downLine,upLine){
  console.log("----------------------------------------------");
  
  let characterDefault = "🗿";     // Default character
  let characterUp = "⬆️";          // Line to move up
  let characterDown = "⬇️";        // Line to move down

  for (let i in arr) {      // For each item in the array    

    let character = characterDefault;
    if (i==upLine) character = characterUp;       // Check if current line is moving up
    if (i==downLine) character = characterDown;   // Check if current line is moving down

    let printStr = "  ";                                         // String to be printed
    for (let j = 0; j < arr[i]; j++) printStr += character;      // Makes sure the length of the string equals the current item in the array
    console.log(printStr);
  }
}

// Switch function - Switches two items in an array
function switchItems(arr,indexA,indexB){
  let hold = arr[indexB];                  
  arr[indexB] = arr[indexA];               // Switch the items
  arr[indexA] = hold;
  return arr;
}

// Recursive sort - Sorting algorithm I tried to write myself (inefficient)
function recursiveSort(arr){
  sortType = "Recursive";
  console.log(`Sort type: ${sortType}`)
  for (let i = 0; i < arr.length-1 ; i++){   // For each item in the array    
    stepCount++;
    if (arr[i] > arr[i+1]) {                 // Check if current item is bigger then the next      
      moveCount++;
      printInChars(arr,i,(i+1));             // If check is true, print the array highlighting the lines to be switched
      
      arr = switchItems(arr,i,i+1);          // Switch items
      
      recursiveSort(arr);                    // Apply the same function to the updated array
    }
  }
  return arr;
}

// Bubble sort algorithm
function bubbleSort(arr){
  sortType = "Bubble";
  console.log(`Sort type: ${sortType}`)
  for (let i = 0; i < arr.length ; i++){      // For each item in the array       
    for (let j = 0; j < arr.length-1-i; j++){
      stepCount++;
      if (arr[j] > arr[j+1])  {               // Check if current item is bigger then the next      
        moveCount++;
        printInChars(arr,j,(j+1));            // If check is true, print the array highlighting the lines to be switched

        arr = switchItems(arr,j,j+1);         // Switch items
      }
    }
  }
  return arr;
}

// Random number with range function
randomRange = (min,max) =>  {return Math.floor(Math.random() * (max - min + 1)) + min;}

function randomArray(length) {            // Makes a random array with a given length, 
  let arr = [];                           // each item having 1 as the minimum value and length as the maximum
  for(let i = 0; i < length; i++) {
    arr.push(randomRange(1,length));
  }
  return arr;
}

//
console.log("----------------------------------------------");
array = randomArray(5);   // Array of random numbers
// array = [2,8,5,3,9];
console.log(`Initial array: ${array}`)
printInChars(bubbleSort(array));
console.log("----------------------------------------------");
console.log(`Amount of comparisons: ${stepCount}`);
console.log(`Amount of moves: ${moveCount}`);
console.log("----------------------------------------------");
