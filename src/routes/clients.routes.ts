import { Router } from "express";

import { AuthenticateClientController } from "../modules/account/authenticateClient/AuthenticateClientController";
import { CreateClientController } from "../modules/clients/useCases/createClient/CreateClientController";

const clientsRoutes = Router();

const createClientController = new CreateClientController();
const authenticateClientController = new AuthenticateClientController();

clientsRoutes.post("/", createClientController.handle);
clientsRoutes.post("authenticate", authenticateClientController.handle);

export { clientsRoutes };
