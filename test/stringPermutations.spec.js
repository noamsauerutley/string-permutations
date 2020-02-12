const findPermutations = require('../stringPermutations')

describe("#findPermutations", () =>{
  test("it returns all permutations of a multicharacter string", () => {
    let input = "abc"
    let output = findPermutations(input)
    expect(output.length).toEqual(6)
    expect(output).toContain("abc")
    expect(output).toContain("acb")
    expect(output).toContain("bac")
    expect(output).toContain("bca")
    expect(output).toContain("cab")
    expect(output).toContain("cba")
 })
 test("it returns all permutations of a single character string", () => {
   let input = "a"
   let output = findPermutations(input)
   expect(output).toEqual("a")
 })
})
