function max_of_three(x, y, z) 
 {
  max= 0;
  if (x > y)
  {
    max = x;
  } else
  {
    max = y;
  }
  if (z > max) 
  {
    max = z;
  }
  return max;
}

console.log(max_of_three(1,0,1));
console.log(max_of_three(0,-10,-20));
console.log(max_of_three(1000,510,440));
