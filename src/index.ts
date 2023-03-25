import express from "express";
import cors from "cors";
import { authRoute } from "./routes/authentication-router.js";

const app = express();
app.use(cors());
app.use(express.json());
app.use(authRoute)

app.listen(4000, ()=>{
    console.log("Server rodando na porta 4000")
})

