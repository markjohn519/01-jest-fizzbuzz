export default function fizzbuzz(postiveInteger) {
  if (postiveInteger % 3 === 0 && postiveInteger % 5 === 0) {
    return 'fizzbuzz'
  }
  if (postiveInteger % 3 === 0) {
    return 'fizz'
  }
  if (postiveInteger % 5 === 0) {
    return 'buzz'
  }
  return ''
}
