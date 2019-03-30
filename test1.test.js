const {GPU} = require("gpu.js");

describe("Suite1", () => {
  it('test', () => {
    const gpu = new GPU()
    gpu.destroy()
  })
})
