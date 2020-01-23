const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')
const consola = require('consola')
const { Nuxt, Builder } = require('nuxt')
const mongoose = require('mongoose')
const app = express()
const config = require('../nuxt.config.js')

require('dotenv').config()


// Import and Set Nuxt.js options

config.dev = process.env.NODE_ENV !== 'production'

async function start() {
  // Init Nuxt.js
  const nuxt = new Nuxt(config)

  const { host, port } = nuxt.options.server


  // Build only in dev mode
  if (config.dev) {
    const builder = new Builder(nuxt)
    await builder.build()
  } else {
    await nuxt.ready()
  }

  // Set middleware
  app.use(morgan('combined'))
  app.use(bodyParser.json())
  app.use(cors())

  const uri = process.env.DB_URI
  mongoose.connect(uri,{ useNewUrlParser: true, useCreateIndex: true})
  let db = mongoose.connection
  db.on("error", console.error.bind(console, "connection error"))
  db.once("open", function(callback){
    console.log("Connection Succeeded")
  })

  // Give nuxt middleware to express
  app.use(nuxt.render)



  app.listen(port, host)
  consola.ready({
    message: `Server listening on http://${host}:${port}`,
    badge: true
  })
}
start()
