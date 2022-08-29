import { prisma } from "../../../../database/prismaClient";

class FindAllAvailableDeliveriesUseCase {
  async execute() {
    const deliveries = await prisma.deliveries.findMany({
      where: {
        deliveryman_id: null,
        ended_at: null,
      },
    });

    return deliveries;
  }
}

export { FindAllAvailableDeliveriesUseCase };
