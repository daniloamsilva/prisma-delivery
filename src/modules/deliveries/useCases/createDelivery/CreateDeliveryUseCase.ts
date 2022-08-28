import { prisma } from "../../../../database/prismaClient";

interface ICreateDelivery {
  item_name: string;
  client_id: string;
}

class CreateDeliveryUseCase {
  async execute({ item_name, client_id }: ICreateDelivery) {
    const client = await prisma.clients.findUnique({
      where: { id: client_id },
    });

    if (!client) {
      throw new Error("Client doesn't exist.");
    }

    const delivery = await prisma.deliveries.create({
      data: {
        item_name,
        client_id,
      },
    });

    return delivery;
  }
}

export { CreateDeliveryUseCase };
