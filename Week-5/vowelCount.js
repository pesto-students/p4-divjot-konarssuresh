const isCharVowel = (c) => ["a", "e", "i", "o", "u"].includes(c);
const vowelCount = (inputString) => {
  const vowelMap = new Map();
  for (let char of inputString) {
    char = char.toLowerCase();
    if (vowelMap.has(char)) {
      const count = vowelMap.get(char) + 1;
      vowelMap.set(char, count);
    } else {
      const isVowel = isCharVowel(char);
      isVowel && vowelMap.set(char, 1);
    }
  }
  return vowelMap;
};

const string = "this Is A random STring which Contains A,E,I,O,U";
console.log(vowelCount(string));
