module.exports = function check(str, bracketsConfig) {
  // your solution
  const configStr = bracketsConfig.map(elem => elem[0] + elem[1]) 
  
  while (str !== "") {
    let isMatched = false
    configStr.forEach(element => {
      if (str.includes(element)) {
        str = str.replace(element, "") 
        isMatched = true
      } 
    })
    if (!isMatched) {
      break
    }
  }
  
  return (str !== "") ? false : true
}
