import express from "express";
import cors from "cors";
import { authRoute } from "./routes/authentication-router.js";
import { userRoute } from "./routes/userCount-router.js";
import { menuRoute } from "./routes/menu-router.js";

const app = express();
app.use(cors());
app.use(express.json());
app.use(authRoute);
app.use(userRoute);
app.use(menuRoute);

app.listen(4000, ()=>{
    console.log("Server rodando na porta 4000")
})

