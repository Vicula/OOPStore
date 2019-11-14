const express = require('express')
const consola = require('consola')
const { Nuxt, Builder } = require('nuxt')
const app = express()
const MongoClient = require('mongodb').MongoClient
const config = require('../nuxt.config.js')
// const apiRouter = require('../routes/apiRoutes.js')

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

  // Give nuxt middleware to express
  app.use(nuxt.render)

  // Init MongoDB
  MongoClient.connect(
    'mongodb+srv://admin:admin@cluster0-qeezr.mongodb.net/test?retryWrites=true&w=majority',
    (err, client) => {
      if (err) return consola.error(err)
      // Listen the server
      app.listen(port, host)
      consola.ready({
        message: `Server listening on http://${host}:${port}`,
        badge: true
      })
    }
  )

  // app.use('/api', apiRouter)
}
start()
