import { prisma } from "../../../../database/prismaClient";

interface IUpdateEndDate {
  delivery_id: string;
  deliveryman_id: string;
}

class UpdateEndDateUseCase {
  async execute({ delivery_id, deliveryman_id }: IUpdateEndDate) {
    const delivery = await prisma.deliveries.findFirst({
      where: {
        id: delivery_id,
        deliveryman_id,
      },
    });

    if (!delivery) {
      throw new Error("Delivery does not exist.");
    }

    if (delivery.ended_at) {
      throw new Error("Delivery completed.");
    }

    const updatedDelivery = await prisma.deliveries.update({
      where: {
        id: delivery_id,
      },
      data: {
        ended_at: new Date(),
      },
    });

    return updatedDelivery;
  }
}

export { UpdateEndDateUseCase };
