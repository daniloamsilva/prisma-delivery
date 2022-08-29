import { prisma } from "../../../../database/prismaClient";

interface IFindAllDeliveries {
  client_id: string;
}

class FindAllDeliveriesUseCase {
  async execute({ client_id }: IFindAllDeliveries) {
    const client = await prisma.clients.findUnique({
      where: { id: client_id },
      include: {
        deliveries: true,
      },
    });

    if (!client) {
      throw new Error("Client does not exist.");
    }

    return client.deliveries;
  }
}

export { FindAllDeliveriesUseCase };
