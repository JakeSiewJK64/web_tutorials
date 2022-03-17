const router = require("express").Router();
const { PrismaClient } = require("@prisma/client");
const { weakness } = new PrismaClient();

router.get("/", async (req, res) => {
  const { page, pageSize } = req.body;

  const weaknesses = await weakness.findMany({
    select: {
      type: true,
      pokemon: true,
      typeName: true,
      weaknessId: true,
      pokemonId: true,
    },
  });
  const firstIndex = (page - 1) * pageSize;
  const lastIndex = page * pageSize;
  res.json(weaknesses.splice(firstIndex, lastIndex));
});

module.exports = router;
