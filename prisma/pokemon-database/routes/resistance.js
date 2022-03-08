const router = require("express").Router();
const { PrismaClient } = require("@prisma/client");
const { resistance, pokemon, type } = new PrismaClient();
const excel = require("exceljs");
const path = require("path");

router.get("/", async (_, res) => {
  const resistances = await resistance.findMany({
    select: {
      resistanceType: true,
      pokemon: true,
    },
  });
  res.json(resistances);
});

router.post("/insertResistance", async (req, res) => {
  const { pokemonResistanceType, pokemonId } = req.body;

  const typeExists = await type.findUnique({
    select: {
      type: true,
    },
    where: {
      type: pokemonResistanceType,
    },
  });

  const pokemonExist = await pokemon.findUnique({
    select: {
      pokemonId: true,
    },
    where: {
      pokemonId: pokemonId,
    },
  });

  if (pokemonExist && typeExists) {
    const resp = await resistance.create({
      data: {
        resistanceType: typeExists.type,
        pokemonId: pokemonExist.pokemonId,
      },
    });
    res.json(resp);
  }
});

router.get("/exportResistance", async (req, res) => {
  const resistances = await resistance.findMany({
    select: {
      type: true,
      pokemon: true,
    },
  });

  const fileName = "resistance_pokemon.xlsx";
  const workbook = new excel.Workbook();
  const worksheet = workbook.addWorksheet("resistance");
  const filePath = `./${fileName}`;
  worksheet.columns = [
    { header: "Type", key: "type", width: 10 },
    { header: "PokemonName", key: "pokemonName", width: 32 },
  ];

  resistances.forEach((element) => {
    worksheet.addRow({
      type: element.type.type,
      pokemonName: element.pokemon.pokemonName,
    });
  });

  workbook.xlsx.writeFile(filePath);

  res.sendFile(path.resolve("./resistance_pokemon.xlsx"));
});

module.exports = router;
