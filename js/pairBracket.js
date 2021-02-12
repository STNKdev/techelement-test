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

  const getPairIndex = () => Math.round(Math.random() * (pairList.length - 1));

  const list = [];
  let count = 0;
  let depth = Math.round(Math.random() * pair);

  if (pair === 0) {
    return '';
  } else {
    addBracket(depth);
  }

  const addBracket = (depth) => {
    let pairIndex = getPairIndex();
    if (depth === 0 && pair === 1) {
      list.push(pairList[pairIndex].open);
      list.push(pairList[pairIndex].close);
    } else if (depth === 0 && pair > 1) {

    }
  };

  return list;
};


const checkBracketPair = (string) => {
  let stringAsArray = [...string];
  let stackBracket = [];
  let openBracket = '';
  for (let bracket of stringAsArray) {
    if ('([{'.includes(bracket)) {
      stackBracket.push(bracket);
    } else if (')]}'.includes(bracket)) {
      if (stackBracket.length === 0) {
        return false;
      }
      openBracket = stackBracket.pop();
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


/*function generateParens(remaining) {
  const set = [];
  if (remaining === 0) {
    set.push("");
  } else {
    let prev = generateParens(remaining - 1);
    for (let str in prev) {
      for (let i = 0; i < str.length; i++) {
        if (str.charAt(i) == '(') {
          String s = insertInside(str, i);
          if (!set.contains(s)) {
            set.add(s);
          }
        }
      }
      if (!set.contains("()" + str)) {
        set.add("()" + str);
      }
    }
  }
  return set;
}

function insertInside(str, leftIndex) {
  let left = str.substring(0, leftIndex + 1);
  let right = str.substring(leftIndex + 1, str.length);
  return left + "()" + right;
}*/
