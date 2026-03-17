const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const Transaction = require("./models/Transaction");

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://127.0.0.1:27017/transactions")
  .then(() => console.log("Database Connected"))
  .catch((err) => console.log(err));

app.get("/", (req, res) => {
  res.send("API Running Successfully");
});

// CREATE
app.post("/api/transactions", async (req, res) => {
  try {
    console.log("Incoming data:", req.body);

    const { amount, type, category } = req.body;

    const isFraud = amount > 10000;

    const newTransaction = new Transaction({
      amount,
      type,
      category,
      isFraud
    });

    await newTransaction.save();

    console.log("Saved to DB:", newTransaction);

    res.status(201).json(newTransaction);
  } catch (error) {
    console.log("Error:", error);
    res.status(500).json({ error: error.message });
  }
});

// READ ALL
app.get("/api/transactions", async (req, res) => {
  try {
    const transactions = await Transaction.find().sort({ date: -1 });
    res.status(200).json(transactions);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// READ FRAUD ONLY
app.get("/api/fraud", async (req, res) => {
  try {
    const fraudTransactions = await Transaction.find({ isFraud: true }).sort({ date: -1 });
    res.status(200).json(fraudTransactions);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// UPDATE
app.put("/api/transactions/:id", async (req, res) => {
  try {
    const { amount, type, category } = req.body;

    const isFraud = amount > 10000;

    const updatedTransaction = await Transaction.findByIdAndUpdate(
      req.params.id,
      {
        amount,
        type,
        category,
        isFraud
      },
      { new: true }
    );

    if (!updatedTransaction) {
      return res.status(404).json({ message: "Transaction not found" });
    }

    res.status(200).json(updatedTransaction);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// DELETE
app.delete("/api/transactions/:id", async (req, res) => {
  try {
    const deletedTransaction = await Transaction.findByIdAndDelete(req.params.id);

    if (!deletedTransaction) {
      return res.status(404).json({ message: "Transaction not found" });
    }

    res.status(200).json({
      message: "Transaction deleted successfully",
      deletedTransaction
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});