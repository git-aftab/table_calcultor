// Write a function that generates a specific table upto the given range
// Method 1 -----------------------

function tableCalculator(x, y) {
  if ((typeof x !== "number" && y !== "number")) {
    throw new Error("Please enter a valid Int or natural no");
  } else {
    for (let i = 1; i <= y; i++) {
      let table = x * i;
      console.log(x, "*", i, "=", table);
    }
  }
}

tableCalculator(4, 10);
console.log("----------------");
// tableCalculator("10", "5");
tableCalculator(8, 10);
console.log("-----------------------------------------------------------------")

// Method 2 -------------------------------

function tableCalculator2(x,y){
  if((typeof x !== "number" && y !== "number")){
    throw new Error("Please Enter a valid Int or Natural no")
  }else{
    for(let i = x; i<= x*y;i= i+x){
      console.log(`${x}*${y}=${i}`)
    }
  }
}
tableCalculator2(5,10)