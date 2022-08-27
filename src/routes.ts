import { Router } from "express";

import { CreateClientController } from "./modules/clients/useCases/createClient/CreateClienteController";

const router = Router();

const createClientController = new CreateClientController();

router.post("/clients", createClientController.handle);

export { router };
