const rovarsprak = require('./lib/rovarsprak')
const {json, send, createError} = require('micro')

module.exports = async (req, res) => {
  try {
    const {text} = await json(req)
    if (!text) throw createError(400, 'Provide a text param in the body')
    
    const gibberish = rovarsprak(text)
    res.setHeader('Content-Type', 'application/json; charset=utf-8')
    send(res, 200, {text: gibberish})

  } catch ({statusCode, message}) {
    return send(res, statusCode, {error: message})
  }
  
}