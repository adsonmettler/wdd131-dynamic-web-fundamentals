
// Author: Adson Mettler do Nascimento

// Simple use of loop with DO WHILE statement
// let i = 0;

// do {
//   i += 1;
//   console.log(i);
// }

// while (i < 10);


// BREAK STATEMENT 
// Breaking to a label EXAMPLES:
// let x = 0;
// let z = 0;

// labelCancelLoops: while (true) {
//   console.log("Outer loops:", x);
//   x += 1;
//   z = 1;
  
//   while (true) {
//     console.log("Inner loops:", z);
//     z += 1;
    
//     if (z === 10 && x === 10) {
//       break labelCancelLoops;
//     }
//     else if (z === 10) {
    
//         break;
//     }
//   }
// }


// The following example shows a while loop with a
// continue statement that executes when the value of i is 3.
// Thus, n takes on the values 1, 3, 7, and 12.


// EXAMPLE: continue statement
let i = 0;
let n = 0;

while (i < 5) {i++;
  
  if (i === 3) {continue;}
  
  n += i;
  console.log(n);
}
// Logs:
// 1 3 7 12
