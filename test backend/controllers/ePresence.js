import Epresence from "../models/epresence.js";
import Users from "../models/userModels.js";
import jwt from "jsonwebtoken";

export const getAll = async (req, res) => {
  try {
    const epresence = await Epresence.findAll({
      attributes: ["id", "id_user", "type", "is_approve", "waktu"],
      include: [
        {
          model: Users, // will create a left join
        },
      ],
    });
    res.json(epresence);
  } catch (error) {
    console.log(error.message);
  }
};

export const createOne = async (req, res) => {
  const refreshToken = req.cookies.refreshToken;
  if (!refreshToken) return res.sendStatus(204);
  console.log(refreshToken);

  const user = await Users.findAll({
    where: {
      refresh_token: refreshToken,
    },
  });

  if (!user[0]) return res.sendStatus(204);

  const userId = user[0].id;
  // console.log(userId);
  try {
    await Epresence.create({
      id_user: userId,
      type: ["IN", "OUT"],
      is_approve: Boolean,
      waktu: new Date.now(),
    });
    res.json({ message: "Register Berhasil" });
  } catch (error) {
    console.log(error);
  }
};
