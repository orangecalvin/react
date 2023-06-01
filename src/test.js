const a = ['남자 코트 추천', '수유 우동 맛집', '파이썬독학'];

const b = a.map((value, index) => {
  console.log(value, index)
  return a + '1'
})

// console.log(b)

const c = a.filter((value, index) => {
  console.log(value, index)
  if(value === '남자 코트 추천'){
    return false
  }
  return true
} )

console.log(c)