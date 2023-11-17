import { Router } from "express";
import { getAllRoupas,getRoupasById, createRoupas, updateRoupas, deleteRoupas } from "../controllers/roupas.controller.js"

const estoqueRoupasRoutes = Router();

estoqueRoupasRoutes.get ("/", getAllRoupas);
estoqueRoupasRoutes.get ("/:id", getRoupasById);
estoqueRoupasRoutes.post ("/", createRoupas);
estoqueRoupasRoutes.put ("/:id", updateRoupas);
estoqueRoupasRoutes.delete ("/:id", deleteRoupas);

export default estoqueRoupasRoutes;