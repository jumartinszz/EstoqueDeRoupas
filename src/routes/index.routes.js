import { Router } from "express";
import roupasroutes from "./roupas.routes.js";

const rotas = Router();

rotas.use("/roupas", roupasroutes);

rotas.get("/", (req, res) => {
return res.status(200).send({ message: "Servidor OK" });
});

export default rotas;