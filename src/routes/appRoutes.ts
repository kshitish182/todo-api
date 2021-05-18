
import express from "express";
import client from "../db";

const appRouter = express.Router();

function displayTable() {
  return client.select('*').from('users');
}

appRouter.get("/", async (req, res) => {
  const result = await displayTable();
  console.table(result);
  res.send("hello world");
});

export default appRouter;
