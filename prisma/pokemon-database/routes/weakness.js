const router = require("express").Router();
const { PrismaClient } = require("@prisma/client");
const { weakness } = new PrismaClient();

router.get("/", async (_, res) => {
  const weaknesses = await weakness.findMany({
    select: {
      type: true,
      pokemon: true,
      typeName: true,
      weaknessId: true,
      pokemonId: true,
    },
  });
  res.json(weaknesses);
});

module.exports = router;
