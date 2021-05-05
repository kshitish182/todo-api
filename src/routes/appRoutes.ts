
import express from "express";

const appRouter = express.Router();

appRouter.get("/", (req, res) => res.send("hello world"));

export default appRouter;
