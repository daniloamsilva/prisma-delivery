import { Router } from "express";

import { ensureAuthenticateClient } from "../middlewares/ensureAuthenticateClient";
import { CreateDeliveryController } from "../modules/deliveries/useCases/createDelivery/CreateDeliveryController";
import { FindAllAvailableDeliveriesController } from "../modules/deliveries/useCases/findAllAvailableDeliveries/FindAllAvailableDeliveriesController";

const deliveriesRoutes = Router();

const createDeliveryController = new CreateDeliveryController();
const findAllAvailableDeliveriesController =
  new FindAllAvailableDeliveriesController();

deliveriesRoutes.post(
  "/",
  ensureAuthenticateClient,
  createDeliveryController.handle
);
deliveriesRoutes.get("/available", findAllAvailableDeliveriesController.handle);

export { deliveriesRoutes };
