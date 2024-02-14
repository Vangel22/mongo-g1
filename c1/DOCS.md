# MongoDB Commands and Concepts

## Introduction

MongoDB is a popular NoSQL (Not Only SQL) database system known for its flexibility and scalability. This document provides an overview of key concepts and common commands used in MongoDB.

### Key Concepts

- **Documents**: Data in MongoDB is stored in JSON-like documents called BSON. Each document represents a single record and can contain nested structures.
- **Collections**: Collections are groups of MongoDB documents. They are analogous to tables in relational databases but do not enforce a schema.
- **Database**: Databases are containers for collections. Each MongoDB server can host multiple databases.

## Commands

1. `show dbs`
   - Lists all databases on the MongoDB server.
2. `use <database>`
   - Switches to the specified database.
3. `db.createCollection("<collection>")`
   - Creates a new collection.
4. `db.dropDatabase()`
   - Deletes the current database.
5. `db.<collection>.insertOne(<document>)`
   - Inserts a single document into the collection.
6. `db.<collection>.find()`
   - Retrieves all documents from the collection.
7. `db.<collection>.insertMany([<document1>, <document2>, ...])`
   - Inserts multiple documents into the collection.
8. `db.<collection>.insertOne({ <field>: new Date("<date>") })`
   - Inserts a document with a date field.
9. `db.<collection>.insertOne({ <field>: null })`
   - Inserts a document with a null field value.
10. `db.<collection>.find()`
    - Returns all documents from the collection.
11. `db.<collection>.find().sort({ <field>: 1 })`
    - Returns documents sorted in ascending order.
12. `db.<collection>.find().limit(<limit>)`
    - Limits the number of documents returned.
13. `db.<collection>.find().sort({ <field>: -1 }).limit(1)`
    - Returns the document with the highest value for a field.
14. `db.<collection>.find({}, { <field>: <1 or true> })`
    - Returns documents with specified fields.
15. `db.<collection>.updateOne(<filter>, <update>)`
    - Updates a single document.
16. `db.<collection>.updateMany(<filter>, { $set: { <field>: <value> } })`
    - Updates multiple documents.
17. `db.<collection>.updateMany({ <field>: { $exists: false }}, { $set: { <field>: <value> } })`
    - Updates documents where a field doesn't exist.
18. `db.<collection>.deleteOne(<filter>)`
    - Deletes a single document.
19. `db.<collection>.deleteMany(<filter>)`
    - Deletes multiple documents.
20. `db.<collection>.deleteMany({ <field>: { $exists: false } })`
    - Deletes documents where a field doesn't exist.

These commands provide essential functionalities for interacting with MongoDB databases and collections. For detailed usage, refer to the MongoDB documentation.
