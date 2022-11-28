const generateKey = () => {
  let check = true;
  let key = 0;
  //generate key
  do {
    key = Math.floor(Math.random() * 9000 + 1000);
    check = checkForDoubleDigits(key);

    for (let i = 0; key.length - 1; i++) {
      if (Math.abs(parseInt(key[i]) - parseInt(key[i + 1])) > 1) {
        check = true;
        break;
      }
      if (Math.abs(parseInt(key[i + 1]) - parseInt(key[i])) > 1) {
        check = true;
        break;
      }
    }
  } while (check);
  return key;
};

const checkForDoubleDigits = (key) => {
  key = Math.abs(key);
  let curr = -1;
  while (key > 0) {
    const nextCurr = key % 10;
    if (nextCurr === curr) return true;
    curr = nextCurr;
    key = Math.floor(key / 10);
  }
  return false;
};

const generateKeys = () => {
  let keys = [];
  for (let i = 0; i <= 4; i++) {
    keys.push(generateKey());
  }
  return keys;
};


export default generateKeys;