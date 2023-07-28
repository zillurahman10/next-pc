// const { MongoClient, ServerApiVersion } = require('mongodb');
// const http = require('http');

// const uri = "mongodb+srv://zillurhero40:GnhL7Qbi6RArPlxQ@cluster0.kn41lpl.mongodb.net/?retryWrites=true&w=majority";

// const client = new MongoClient(uri, {
//     serverApi: {
//         version: ServerApiVersion.v1,
//         strict: true,
//         deprecationErrors: true,
//     }
// });

// async function run(req, res) {
//     try {
//         await client.connect();
//         console.log("Pinged your deployment. You successfully connected to MongoDB!");

//         const componentsCollection = client.db('next-pc').collection('components')

//         if (req.method === "GET") {
//             const data = await componentsCollection.find({}).toArray()
//             res.writeHead(200, { 'Content-Type': 'application/json' });
//             res.end(JSON.stringify({
//                 success: true,
//                 message: 'successfully fetched all products.',
//                 result: data
//             }));
//         } else {
//             res.writeHead(404, { 'Content-Type': 'text/plain' });
//             res.end('Not Found');
//         }
//     } catch (err) {
//         console.error(err);
//         res.writeHead(500, { 'Content-Type': 'text/plain' });
//         res.end('Internal Server Error');
//     } finally {
//         // You may want to close the MongoDB client connection after each request
//         // await client.close();
//     }
// }

// const server = http.createServer();

// server.on('request', (req, res) => {
//     run(req, res);
// });

// server.listen(3000, () => {
//     console.log('Server started on port 3000');
// });
