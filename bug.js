```javascript
//Incorrect usage of $inc operator
db.collection('myCollection').updateOne({"_id": ObjectId("65167d7876543210")},{$inc:{counter: '1'}})
```