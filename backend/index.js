import express from "express";
import axios from "axios";
const app = express();
import cors from "cors";
import crypto from "crypto";
import mongoose, {Collection} from "mongoose";
const cryptomus = axios.create({
  baseURL: "https://api.cryptomus.com/v1/",
});

const DEFAULT_CURRENCY = "USD";
// create a invoice
mongoose
  .connect(
    "mongodb+srv://:password@temp.zsulayp.mongodb.net/?retryWrites=true&w=majority&appName=temp"
  )
  .then(console.log("COnnected to db"));

const createInvoice = async (amount) => {
  try {
    const data = {
      amount: amount,
      currency: DEFAULT_CURRENCY,
      order_id: crypto.randomBytes(12).toString("hex"),
      url_callback: "asdfasdflkasdf",
      url_success: "https://nft-market-place-cyan.varsel.app",
    };

    const sign = crypto
      .createHash("md5")
      .update(Buffer.from(JSON.stringify(data)).toString("base64"))
      .digest("hex");

    const headers = {
      merchant: "adsfasdfsdf",
      sign,
    };

    const response = await cryptomus.post("/payment", data);
  } catch (error) {
    console.log(error);
    throw error;
  }
};

app.use(cors());
app.get("/", (req, res) => {
  res.send("Hellow dsfa");
});

app.post("/checkout", async (req, res) => {
  try {
    const {amount} = req.body;
    const invoice = await createInvoice(amount);
    const data = {
      ...req.body,
      order_id: invoice.result.order_id,
      payment_status: invoice.result.status,
    };
    const result = await Collection.insertOne(data);

    const response = {
      invoice,
      mongodbResult: result,
    };

    res.json(response);
  } catch (error) {
    console.log(error);
  }
});

app.listen(4000, () => {
  console.log("SErver running");
});
