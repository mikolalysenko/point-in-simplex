point-in-simplex
================
Checks if a point is contained in a simplex

Usage
=====
First install:

    npm install point-in-simplex
    
Then use as follows:

```javascript
var pis = require("point-in-simplex")

var triangle = [[0,0], [0,1], [1,0]]

console.log(pis(triangle, [0.2, 0.2])) // Prints: true
console.log(pis(triangle, [100, 100])) // Prints: false
```

Credits
=======
(c) 2013 Mikola Lysenko.  MIT License
