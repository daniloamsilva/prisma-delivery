import { Router } from "express";

import { ensureAuthenticateDeliveryman } from "../middlewares/ensureAuthenticateDeliveryman";
import { AuthenticateDeliverymanController } from "../modules/account/authenticateDeliveryman/AuthenticateDeliverymanController";
import { CreateDeliverymanController } from "../modules/deliverymen/useCases/createDeliveryman/CreateDeliverymanController";
import { FindAllDeliveriesController } from "../modules/deliverymen/useCases/findAllDeliveries/FindAllDeliveriesController";

const deliverymenRoutes = Router();

const createDeliverymanController = new CreateDeliverymanController();
const authenticateDeliverymanController =
  new AuthenticateDeliverymanController();
const findAllDeliveriesController = new FindAllDeliveriesController();

deliverymenRoutes.post("/", createDeliverymanController.handle);
deliverymenRoutes.post(
  "/authenticate",
  authenticateDeliverymanController.handle
);
deliverymenRoutes.get(
  "/deliveries",
  ensureAuthenticateDeliveryman,
  findAllDeliveriesController.handle
);

export { deliverymenRoutes };
