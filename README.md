# About Mongo
MongoDB is a rich open-source document-oriented and one of the widely recognised NoSQL database. 
<br/> 
It is written in C++ programming language.

## Important Terms

### Database
Database is a physical container for collections. 
<br/>
Each database gets its own set of files on the file system. A single MongoDB server typically has multiple databases.

### Collection
Collection is a group of documents and is similar to an RDBMS table. 
<br/>
A collection exists within a single database. Collections do not enforce a schema. 
<br/>
Documents within a collection can have different fields.

### Document
A document is a set of key-value pairs. Documents have dynamic schema. 
<br/>
Dynamic schema means that documents in the same collection do not need to have the same set of fields or structure, and common fields in a collection’s documents may hold different types of data.

## Data Types
MongoDB supports many datatypes such as:

- **String** − This is the most commonly used datatype to store the data. String in MongoDB must be UTF-8 valid.
- **Integer** − This type is used to store a numerical value. Integer can be 32 bit or 64 bit depending upon your server.
- **Boolean** − This type is used to store a boolean (true/ false) value.
- **Double** − This type is used to store floating point values.
- **Min/ Max keys** − This type is used to compare a value against the lowest and highest BSON elements.
- **Arrays** − This type is used to store arrays or list or multiple values into one key.
- **Timestamp** − ctimestamp. This can be handy for recording when a document has been modified or added.
- **Object** − This datatype is used for embedded documents.
- **Null** − This type is used to store a Null value. 
- **Symbol** − This datatype is used identically to a string; however, it’s generally reserved for languages that use a specific symbol type.
- **Date** − This datatype is used to store the current date or time in UNIX time format. You can specify your own date time by creating object of Date and passing day, month, year into it.
- **Object ID** − This datatype is used to store the document’s ID.
- **Binary data** − This datatype is used to store binary data.
- **Code** − This datatype is used to store JavaScript code into the document.
- **Regular expression** − This datatype is used to store regular expression.

## Setup
Before diving into MongoDB, you need to first install MongoDB on your computer. 
<br/> To do this, visit the [official mongo website](https://www.mongodb.com/try/download/community)
<br/>
There are interesting couple of executable binary files:

- mongod server — Mongo Daemon or mongod is a background process used by MongoDB. It manages all the MongoDB server tasks.
- mongo shell — It is a command line shell that helps in interacting with the client
- mongos sharded cluster query router

## Commands
1.  Finding the current database you’re in:`db`
2.  Listing databases: `show databases`
3. Use a particular database: `use <db name>`
4. Delete a database: `db.dropDatabase()`
5. Create a collection: `db.createCollection(<collection name>)`
6. Inserting data: `insertOne()`, `insertMany() / insert()`
7. Lookup data: `db.<collection name>.find()`
8. Drop a collection: `db.<collection name>.drop()`

# Express-Mongo app
Basic App with MongoDB &amp; Express JS
<br/> In this app we will
* Create a **POST** route to load data into the mongo db from `characters.json` file (used in the previous challenge)
* Create **GET** routes to find & serve data from the database
* Create **DELETE** route to find & remove a document
* Create **POST** route to update a document.
* Use **mongoose** library to interact with MongoDB

## Mongoose Schema vs. Model
A Mongoose model is a wrapper on the Mongoose schema. 
A Mongoose schema defines the structure of the document, default values, validators, etc., whereas a Mongoose model provides an interface to the database for creating, querying, updating, deleting records, etc.

Creating a Mongoose model comprises primarily of three parts:

### 1. Referencing Mongoose
`let mongoose = require('mongoose')` or `import mongoose from mongoose`
<br/>
This reference will be the same as the one that was returned when we connected to the database, which means the schema and model definitions will not need to explicitly connect to the database.

### 2. Defining the Schema
A schema defines document properties through an object where the key name corresponds to the property name in the collection.
<br/>
`let characterSchema = new mongoose.Schema({
id: { type: Number, required: true},
name: String
})`
<br/>
Here we define a property called email with a schema type String which maps to an internal validator that will be triggered when the model is saved to the database. It will fail if the data type of the value is not a string type.

### 3. Exporting a Model
We need to call the model constructor on the Mongoose instance and pass it the name of the collection and a reference to the schema definition.
<br/>
`module.exports = mongoose.model('Character', characterSchema)`
<br/>
Let’s combine the above code into `./models/characters.js` to define the contents of a basic character model:
<br/>
```
import mongoose from mongoose 
let characterSchema = new mongoose.Schema({ 
id: { type: Number, required: true},
name: String 
})
module.exports = mongoose.model('Character', characterSchema)
```
