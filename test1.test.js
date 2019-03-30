const {GPU} = require("gpu.js");

describe("Suite1", () => {
  it('test', () => {
    const gpu = new GPU()
    gpu.destroy()
  })

  // Just to show that multiple instantiation in one suite isn't a problem
  it('test', () => {
    const gpu = new GPU()
    gpu.destroy()
  })
})
