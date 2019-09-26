module.exports = function check(str, bracketsConfig) {
  function counter(str, bracketsConfig) {
    const stringBrackets = str;
    for (let i = 0; i < bracketsConfig.length; i++) {
      let brackets = bracketsConfig[i].join("");
      while (~str.indexOf(brackets)) {
        str = str.replace(brackets, "");
      }
    }

    if (str !== stringBrackets) {
      return counter(str, bracketsConfig);
    }
    return str;
  }

  if (counter(str, bracketsConfig) == 0) {
    return true;
  }
  return false;
};
