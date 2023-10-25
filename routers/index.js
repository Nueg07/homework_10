const routers = require('express').Router()
const { viewControler, modelcontroler } = require('../controller')
const multer = require('../middleware/multer')

routers.get('/', viewControler.renderHomePage)
routers.get('/succes', viewControler.renderSuccesPage)

routers.get('api/v1/actors', modelcontroler.getActors)
routers.post('api/v1/actors', modelcontroler.addActors)
routers.post('/api/v1/uploads', multer.single('photo'), modelcontroler.upload)

module.export = routers