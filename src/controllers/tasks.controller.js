import Task from "../models/task.model.js";

export const createTask = async (req, res) => {
  const { title, description, finishDate } = req.body;
  const newTask = new Task({
    title,
    description,
    user: req.user.id,
    finishDate,
  });

  try {
    const savedTask = await newTask.save();
    res.json(savedTask);
    console.log("Tarea creada exitosamente");
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
    console.log("error al crear la tarea");
  }
};

export const getTasks = async (req, res) => {
  try {
    const tasks = await Task.find({
      user: req.user.id,
    }).populate("user", "-password -email -__v"); // el -password oculta el campo al hacer un get de tasks
    res.json(tasks);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
    console.log("error al obtener las tareas");
  }
};

export const getTaskById = async (req, res) => {
  try {
    const task = await Task.findById(req.params.id);
    res.json(task);
    console.log("Tarea obtenida exitosamente");
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
    console.log("tarea no encontrada");
  }
};

export const deleteTask = async (req, res) => {
  try {
    await Task.findByIdAndDelete(req.params.id);
    console.log("Tarea eliminada");
    return res.sendStatus(204);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
    console.log("tarea no encontrada");
  }
};

export const updateTask = async (req, res) => {
  try {
    const task = await Task.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.json(task);
    console.log("Tarea actualizada");
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
    console.log("error al actuaizar la tarea");
  }
};
