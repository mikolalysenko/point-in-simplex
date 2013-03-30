var pis = require("../pis.js")

require("tap").test("point-in-simplex", function(t) {

  var triangle = [[0,0], [0,1], [1,0]]

  t.assert(pis(triangle, [0.2, 0.2]))
  t.assert(!pis(triangle, [1000, 0]))

  t.end()
})