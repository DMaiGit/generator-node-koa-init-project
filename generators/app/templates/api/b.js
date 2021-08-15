const b = async (ctx, next) => {
  ctx.body = {
    status: 'ok',
    message: 'hello module b'
  }
  next()
}

module.exports = {
  b
}