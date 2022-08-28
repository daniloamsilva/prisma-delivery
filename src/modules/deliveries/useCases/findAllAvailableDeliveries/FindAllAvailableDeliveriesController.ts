import { Request, Response } from "express";

import { FindAllAvailableDeliveriesUseCase } from "./FindAllAvailableDeliveriesUseCase";

class FindAllAvailableDeliveriesController {
  async handle(request: Request, response: Response): Promise<Response> {
    const findAllAvailableDeliveriesUseCase =
      new FindAllAvailableDeliveriesUseCase();

    const result = await findAllAvailableDeliveriesUseCase.execute();

    return response.json(result);
  }
}

export { FindAllAvailableDeliveriesController };
