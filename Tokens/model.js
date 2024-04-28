import mongoose from "mongoose";
import schema from "./schema.js";
const model = mongoose.model("TokenModel", schema);
export default model;