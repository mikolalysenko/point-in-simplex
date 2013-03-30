"use strict"

var barycentric = require("barycentric")
var EPSILON = 1e-8

function pointInSimplex(simplex, point) {
  var bs = barycentric(simplex, point)
  for(var i=0; i<bs.length; ++i) {
    if(bs[i] < -EPSILON || bs[i] > 1.0+EPSILON) {
      return false
    }
  }
  return true
}
module.exports = pointInSimplex