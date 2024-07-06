const postodo = require('../query/query');

module.exports.postTodo = async (ctx) => {
  const todo = ctx.request.body;

  const result = await postodo.set(todo);

  ctx.body = result;
};
