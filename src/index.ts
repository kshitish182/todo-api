import express from "express";
import appRouter from "./routes/appRoutes";

const app = express();

app.use("/", appRouter);

app.listen(5000, () => console.log("Listening to port 5000"));
