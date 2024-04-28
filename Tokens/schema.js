import mongoose from "mongoose";
const tokenSchema = new mongoose.Schema({
    access_token: { type: String, required: true },
    refresh_token: { type: String, required: true },

  },
  { collection: "tokens" });
export default tokenSchema;