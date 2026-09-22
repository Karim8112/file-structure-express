// import { MongoClient, ServerApiVersion } from "mongodb";
import dns from "dns";
dns.setDefaultResultOrder("ipv4first");
dns.setServers(["1.1.1.1", "8.8.8.8"]);
// const uri = process.env.CONNECTION_STRING?.replace(
//   "<PASSWORD>",
//   process.env.DATABASE_PASSWORD as string,
// );

// // Create a MongoClient with a MongoClientOptions object to set the Stable API version
// const client = new MongoClient(uri as string, {
//   serverApi: {
//     version: ServerApiVersion.v1,
//     strict: true,
//     deprecationErrors: true,
//   },
// });

// export default async function run() {
//   try {
//     // Connect the client to the server	(optional starting in v4.7)
//     await client.connect();
//     // Send a ping to confirm a successful connection
//     await client.db("admin").command({ ping: 1 });
//     console.log(
//       "Pinged your deployment. You successfully connected to MongoDB!",
//     );
//   } catch {
//     console.log("failed");
//   } finally {
//     // Ensures that the client will close when you finish/error
//     await client.close();
//   }
// }

import mongoose from "mongoose";
const DB = process.env.CONNECTION_STRING;
const Connect_DB = async function () {
  mongoose
    .connect(DB as string, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false,
    })
    .then(() => console.log("DB connection successful!"));
};

export default Connect_DB;
