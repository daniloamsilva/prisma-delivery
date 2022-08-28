import { prisma } from "../../../../database/prismaClient";

class FindAllAvailableDeliveriesUseCase {
  async execute() {
    const deliveries = await prisma.deliveries.findMany({
      where: {
        ended_at: null,
      },
    });

    return deliveries;
  }
}

export { FindAllAvailableDeliveriesUseCase };
