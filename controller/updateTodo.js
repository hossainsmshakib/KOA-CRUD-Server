const updateId = require('../query/query');

module.exports.updateTodo = async(ctx) => {
  ctx.body =await updateId.update(ctx.params.id, ctx.request.body);
  ctx.body="message Updated.";
};
