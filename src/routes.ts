import { Router } from "express";

import { AuthenticateClientController } from "./modules/account/authenticateClient/AuthenticateClientController";
import { CreateClientController } from "./modules/clients/useCases/createClient/CreateClientController";
import { CreateDeliverymanController } from "./modules/deliverymen/useCases/CreateDeliverymanController";

const router = Router();

const createClientController = new CreateClientController();
const authenticateClientController = new AuthenticateClientController();
const createDeliverymanController = new CreateDeliverymanController();

router.post("/clients", createClientController.handle);
router.post("/clients/authenticate", authenticateClientController.handle);
router.post("/deliverymen", createDeliverymanController.handle);

export { router };
