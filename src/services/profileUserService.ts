import prismaClient from "../prisma";

const profileUserService = async (user_id: string) => {
  const user = await prismaClient.user.findFirst({ where: { id: user_id } });

  return user;
};

export { profileUserService };
