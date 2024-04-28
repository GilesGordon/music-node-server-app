import model from "./model.js";
export const createToken = (token) => {return model.create(token);}  
export const getToken = () => model.findOne();
export const updateToken = (token) =>  model.updateOne({ $set: token });