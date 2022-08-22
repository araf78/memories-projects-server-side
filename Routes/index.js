import  express from "express";
import bodyParser from "body-parser";
import  cors  from "cors";
import mongoose from "mongoose";

const app = express();

app.use(bodyParser.json({limit:"30mb", extended:true}));
app.use(bodyParser.urlencoded({limit:"30mb", extended:true}));
app.use(cors());

const PORT = process.env.PORT || 5000;

// user: memories1 memory12
// pass:xpxMFVa6ogJtqwrI IJu0C0dmPdnKbOZ7

const CONNECTION_URL = "mongodb+srv://memory12:IJu0C0dmPdnKbOZ7@cluster0.qgjngak.mongodb.net/?retryWrites=true&w=majority";
// const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

mongoose.connect(CONNECTION_URL, { useNewUrlParser:true, useUnifiedTopology: true})
.then(() => app.listen( PORT, ()=> console.log(`Memories projects is running: `)))
.catch((error) => console.log(error.message));

// mongoose.set('useFindAndModify', false );