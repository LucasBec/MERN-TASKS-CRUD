import User from "../models/user.model.js";
import bcrypt from "bcryptjs";

import { createAccessToken } from "../libs/jwt.js";

export const register = async (req, res) => {
  const { email, password, username, rol } = req.body;
  //console.log({email, password, username})

  try {
    const passwordHash = await bcrypt.hash(password, 10); //encriptar constraseña

    const newUser = new User({
      username,
      email,
      password: passwordHash,
      rol,
    });

    const savedUser = await newUser.save();

    const token = await createAccessToken({
      id: savedUser._id,
      rol: savedUser.rol,
    });

    res.cookie("token", token);
    res.json({
      id: savedUser._id,
      username: savedUser.username,
      email: savedUser.email,
      rol: savedUser.rol,
      createdAt: savedUser.createdAt,
      updatedAt: savedUser.updatedAt,
    }); //respuesta con el nuevo usuario

    console.log(newUser);
  } catch (error) {
    console.log(error);
  }
};

export const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const UserFound = await User.findOne({ email });

    if (!UserFound) {
      return res.status(400).json({ msg: "Usuario no encontrado" }); //respuesta si no escuentra usuario
    }

    const isPassword = await bcrypt.compare(password, UserFound.password); //comparar contraseñas

    if (!isPassword) {
      return res.status(400).json({ msg: "Contraseña incorrecta" });
    }

    const token = await createAccessToken({
      //creación de token con id y rol del usuario
      id: UserFound._id,
      rol: UserFound.rol,
    });

    res.cookie("token", token);
    res.json({
      id: UserFound._id,
      username: UserFound.username,
      email: UserFound.email,
      rol: UserFound.rol,
      createdAt: UserFound.createdAt,
      updatedAt: UserFound.updatedAt,
    }); //respuesta
    console.log("Sesion iniciada como", UserFound.rol);
  } catch (error) {
    console.log(error.message);
  }
};

export const logout = async (req, res) => {
  res.cookie("token", "", { expires: new Date(0) }); //quitar token cookie y expirarlo
  res.json({ msg: "Sesión terminada" });
  console.log("sesion terminada");
  return res.status(200);
};

export const profile = async (req, res) => {
  const userFound = await User.findById(req.user.id);
  if (!userFound) {
    return res.status(404).json({ msg: "Usuario no encontrado" });
  }

  return res.json({
    id: userFound._id,
    username: userFound.username,
    email: userFound.email,
    rol: userFound.rol,
    createdAt: userFound.createdAt,
    updatedAt: userFound.updatedAt,
  });
};
