import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken";

import { prisma } from "../../../database/prismaClient";

interface IAuthenticateDeliveryman {
  username: string;
  password: string;
}

class AuthenticateDeliverymanUseCase {
  async execute({ username, password }: IAuthenticateDeliveryman) {
    const client = await prisma.deliverymen.findFirst({
      where: { username },
    });

    if (!client) {
      throw new Error("Username or password are incorrect.");
    }

    const passwordMatch = await compare(password, client.password);

    if (!passwordMatch) {
      throw new Error("Username or password are incorrect.");
    }

    return {
      token: sign({ username }, process.env.APP_DELIVERYMAN_SECRET as string, {
        subject: client.id,
        expiresIn: "1d",
      }),
    };
  }
}

export { AuthenticateDeliverymanUseCase };
