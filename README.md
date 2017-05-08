# Javascript Hybrid Currying

## In a Nutshell

```js
var add = curry(function(a, b, c) {return a + b + c;});

addOne = add(1);
addOneTwo = addOne(2);
addOneTwo(3);         // 6
add(1, 2, 3);         // 6
add(1)(2)(3);         // 6
```

As you can see, the result of a `curry()` allows us to create new functions  
with partial function application, use the function with normal javascript  
function calls, and to call the function in stages. I wrote a blog post about  
this curry function [here](https://owen.cafe/blog/0/currying-in-javascript), which explains how it works and its creation.
