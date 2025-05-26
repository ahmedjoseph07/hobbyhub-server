const express = require("express");
require("dotenv").config();
const cors = require("cors");
const port = process.env.PORT || 3000;

const app = express();

app.use(cors());
app.use(express.json());

const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.egi2zh7.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    },
});

async function run() {
    try {
        // Connect the client to the server	(optional starting in v4.7)
        await client.connect();

        const db = client.db("hobby-hub");
        const groupCollection = db.collection("groups");

        app.get("/all-groups/:id", async (req, res) => {
            try {
                const groupId = req.params.id;
                const group = await groupCollection.findOne({
                    _id: new ObjectId(groupId),
                });
                if (!group) {
                    return res.json({ message: "Group not found" });
                }
                res.json(group);
            } catch (err) {
                console.log(err);
            }
        });

        app.get("/my-groups/:id", async (req, res) => {
            try {
                const groupId = req.params.id;
                const group = await groupCollection.findOne({
                    _id: new ObjectId(groupId),
                });
                if (!group) {
                    return res.json({ message: "Group not found" });
                }
                res.json(group);
            } catch (err) {
                console.log(err);
            }
        });

        app.get("/all-groups/user/:email", async (req, res) => {
            const email = req.params.email;
            try {
                const groups = await groupCollection
                    .find({ userEmail: email })
                    .toArray();
                res.send(groups);
            } catch (err) {
                console.log(err);
            }
        });

        app.get("/all-groups", async (req, res) => {
            try {
                const groups = await groupCollection.find().toArray();
                res.send(groups);
            } catch (err) {
                console.log(err);
            }
        });

        app.put("/my-groups/:id", async (req, res) => {
            try {
                const groupId = req.params.id;
                const updatedData = req.body;
                const result = await groupCollection.updateOne(
                    { _id: new ObjectId(groupId) },
                    { $set: updatedData }
                );

                if(result.matchedCount){
                    return res.json(updatedData)
                }
            } catch (err) {
                console.log(err);
            }
        });

        app.post("/create-group", async (req, res) => {
            try {
                const group = req.body;
                const existing = await groupCollection.findOne({
                    groupName: group.groupName,
                });
                if (existing) {
                    console.log("Group already exists");
                    return res.json({ message: "Group already Exist" });
                }
                const result = await groupCollection.insertOne(group);
                res.send(result);
                console.log(group);
            } catch (err) {
                console.log(err);
            }
        });

        // Send a ping to confirm a successful connection
        await client.db("admin").command({ ping: 1 });
        console.log(
            "Pinged your deployment. You successfully connected to MongoDB!"
        );
    } finally {
        // Ensures that the client will close when you finish/error
        // await client.close();
    }
}
run().catch(console.dir);

app.get("/", (req, res) => {
    res.send("Hello");
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
