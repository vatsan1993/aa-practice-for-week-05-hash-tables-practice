const HashTable = require('./hash-table');

let hashTable = new HashTable(2);
hashTable.insertWithHashCollisions('key-1', 'val-1');
hashTable.insertWithHashCollisions('key-2', 'val-2');
hashTable.insertWithHashCollisions('key-3', 'val-3');

console.log(hashTable.data[0].value);
console.log(hashTable.data[1].value);
