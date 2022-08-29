import { Request, Response } from "express";

import { UpdateEndDateUseCase } from "./UpdateEndDateUseCase";

class UpdateEndDateController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { deliveryman_id } = request;
    const { id: delivery_id } = request.params;

    const updateEndDateUseCase = new UpdateEndDateUseCase();
    const result = await updateEndDateUseCase.execute({
      delivery_id,
      deliveryman_id,
    });

    return response.json(result);
  }
}

export { UpdateEndDateController };
