# Understanding the Concept of Hash Tables

## Rough hash table reading synopsis

A Hash Table is a data structure that utilizes key-value pairs to store and retrieve data. It works by hashing the key to obtain a unique index in an array where the value is stored, allowing for fast retrieval with a time complexity of O(1).

The key terminology associated with Hash Tables includes "hash" (the result of an algorithm used to determine the index of the array), "buckets" (what is contained in each index of the array, and may contain multiple key-value pairs if a collision occurs), and "collisions" (what happens when more than one key gets hashed to the same location of the hashtable).

Hash Tables are useful for holding unique values, acting as dictionaries or libraries, and providing quick lookups of data.

To create a Hash Table, an array is used, and a hashing algorithm is applied to the key to obtain a numeric number value. The hash code should be deterministic and avoid randomness to ensure even distribution of values across all buckets and avoid unnecessary collisions. A collision occurs when more than one key hashes to the same index in an array.

Collisions are handled by using linked lists or binary trees at each bucket to store multiple key-value pairs. When a key-value pair is inserted, the hash code is used to determine the index where it should be placed, and if a collision occurs, the pair is added to the end of the linked list or tree. When retrieving a value, the hash code is used to find the index, and then the linked list or tree is searched to find the correct key-value pair.

Overall, Hash Tables provide a fast and efficient way to store and retrieve key-value pairs, making them a popular data structure used in a variety of applications.

## Advantages / Disadvantages

### **Advantages**

- Hashtable allows for constant-time complexity for basic operations such as insertion, deletion, and retrieval of key/value pairs.

- It provides a fast way of looking up data in the data structure.
- It is suitable for handling large amounts of data, as the time complexity remains constant despite the amount of data in the hashtable.

- It is widely used in applications such as databases, caches, and routers.

- Hashtable implementation is provided in many programming languages, making it easy to use and understand.

### **Disadvantages**

- Hashtable can potentially consume a large amount of memory, as it requires a large array to store the key/value pairs.

- Collisions can occur, which can reduce the efficiency of hashtable operations, especially when the number of collisions is high.

- The efficiency of the hashtable can be affected by the quality of the hashing function used to map the keys to array indices. If the hashing function is not good, collisions may occur more frequently, and the hashtable may become inefficient.

- Hashtable does not preserve the order of the keys that are inserted. If the order of the keys is important, then another data structure, such as a linked list, may be more appropriate.
