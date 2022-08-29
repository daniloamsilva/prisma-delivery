import { Router } from "express";

import { ensureAuthenticateClient } from "../middlewares/ensureAuthenticateClient";
import { AuthenticateClientController } from "../modules/account/authenticateClient/AuthenticateClientController";
import { CreateClientController } from "../modules/clients/useCases/createClient/CreateClientController";
import { FindAllDeliveriesController } from "../modules/clients/useCases/findAllDeliveries/FindAllDeliveriesController";

const clientsRoutes = Router();

const createClientController = new CreateClientController();
const authenticateClientController = new AuthenticateClientController();
const findAllDeliveriesController = new FindAllDeliveriesController();

clientsRoutes.post("/", createClientController.handle);
clientsRoutes.post("/authenticate", authenticateClientController.handle);
clientsRoutes.get(
  "/deliveries",
  ensureAuthenticateClient,
  findAllDeliveriesController.handle
);

export { clientsRoutes };
