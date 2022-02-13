const router = require("express").Router();
const { PrismaClient } = require("@prisma/client");
const { user } = new PrismaClient();

router.post("/insertUser", async (req, res) => {
  const { username, gender } = req.body;
  const userExists = await user.findUnique({
    where: {
      username,
    },
    select: {
      username: true,
    },
  });

  if (userExists) {
    return res.status(400).send("user already exists!");
  }

  const newUser = await user.create({
    data: {
      username: username,
      gender: gender,
    },
  });

  res.json(newUser);
});

router.get("/", async (req, res) => {
  const users = await user.findMany({
    select: {
      username: true,
      gender: true,
      id: true,
    },
  });
  res.json(users);
});

module.exports = router;
