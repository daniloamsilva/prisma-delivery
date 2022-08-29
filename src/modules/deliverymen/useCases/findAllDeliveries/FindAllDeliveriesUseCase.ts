import { prisma } from "../../../../database/prismaClient";

interface IFindAllDeliveries {
  deliveryman_id: string;
}

class FindAllDeliveriesUseCase {
  async execute({ deliveryman_id }: IFindAllDeliveries) {
    const deliveryman = await prisma.deliverymen.findUnique({
      where: { id: deliveryman_id },
      include: {
        deliveries: true,
      },
    });

    if (!deliveryman) {
      throw new Error("Client does not exist.");
    }

    return deliveryman.deliveries;
  }
}

export { FindAllDeliveriesUseCase };
