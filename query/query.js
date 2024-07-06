const db = require('../model/index');

module.exports.get = async () => {
  const res = await db.todo.findAll();
  return res;
};
module.exports.set = async (todo) => {
  try {
    const createTodo = await db.todo.create({
      name: todo.name,
      description: todo.description,
      time: todo.time,
      done: todo.done,
    });
    return createTodo;
  } catch (e) {
    console.log(e);
  }
};

module.exports.delete = async (id) => {
  await db.todo.destroy({
    where: {
      id: id,
    },
  });
};
module.exports.update = async (id, up) => {
  try {
    const updatedValue = await db.todo.update(up, {
      where: {
        id: id,
      },
    });
    return updatedValue;
  } catch (error) {
    return 'id not found';
  }
};
