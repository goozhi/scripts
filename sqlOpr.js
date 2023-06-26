const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://wrvr:qqqq258369@cluster0.kmggvco.mongodb.net/?retryWrites=true&w=majority";
// Create a MongoClient with a MongoClientOptions object to set the Stable API version
// APIkey RddbxMZlXN9uX3qKx39q58CoRWjkiyb8qihoOo5bLAnVVpmi5hmKeMHKQVvNfb8O
const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

async function sqlOpr(user_params = { getAll: false, lastParams: "", search: [], add: "", delete: "" }, outputs = { outputText }) {
    if (user_params.add) {
        outputs.outputText = await add({ [user_params.add]: user_params.lastParams }).catch(err => {
            if (err.message) {
                err.message = new Error(err.message).stack
            }
            throw err
        });
    } else if (user_params.getAll) {
        outputs.outputText = await getAll().catch(err => { throw err })
    }
}
module.exports = sqlOpr

async function add(tgtObj) {
    const axios = require('axios');
    const data = JSON.stringify({
        "collection": "mycollection",
        "database": "mydatabase",
        "dataSource": "Cluster0",
        "document": tgtObj
    });

    const config = {
        method: 'post',
        url: 'https://ap-southeast-1.aws.data.mongodb-api.com/app/data-jmriv/endpoint/data/v1/action/insertOne',
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Request-Headers': '*',
            'api-key': 'RddbxMZlXN9uX3qKx39q58CoRWjkiyb8qihoOo5bLAnVVpmi5hmKeMHKQVvNfb8O',
        },
        data: data
    };

    return await axios(config)
        .then(function (response) {
            return JSON.stringify(response.data, null, 4)
        })
        .catch(function (error) {
            throw error
        });

}

async function add_id(tgtObj) {
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

async function getAll() {
    const axios = require('axios');
    const data = JSON.stringify({
        "collection": "mycollection",
        "database": "mydatabase",
        "dataSource": "Cluster0",
        filter: {}
        // "document": {
        //   "test": "wrvr-test"
        // }
    });

    const config = {
        method: 'post',
        url: 'https://ap-southeast-1.aws.data.mongodb-api.com/app/data-jmriv/endpoint/data/v1/action/find',
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Request-Headers': '*',
            'api-key': 'RddbxMZlXN9uX3qKx39q58CoRWjkiyb8qihoOo5bLAnVVpmi5hmKeMHKQVvNfb8O',
        },
        data: data
    };

    return await axios(config)
        .then(function (response) {
            return JSON.stringify(response.data, null, 4)
        })
        .catch(function (error) {
            throw error
        });

}