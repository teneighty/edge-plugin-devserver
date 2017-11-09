#!/usr/bin/env node

const {main} = require('../lib/index')

let config = {
  apiKey: 'c5bb330b64ab2fef8cbe67066b22c49b39bf9cdc',
  appId: '',
  authServer: 'https://auth.airbitz.co/',
  directory: '/tmp/',
  username: 'teneighty-edge3',
  password: 'Airbitz@3060',
}


main(3000, config)
