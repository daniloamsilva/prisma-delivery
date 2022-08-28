import { Router } from "express";

import { AuthenticateDeliverymanController } from "../modules/account/authenticateDeliveryman/AuthenticateDeliverymanController";
import { CreateDeliverymanController } from "../modules/deliverymen/useCases/CreateDeliverymanController";

const deliverymenRoutes = Router();

const createDeliverymanController = new CreateDeliverymanController();
const authenticateDeliverymanController =
  new AuthenticateDeliverymanController();

deliverymenRoutes.post("/", createDeliverymanController.handle);
deliverymenRoutes.post(
  "/authenticate",
  authenticateDeliverymanController.handle
);

export { deliverymenRoutes };
