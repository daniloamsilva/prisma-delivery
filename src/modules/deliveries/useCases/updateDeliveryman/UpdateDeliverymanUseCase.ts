import { prisma } from "../../../../database/prismaClient";

interface IUpdateDeliveryman {
  delivery_id: string;
  deliveryman_id: string;
}

class UpdateDeliverymanUseCase {
  async execute({ delivery_id, deliveryman_id }: IUpdateDeliveryman) {
    const delivery = await prisma.deliveries.findUnique({
      where: { id: delivery_id },
    });

    if (!delivery) {
      throw new Error("Delivery does not exist.");
    }

    if (delivery.deliveryman_id || delivery.ended_at) {
      throw new Error("Delivery isn't available.");
    }

    const deliveryman = await prisma.deliverymen.findUnique({
      where: { id: deliveryman_id },
    });

    if (!deliveryman) {
      throw new Error("Deliveryman does not exist.");
    }

    const updatedDelivery = await prisma.deliveries.update({
      where: { id: delivery_id },
      data: { deliveryman_id },
    });

    return updatedDelivery;
  }
}

export { UpdateDeliverymanUseCase };
