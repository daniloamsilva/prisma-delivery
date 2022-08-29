import { Router } from "express";

import { ensureAuthenticateClient } from "../middlewares/ensureAuthenticateClient";
import { ensureAuthenticateDeliveryman } from "../middlewares/ensureAuthenticateDeliveryman";
import { CreateDeliveryController } from "../modules/deliveries/useCases/createDelivery/CreateDeliveryController";
import { FindAllAvailableDeliveriesController } from "../modules/deliveries/useCases/findAllAvailableDeliveries/FindAllAvailableDeliveriesController";
import { UpdateDeliverymanController } from "../modules/deliveries/useCases/updateDeliveryman/UpdateDeliverymanController";

const deliveriesRoutes = Router();

const createDeliveryController = new CreateDeliveryController();
const findAllAvailableDeliveriesController =
  new FindAllAvailableDeliveriesController();
const updateDeliverymanController = new UpdateDeliverymanController();

deliveriesRoutes.post(
  "/",
  ensureAuthenticateClient,
  createDeliveryController.handle
);
deliveriesRoutes.get(
  "/available",
  ensureAuthenticateDeliveryman,
  findAllAvailableDeliveriesController.handle
);
deliveriesRoutes.put(
  "/updateDeliveryman/:id",
  ensureAuthenticateDeliveryman,
  updateDeliverymanController.handle
);

export { deliveriesRoutes };
