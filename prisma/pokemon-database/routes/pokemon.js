const router = require("express").Router();
const { PrismaClient } = require("@prisma/client");
const { pokemon } = new PrismaClient();

router.get("/", async (_, res) => {
  const pokemons = await pokemon.findMany({
    select: {
      damage: true,
      defence: true,
      health: true,
      pokemonName: true,
      pokemonId: true,
      weakness: true,
    },
  });
  res.json(pokemons);
});

module.exports = router;