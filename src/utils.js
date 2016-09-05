export function addStaticClass (data, staticClass) {
  if (!data.staticClass) {
    data.staticClass = staticClass
  } else {
    data.staticClass += ' ' + staticClass
  }
}
