const router = require("express").Router();
const { PrismaClient } = require("@prisma/client");
const { resistance } = new PrismaClient();

router.get("/", async (_, res) => {
  const resistances = await resistance.findMany({
    select: {
      resistanceType: true,
      pokemon: true,
    },
  });
  res.json(resistances);
});

module.exports = router;
