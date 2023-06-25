const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://wrvr:qqqq258369@cluster0.kmggvco.mongodb.net/?retryWrites=true&w=majority";
// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

async function sqlOpr(user_params = { lastParams: "", search: [], add: "", delete: "" }, outputs = { outputText }) {
    if (user_params.add) {
        outputs.outputText = await add({ theme: user_params.add, content: user_params.lastParams }).catch(err => { throw err });
    }
}
module.exports = sqlOpr

async function add(tgtObj) {
    try {
        // Connect the client to the server	(optional starting in v4.7)
        await client.connect();
        // Send a ping to confirm a successful connection
        await client.db("admin").command({ ping: 1 });
        // console.log("Pinged your deployment. You successfully connected to MongoDB!");

        // Get a reference to the database
        const db = client.db('mydatabase');

        // Get a reference to the collection
        const collection = db.collection('mycollection');

        // Insert a document
        const resultInsert = await collection.insertOne(tgtObj);
        return `Inserted ${resultInsert.insertedCount} documents into the collection${JSON.stringify(tgtObj)}`;
    } finally {
        // Ensures that the client will close when you finish/error
        await client.close();
    }
}

async function search(keywords) {
    try {
        // Connect the client to the server	(optional starting in v4.7)
        await client.connect();
        // Send a ping to confirm a successful connection
        await client.db("admin").command({ ping: 1 });
        // console.log("Pinged your deployment. You successfully connected to MongoDB!");

        // Get a reference to the database
        const db = client.db('mydatabase');

        // Get a reference to the collection
        const collection = db.collection('mycollection');

        // Find documents
        const resultFind = await collection.find({ age: { $gt: 25 } }).toArray();
        console.log(`Found ${resultFind.length} documents that match the query`);
        console.log(resultFind);

        // Insert a document
        const resultInsert = await collection.insertOne(keywords);
        return `Inserted ${resultInsert.insertedCount} documents into the collection`;
    } finally {
        // Ensures that the client will close when you finish/error
        await client.close();
    }
}

