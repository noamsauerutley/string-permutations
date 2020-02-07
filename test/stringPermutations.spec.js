const findAllPermutations = require('../stringPermutations')

describe("#findAllPermutations", () =>{
  test("it returns all permutations of a string", () => {
    let input = "abc"
    let output = findAllPermutations(input)
    expect(output.length).toEqual(6)
    expect(output).toContain("abc")
    expect(output).toContain("acb")
    expect(output).toContain("bac")
    expect(output).toContain("bca")
    expect(output).toContain("cab")
    expect(output).toContain("cba")
 })
})
