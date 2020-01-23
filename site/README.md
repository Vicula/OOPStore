# OOPStore

> My exquisite Nuxt.js project

## Build Setup

``` bash
# install dependencies
$ yarn install

# To start Mongo Server
# In a new Terminal tab run

$ mongod

# This will start your mongoDB Server

# In another new tab run

$ mongo

# This will start your mediator and connect to your Database
# You should see an accepted message in the orignal tab
# Go back to your mongo shell and run

$ db

# This will print out all your avaliable Databases and prove connection is succesful

# serve with hot reload at localhost:3000
$ yarn dev

# build for production and launch server
$ yarn build
$ yarn start

# generate static project
$ yarn generate
```

## Mongo commands

```bash
# Create a new collection
$ db.createCollection("collection-name")

```

For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org).
