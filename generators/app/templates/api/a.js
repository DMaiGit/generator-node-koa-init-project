const a = async (ctx, next) => {
  
  ctx.body = {
    status: 'ok',
    message: 'hello module a'
  }
  next()
}

module.exports = {
  a
}