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
 test("it returns all permutations of a multicharacter string with repeating characters", () => {
   let input = "aabc"
   let output = findPermutations(input)
   expect(output.length).toEqual(12)
   expect(output).toContain("aabc")
   expect(output).toContain("aacb") 
   expect(output).toContain("abac") 
   expect(output).toContain("abca") 
   expect(output).toContain("acab") 
   expect(output).toContain("acba") 
   expect(output).toContain("baac") 
   expect(output).toContain("baca") 
   expect(output).toContain("bcaa") 
   expect(output).toContain("caab") 
   expect(output).toContain("caba") 
   expect(output).toContain("cbaa")
 })
 test("it returns the output in lexographically sorted order", () => {
   let input = "aabc"
   let output = findPermutations(input)
    expect(output.length).toEqual(12)
    expect(output).toEqual(["aabc", "aacb", "abac", "abca", "acab", "acba", "baac", "baca", "bcaa", "caab", "caba", "cbaa"])

 })
})
