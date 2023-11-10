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
    let res = parseInt(keyToSHA256.substring(0, 8), 16);
    return res;
  }

  hashMod(key) {
    // Your code here
    return this.hash(key) % this.capacity;
  }

  insertNoCollisions(key, value) {
    // Your code here
    let node = new KeyValuePair(key, value);
    let location = this.hashMod(key);

    if (this.data[location] === null) {
      this.data[location] = node;
      this.count++;
    } else {
      throw new Error('hash collision or same key/value pair already exists!');
    }
  }

  insertWithHashCollisions(key, value) {
    // Your code here
    let node = new KeyValuePair(key, value);
    let location = this.hashMod(key);
    if (this.data[location] === null) {
      this.data[location] = node;
    } else {
      node.next = this.data[location];
      this.data[location] = node;
    }
    this.count++;
  }

  insert(key, value) {
    // Your code here
    let node = new KeyValuePair(key, value);
    let location = this.hashMod(key);
    if (this.data[location] === null) {
      this.data[location] = node;
      this.count++;
    } else {
      let head = this.data[location];
      let same = false;
      while (head != null) {
        if (head.key === key) {
          head.value = value;
          same = true;
          break;
        }
        head = head.next;
      }
      if (!same) {
        node.next = this.data[location];
        this.data[location] = node;

        this.count++;
      }
    }
  }
}

module.exports = HashTable;
