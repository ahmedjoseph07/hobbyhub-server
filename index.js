const express = require("express");
require("dotenv").config();
const cors = require("cors");
const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");

const app = express();
const port = process.env.PORT || 3000;

app.use(
    cors({
        origin: "https://hobby-hub-5915a.web.app",
        methods: ["GET", "POST", "PUT", "DELETE"],
        credentials: true,
    })
);

app.use(express.json());

let groupCollection;

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.egi2zh7.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    },
});

async function run() {
    try {
        await client.connect();
        const db = client.db("hobby-hub");
        groupCollection = db.collection("groups");
        await db.command({ ping: 1 });
        console.log("Connected to DB");
    } catch (err) {
        console.error("MongoDB connection failed:", err);
    }
}
run().catch(console.dir);

app.get("/", (req, res) => {
    res.send("🚀 Hobby Hub Server is running!");
});

app.get("/all-groups", async (req, res) => {
    try {
        const groups = await groupCollection.find().toArray();
        res.json(groups);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Internal Server Error" });
    }
});

app.get("/all-groups/:id", async (req, res) => {
    try {
        const group = await groupCollection.findOne({ _id: new ObjectId(req.params.id) });
        if (!group) return res.status(404).json({ message: "Group not found" });
        res.json(group);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Internal Server Error" });
    }
});

app.get("/all-groups/user/:email", async (req, res) => {
    try {
        const groups = await groupCollection.find({ userEmail: req.params.email }).toArray();
        res.json(groups);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Internal Server Error" });
    }
});

app.post("/create-group", async (req, res) => {
    try {
        const group = req.body;
        const existing = await groupCollection.findOne({ groupName: group.groupName });
        if (existing) return res.status(409).json({ message: "Group already exists" });

        const result = await groupCollection.insertOne(group);
        res.status(201).json(result);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Internal Server Error" });
    }
});

app.put("/my-groups/:id", async (req, res) => {
    try {
        const result = await groupCollection.updateOne(
            { _id: new ObjectId(req.params.id) },
            { $set: req.body }
        );
        if (result.matchedCount === 0) {
            return res.status(404).json({ message: "Group not found" });
        }
        res.json({ message: "Group updated", updatedData: req.body });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Internal Server Error" });
    }
});

app.delete("/my-groups/:id", async (req, res) => {
    try {
        const result = await groupCollection.deleteOne({ _id: new ObjectId(req.params.id) });
        if (result.deletedCount === 0) {
            return res.status(404).json({ message: "Group not found" });
        }
        res.json({ message: "Group deleted" });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Internal Server Error" });
    }
});

app.use((req, res) => {
    res.status(404).json({ message: "Route not found" });
});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
