const { MongoClient, ServerApiVersion } = require('mongodb');
const axios = require('axios');
const uri = "mongodb+srv://user_mypc:xxxxxx@cluster0.kmggvco.mongodb.net/?retryWrites=true&w=majority";
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
        outputs.outputText = await postData({ theme: user_params.add, content: user_params.lastParams }).catch(err => {
            if (err.message) {
                err.message = new Error(err.message).stack
            }
            throw err
        });
    } else if (user_params.find.length) {
        outputs.outputText = await find(user_params.find).catch(err => { throw err })
    } else if (user_params.getAll) {
        outputs.outputText = await getAll().catch(err => { throw err })
    } else if (user_params.modify) {
        outputs.outputText = await postData({ theme }).catch(err => { throw err })
    }
}
module.exports = sqlOpr
async function postData(tgtObj) {
    if (false) {
        throw new Error('You must give the theme and the content!')
    } else {
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
                console.log(response)
                return JSON.stringify(response.data, null, 4)
            })
            .catch(function (error) {
                throw error
            });

    }

}
async function delData(tgtObj) {
    if (false) {
        throw new Error('You must give the theme and the content!')
    } else {
        const data = JSON.stringify({
            "collection": "mycollection",
            "database": "mydatabase",
            "dataSource": "Cluster0",
            filter: {
                "_id": { "$oid": "6498fcad9d13dfee9b346da0" }
,                "test": "wrvr-test"

                // _id: "6498fc9ad1dcdd4cfbd90bf5"
            }
            // "filter": { "name": "John Sample" }
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
                console.log(response)
                return JSON.stringify(response.data, null, 4)
            })
            .catch(function (error) {
                throw error
            });

    }

}
async function findOne(tgtObj) {
    if (false) {
        throw new Error('You must give the theme and the content!')
    } else {
        const data = JSON.stringify({
            "collection": "mycollection",
            "database": "mydatabase",
            "dataSource": "Cluster0",
            filter: {
                "_id": { "$oid": "6498fc9ad1dcdd4cfbd90bf5" }
                ,
                "test": 23.847
            },

            // "filter": { "name": "John Sample" }
        });
        const config = {
            method: 'post',
            url: 'https://ap-southeast-1.aws.data.mongodb-api.com/app/data-jmriv/endpoint/data/v1/action/findOne',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Request-Headers': '*',
                'api-key': 'RddbxMZlXN9uX3qKx39q58CoRWjkiyb8qihoOo5bLAnVVpmi5hmKeMHKQVvNfb8O',
            },
            data: data
        };

        return await axios(config)
            .then(function (response) {
                console.log(response)
                return JSON.stringify(response.data, null, 4)
            })
            .catch(function (error) {
                throw error
            });

    }

}

async function updateData(tgtObj) {
    try {
        // Connect the client to the server	(optional starting in v4.7)
        await client.connect();
        console.log('hahahah, connected!')
        // Send a ping to confirm a successful connection
        // await client.db("admin").command({ ping: 1 });
        // console.log("Pinged your deployment. You successfully connected to MongoDB!");

        // Get a reference to the database
        const db = client.db('mydatabase');

        // Get a reference to the collection
        const collection = db.collection('mycollection');
        for (key in collection) {
            console.log(key)
        }
        // Insert a document
        return 999
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

delData({ test: "test", "age": 21 })