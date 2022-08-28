import { Request, Response } from "express";

import { CreateDeliveryUseCase } from "./CreateDeliveryUseCase";

class CreateDeliveryController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { item_name, client_id } = request.body;

    const createDeliveryUseCase = new CreateDeliveryUseCase();

    const result = await createDeliveryUseCase.execute({
      item_name,
      client_id,
    });

    return response.json(result);
  }
}

export { CreateDeliveryController };
