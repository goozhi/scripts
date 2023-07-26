const axios = require('axios');
const { MongoClient, ServerApiVersion } = require('mongodb');
const fs = require('fs')
const path = require('path')
const uri = "mongodb+srv://wrvr:xxxxxxx@cluster0.kmggvco.mongodb.net/?retryWrites=true&w=majority";
// Create a MongoClient with a MongoClientOptions object to set the Stable API version
// APIkey RddbxMZlXN9uX3qKx39q58CoRWjkiyb8qihoOo5bLAnVVpmi5hmKeMHKQVvNfb8O
const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

async function sqlOpr(user_params = { getAll: false, lastParams: "", find: [], add: "", delete: "" }, outputs = { outputText }) {
    if (user_params.add) {
        outputs.outputText = await add({ theme: user_params.add, content: user_params.lastParams }).catch(err => {
            if (err.message) {
                err.message = new Error(err.message).stack
            }
            throw err
        });
    } else if (user_params.find.length) {
        outputs.outputText = await find(user_params.find).catch(err => { throw err })
    } else if (user_params.getAll) {
        outputs.outputText = await getAll().catch(err => { throw err })
    } else if (user_params.delete) {
        outputs.outputText = await deleteOne(user_params.delete).catch(err => { throw err })
    } else if (user_params.save) {
        outputs.outputText = await getAll().catch(err => { throw err })
        const path_andr = '/storage/emulated/0/脚本/'
        if (!fs.existsSync(path_andr)) {
            throw new Error('path is not exists:' + path_andr)
        } else {
            fs.writeFileSync(path.join(path_andr, "nodejsData.json"), outputs.outputText)
            outputs.outputText = "the data is saved:\n" + outputs.outputText
        }
    }
}
module.exports = sqlOpr

async function add(tgtObj) {
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

async function deleteOne(idDel) {
    const data = JSON.stringify({
        "collection": "mycollection",
        "database": "mydatabase",
        "dataSource": "Cluster0",
        filter: {
            _id: { $oid: idDel }
        }
    });

    const config = {
        method: 'post',
        url: 'https://ap-southeast-1.aws.data.mongodb-api.com/app/data-jmriv/endpoint/data/v1/action/deleteOne',
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

async function find(keywords) {
    // const vnwm_1 = []
    const { documents } = await get().catch(err => { throw err })
    if (documents) {
        return documents.filter(ele_1 => {
            return keywords.every(ele_2 => {
                return new RegExp(ele_2, "i").test(ele_1.theme)
            })
        }).map(ele => Object.entries(ele).map(ele => ele[0] + ":\n" + ele[1].fmtLines(4)).join('\n\n')).join('\n\n')
    } else {
        throw new Error('Documents is null.')
    }
}

async function getAll() {
    return JSON.stringify(await get().catch(err => { throw err }), null, 4)
}

async function get() {
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
            return response.data
        })
        .catch(function (error) {
            throw error
        });

}

