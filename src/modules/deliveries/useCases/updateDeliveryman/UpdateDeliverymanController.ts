import { Request, Response } from "express";

import { UpdateDeliverymanUseCase } from "./UpdateDeliverymanUseCase";

class UpdateDeliverymanController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { deliveryman_id } = request;
    const { id: delivery_id } = request.params;

    const updateDeliverymanUseCase = new UpdateDeliverymanUseCase();

    const result = await updateDeliverymanUseCase.execute({
      delivery_id,
      deliveryman_id,
    });

    return response.json(result);
  }
}

export { UpdateDeliverymanController };
