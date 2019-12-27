const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')
const consola = require('consola')
const { Nuxt, Builder } = require('nuxt')
const mongoose = require('mongoose')
const fileWalker = require('../helpers/filewalker')
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

  let path = 'server/routes'

  // Give nuxt middleware to express
  await app.use(nuxt.render)

  fileWalker(path,(err,data)=>{
    if (err) throw err
    data.map((path)=>{
      if(path.includes('index.js')){
        let router = require('.'+path.split('/server')[1])
        app.use('/api'+path.split('/routes')[1].split('/index.js')[0],router)
      }
    })
  })



  app.listen(port, host)
  consola.ready({
    message: `Server listening on http://${host}:${port}`,
    badge: true
  })
}
start()
