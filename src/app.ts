// import the modules that will be use in here
import express from 'express'
import routes from './routes'
import imagesResize from './routes/api/images/resize'
import imagesFlip from './routes/api/images/flip'
import imagesFlop from './routes/api/images/flop'
import imagesRotate from './routes/api/images/rotate'
import imagesBlur from './routes/api/images/blur'
import imagesThumbsDirectory from './routes/api/images/thumb'
import path from 'path'

const api = express()
const apiHost: string = 'localhost'
const apiPort: number = 5050
const apiBackLog: number = 100

const serverOnListen = (): void => {
  console.log('Server is now listening at http://%s:%s', apiHost, apiPort)
}

const apiListen = api.listen(apiPort, apiHost, apiBackLog, serverOnListen)

api.use('/', routes)
api.use('/api/images/resize', imagesResize)
api.use('/api/images/flip', imagesFlip)
api.use('/api/images/flop', imagesFlop)
api.use('/api/images/blur', imagesBlur)
api.use('/api/images/rotate', imagesRotate)
api.use('/api/images/thumbs', imagesThumbsDirectory)

api.use(
  express.static(
    path.join(__dirname.replace('build', 'src'), '/').replace('build', 'src')
  )
)
api.use(
  '/full',
  express.static(
    path
      .join(__dirname.replace('build', 'src'), '/assets/images/full')
      .replace('build', 'src')
  )
)
api.use(
  '/thumb',
  express.static(
    path
      .join(__dirname.replace('build', 'src'), '/assets/images/thumb')
      .replace('build', 'src')
  )
)

export default apiListen
