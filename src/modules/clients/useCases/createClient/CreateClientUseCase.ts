import { hash } from "bcryptjs";

import { prisma } from "../../../../database/prismaClient";

interface ICreateClient {
  username: string;
  password: string;
}

class CreateClientUseCase {
  async execute({ username, password }: ICreateClient) {
    const clientAlreadyExists = await prisma.clients.findFirst({
      where: {
        username: {
          contains: username,
          mode: "insensitive",
        },
      },
    });

    if (clientAlreadyExists) {
      throw new Error("Client already exists.");
    }

    const client = await prisma.clients.create({
      data: {
        username,
        password: await hash(password, 10),
      },
      select: {
        id: true,
        username: true,
      },
    });

    return client;
  }
}

export { CreateClientUseCase };
