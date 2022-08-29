import { hash } from "bcryptjs";

import { prisma } from "../../../../database/prismaClient";

interface ICreateDeliveryman {
  username: string;
  password: string;
}

class CreateDeliverymanUseCase {
  async execute({ username, password }: ICreateDeliveryman) {
    const deliverymanAlreadyExists = await prisma.deliverymen.findFirst({
      where: {
        username: {
          contains: username,
          mode: "insensitive",
        },
      },
    });

    if (deliverymanAlreadyExists) {
      throw new Error("Deliveryman already exists.");
    }

    const deliveryman = await prisma.deliverymen.create({
      data: {
        username,
        password: await hash(password, 10),
      },
      select: {
        id: true,
        username: true,
      },
    });

    return deliveryman;
  }
}

export { CreateDeliverymanUseCase };
