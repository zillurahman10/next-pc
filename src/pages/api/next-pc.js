const { MongoClient, ServerApiVersion } = require('mongodb');



const uri = "mongodb+srv://zillurhero40:GnhL7Qbi6RArPlxQ@cluster0.kn41lpl.mongodb.net/?retryWrites=true&w=majority";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

async function run(req, res) {
    try {
        // Connect the client to the server	(optional starting in v4.7)
        await client.connect();
        console.log("Pinged your deployment. You successfully connected to MongoDB!");

        const componentsCollection = client.db('next-pc').collection('components')

        if (req.method === "GET") {
            const data = await componentsCollection.find({}).toArray()
            res.send({
                success: true,
                message: 'successfully fetched all products.',
                result: data
            })
        }
    } finally {
        // Ensures that the client will close when you finish/error
        // await client.close();
    }
}
run().catch(console.dir);
