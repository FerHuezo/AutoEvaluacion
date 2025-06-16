import TasksModel from "../models/Tasks.js";

const tasksController = {};

tasksController.getTask = async (req, res) => {
  try {
    const task = await TasksModel.find();
    res.status(200).json(task);
  } catch (error) {
    console.log("Error" + error);
    res.status(500).json({ message: "Error finding tasks" });
  }
};

tasksController.postTask = async (req, res) => {
  const { title, description, isCompleted } = req.body;

  try {
    if (!title || !description || !isCompleted) {
      return res.status(400).json({ message: "Ingrese todos los datos" });
    }

    if (title.length < 4 || description.length < 4) {
      return res.status(400).json({ message: "Debe tener al menos 4 caracteres" });
    }

    const newTask = new TasksModel({
        title,
        description,
        isCompleted
    });

    newTask.save();

    res.status(200).json({ message: "Task saved" });
  } catch (error) {
    console.log("Error" + error);
    res.status(400).json({ message: "Error saving" });
  }
};

tasksController.putTask = async (req, res) => {
  try {
    const { title, description, isCompleted} = req.body;

    const updatedTask = await TasksModel.findByIdAndUpdate(
      req.params.id,
      { title, description, isCompleted},
      { new: true }
    );

    if (!updatedTask) {
      return res.status(400).json({ message: "Task not found" });
    }

    res.status(200).json({ message: "Task updated successfully" });
  } catch (error) {
    console.log("error" + error);
    res.status(400).json({ message: "Error updating faqs" });
  }
};

tasksController.deleteTask = async (req, res) => {
  try {
    const deletedTask = await TasksModel.findByIdAndDelete(req.params.id);

    if (!deletedTask) {
      return res.status(400).json({ message: "Task not found" });
    }

    res.status(200).json({ message: "Task deleted" });
  } catch (error) {
    console.log("error" + error);
    res.status(400).json({ message: "error" });
  }
};

export default tasksController;