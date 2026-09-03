// stands in for codegen.js in browser builds
//
// emitting javascript means building a function from a string at runtime, which a page served under a strict content security policy is not allowed to do. rather than ask every browser app to loosen its policy, browser builds render by walking the node tree the compiler built, which needs no such permission. doing it this way does remove a performance benefit server-rendered templates enjoy, but that is less important in browser contexts; security is more important
//
// webpack swaps this file in the same way it swaps cheerio for the dom polyfill, so the emitter is not merely unused in a browser bundle: it is not in it

export const canEmit = () => false

export function emit () {
  throw new Error('teddy: the code emitter is not available in browser builds')
}
