const express = require('express')

const app = express()

const isUserLoggedIn = (req, res, next) => {
  const isLoggedIn = false; // Test
  if(isLoggedIn) {
    next()
  } else {
    res.json({
      message: "You've not logged in! Please login"
    })
  }
}

// app.use(isUserLoggedIn) // Applied middleware to all routes

const USERS = [
  {
    id: 1,
    name: 'Sachin',
    batchNo: 10,
    city: 'Maharashtra'
  },
  {
    id: 2,
    name: 'Priti',
    batchNo: 11,
    city: 'Bangalore'
  },
  {
    id: 3,
    name: 'Sahil',
    batchNo: 12,
    city: 'Chennai'
  }
]

app.get('/', (req, res) => {
  res.json({
    status: 'SUCCESS',
    time: new Date()
  })
})

app.get('/users', (req, res) => {
  res.json(USERS)
})

// Private
app.get('/about', isUserLoggedIn, (req, res) => {
  res.sendFile(__dirname + '/html/about.html')
})

app.get('/download/contract', (req, res) => {
  res.download(__dirname + '/contract.pdf')
})

app.get('/about-us', (req, res) => {
  res.redirect('/about')
})

app.listen(3000, () => {
  console.log('Server is ready top use :)')
})






















/*
  # Setup:
  - npm init -y: Initialize a node repository
  - npm i express: Install express.js

  # Node.js basic server
  const { createServer } = require('node:http');

  const server = createServer((req, res) => {
    res.end('Our first server :)');
  });

  server.listen(3000, () => {
    console.log('Server is running :)');
  });

  # Express.js: Node.js framework

  # Response methods:
    - send(): Generic data
    - json(): JSON data
    - sendFile(): Returning HTML files
    - download(): Download server asset

  # HTTP Methods: (#Future: REST API)
    - GET (READ)
    - POST (CREATE)
    - PUT/PATCH (UPDATE)
    - DELETE (DELETE)

  # Extra code:
    app.get('/users/even', (req, res) => {
      res.send(USERS.filter(user => user.batchNo % 2 == 0))
    })

    app.get('/users/custom1', (req, res) => {
      res.send(USERS.filter(user => user.name.length == 5))
    })

    app.get('/contact', (req, res) => {
      res.sendFile(__dirname + '/html/contact.html')
    })
  
  # Middleware: (#Future: Authentication & Authorization)
    - In between client and server
    - A function which has access to request coming from client and response going back from the server
*/