const sha256 = require('js-sha256');

class KeyValuePair {
  constructor(key, value) {
    this.key = key;
    this.value = value;
    this.next = null;
  }
}

class HashTable {
  constructor(numBuckets = 4) {
    // Your code here
    this.count = 0;
    this.capacity = numBuckets;
    this.data = [];
    for (let i = 0; i < numBuckets; i++) {
      this.data[i] = null;
    }
  }

  hash(key) {
    // Your code here
    let keyToSHA256 = sha256(key);
    console.log(keyToSHA256);
    let res = parseInt(keyToSHA256.substring(0, 8), 16);
    return res;
  }

  hashMod(key) {
    // Your code here
    return this.hash(key) % this.capacity;
  }

  insertNoCollisions(key, value) {
    // Your code here
  }

  insertWithHashCollisions(key, value) {
    // Your code here
  }

  insert(key, value) {
    // Your code here
  }
}

module.exports = HashTable;
