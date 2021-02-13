const getPairBracket = (pair) => {

  const pairList = [
    {
      open: '(',
      close: ')'
    },
    {
      open: '[',
      close: ']'
    },
    {
      open: '{',
      close: '}'
    }
  ];


  const getPairIndex = () => Math.floor(Math.random() * (pairList.length));

  let listBrackets = [];
  let count = 0;
  let depth = pair > 1 ? Math.floor(Math.random() * (pair + 1)) : 0;

  for (let i = 0; i < pair; i++) {
    listBrackets.push(pairList[getPairIndex()]);
  }

  if (depth === 0) {
    return listBrackets.map((bracket) => bracket.open + bracket.close).join('');
  }

  let stack = [];

  for (let i = 0; i < depth; i++) {
    stack.push(listBrackets[i].open);
  }
  for (let i = depth - 1; i >= 0; i--) {
    stack.push(listBrackets[i].close);
  }

  const depthPair = (pair) => {
    const brackets = (result = '', openBracket = 0, closeBracket = 0) => {
      if (openBracket + closeBracket === 2 * pair) {
        return result;
      }
      if (openBracket < pair) {
        return brackets(result += '(', openBracket += 1, closeBracket);
      }

      if (closeBracket < openBracket) {
        return brackets(result += ')', openBracket, closeBracket += 1);
      }
    };
    return brackets();
  };

};



const checkBracketPair = (string) => {
  let stringAsArray = [...string];
  let stackBracket = [];
  for (let bracket of stringAsArray) {
    if ('([{'.includes(bracket)) {
      stackBracket.push(bracket);
    } else if (')]}'.includes(bracket)) {
      if (stackBracket.length === 0) {
        return false;
      }
      let openBracket = stackBracket.pop();
      if (openBracket === '(' && bracket === ')') {
        console.log('ok', openBracket, bracket);
      } else if (openBracket === '[' && bracket === ']') {
        console.log('ok', openBracket, bracket);
      } else if (openBracket === '{' && bracket === '}') {
        console.log('ok', openBracket, bracket);
      } else {
        return false;
      }
    }
  }
  return stackBracket.length === 0;
};


function generateParens(remaining) {
  const set = [];
  if (remaining === 0) {
    set.push("");
  } else {
    let prev = generateParens(remaining - 1);
    for (let str of prev) {
      for (let i = 0; i < str.length; i++) {
        if (str.charAt(i) === '(') {
          let s = insertInside(str, i);
          if (!set.includes(s)) {
            set.push(s);
          }
        }
      }
      if (!set.includes("()" + str)) {
        set.push("()" + str);
      }
    }
  }
  return set;
}

function insertInside(str, leftIndex) {
  let left = str.substring(0, leftIndex + 1);
  let right = str.substring(leftIndex + 1, str.length);
  return left + "()" + right;
}
