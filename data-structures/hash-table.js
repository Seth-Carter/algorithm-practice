class HashTable {
  constructor(size = 53) {
    this.keyMap = new Array(size);
  }
  #hash(key) {
    let total = 0;
    const WEIRD_PRIME = 31;
    for (let i = 0; i < Math.min(key.length, 100); i++) {
      const char = key[i];
      const value = char.charCodeAt(0) - 96;
      total = (total * WEIRD_PRIME + value) % this.keyMap.length;
    }
    return Math.abs(total);
  }
  set(key, value) {
    const index = this.#hash(key);
    if (!this.keyMap[index]) {
      this.keyMap[index] = [];
    }
    this.keyMap[index].push([key, value]);
  }
  get(key) {
    const index = this.#hash(key);
    if (this.keyMap[index]) {
      for (let i = 0; i < this.keyMap[index].length; i++) {
        if (key === this.keyMap[index][i][0]) {
          return this.keyMap[index][i][1];
        }
      }
    }
    return undefined;
  }
  keys() {
    const keyArray = [];
    this.keyMap
      .filter(Boolean)
      .flat()
      .forEach((item) => {
        if (!keyArray.includes(item[0])) {
          keyArray.push(item[0]);
        }
      });
    return keyArray;
  }
  values() {
    const valueArray = [];
    this.keyMap
      .filter(Boolean)
      .flat()
      .forEach((item) => {
        if (!valueArray.includes(item[1])) {
          valueArray.push(item[1]);
        }
      });
    return valueArray;
  }
}

const ht = new HashTable();
ht.set('hello', 'Goodbye!');
ht.set('computer', 'science');
ht.set('apple', 'pie');
ht.set('apple', 'turnover');
ht.set('cherry', 'pie');
console.log(ht.keys());
console.log(ht.values());
