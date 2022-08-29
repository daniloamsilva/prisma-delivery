import { Router } from "express";

import { ensureAuthenticateClient } from "../middlewares/ensureAuthenticateClient";
import { ensureAuthenticateDeliveryman } from "../middlewares/ensureAuthenticateDeliveryman";
import { CreateDeliveryController } from "../modules/deliveries/useCases/createDelivery/CreateDeliveryController";
import { FindAllAvailableDeliveriesController } from "../modules/deliveries/useCases/findAllAvailableDeliveries/FindAllAvailableDeliveriesController";
import { UpdateDeliverymanController } from "../modules/deliveries/useCases/updateDeliveryman/UpdateDeliverymanController";
import { UpdateEndDateController } from "../modules/deliveries/useCases/updateEndDate/UpdateEndDateController";

const deliveriesRoutes = Router();

const createDeliveryController = new CreateDeliveryController();
const findAllAvailableDeliveriesController =
  new FindAllAvailableDeliveriesController();
const updateDeliverymanController = new UpdateDeliverymanController();
const updateEndDateController = new UpdateEndDateController();

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
deliveriesRoutes.put(
  "/updateEndDate/:id",
  ensureAuthenticateDeliveryman,
  updateEndDateController.handle
);

export { deliveriesRoutes };
