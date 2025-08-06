const { MongoClient } = require('mongodb');

async function testMongoDB() {
  const uri = process.env.MONGODB_URI || 'mongodb://localhost:27017/testdb';
  const client = new MongoClient(uri);

  try {
    await client.connect();
    console.log('Connected to MongoDB');
    const db = client.db('testdb');
    await db.collection('test').insertOne({ message: 'Hello MongoDB' });
    console.log('Inserted document');
  } catch (error) {
    console.error('Error:', error);
    process.exit(1);
  } finally {
    await client.close();
  }
}

testMongoDB();