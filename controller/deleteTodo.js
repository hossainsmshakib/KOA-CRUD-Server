const deleteId = require('../query/query');

module.exports.deleteTodo = (ctx) => {
  deleteId.delete(ctx.params.id);
  ctx.body="message deleted"
};
