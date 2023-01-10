export const createUserControl = async (req, res) => {
  const { firstName, lastName, email, password } = req.body;

  const result = await prisma.user.create({
    data: {
      firstName,
      lastName,
      email,
      password,
    },
  });

  res.json(result);
};
