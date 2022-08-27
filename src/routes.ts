import { Router } from "express";

import { AuthenticateClientController } from "./modules/account/authenticateClient/AuthenticateClientController";
import { CreateClientController } from "./modules/clients/useCases/createClient/CreateClienteController";

const router = Router();

const createClientController = new CreateClientController();
const authenticateClientController = new AuthenticateClientController();

router.post("/clients", createClientController.handle);
router.post("/clients/authenticate", authenticateClientController.handle);

export { router };
