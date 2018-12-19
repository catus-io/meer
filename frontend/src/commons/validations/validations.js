export default {
  length(value, min, max) {
    const length = value.length
    if(length < min) return true
    else if(length > max) return true
  },
  regExp(item, reg) {
    const regExp = new RegExp(reg, 'g');
    return regExp.test(item)
  },
  compare(original, comparison) {
    if(original == comparison) return true
    else return false
  }
}