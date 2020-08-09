// Servidor
const express = require('express')
const server = express()

const {pageLanding, pageStudy, pageGiveClass, saveClasses} = require('./pages')

// Configurar nunjucks (template engine)
const nunjucks = require('nunjucks') 
nunjucks.configure('src/views', {
    express: server,
    noCache: true,
})

// Início e configuração do servidor
server
.use(express.urlencoded({ extended: true }))
.use(express.static("public"))
.get("/", pageLanding)
.get("/study", pageStudy)
.get("/give-classes", pageGiveClass)
.post("/save-classes", saveClasses)
// Start do servidor
.listen(5500)