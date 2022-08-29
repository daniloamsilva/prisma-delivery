import { Request, Response } from "express";

import { FindAllDeliveriesUseCase } from "./FindAllDeliveriesUseCase";

class FindAllDeliveriesController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { client_id } = request;

    const findAllDeliveriesUseCase = new FindAllDeliveriesUseCase();
    const result = await findAllDeliveriesUseCase.execute({ client_id });

    return response.json(result);
  }
}

export { FindAllDeliveriesController };
