import { Request, Response } from "express";

import { FindAllDeliveriesUseCase } from "./FindAllDeliveriesUseCase";

class FindAllDeliveriesController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { deliveryman_id } = request;

    const findAllDeliveriesUseCase = new FindAllDeliveriesUseCase();
    const result = await findAllDeliveriesUseCase.execute({ deliveryman_id });

    return response.json(result);
  }
}

export { FindAllDeliveriesController };
