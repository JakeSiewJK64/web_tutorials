const router = require("express").Router();
const { PrismaClient } = require("@prisma/client");
const { post, user } = new PrismaClient();

router.post("/insertPost", async (req, res) => {
  const { title, userid } = req.body;

  const userExist = await user.findUnique({
    where: {
      id: userid,
    },
  });

  const postExist = await post.findMany({
    where: {
      title,
    },
    select: {
      title: true,
    },
  });

  if (postExist.length > 0) {
    return res.status(400).json({
      msg: `a post of a similar name exists!`,
    });
  } else if (!userExist) {
    return res.status(400).json({
      msg: `User of id ${userid} does not exist!`,
    });
  }

  const newPost = await post.create({
    data: {
      title: title,
      userid: userid,
    },
  });

  res.json(newPost);
});

router.get("/", async (req, res) => {
  const posts = await post.findMany();
  res.json(posts);
});

module.exports = router;
