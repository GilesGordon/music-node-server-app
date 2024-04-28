import * as dao from "./dao.js";

export default function TokenRoutes(app) {
    const updateToken = async (req, res) => {
        const token = req.body
        console.log(token)
        const status = await dao.updateToken(token)
        res.json(status);
    };

    const getToken = async (req, res) => {
        const token = await dao.getToken()
        res.json(token);
    };
    
    // app.post("/api/token", createToken);
    app.get("/api/token", getToken);
    app.put("/api/token", updateToken);
}