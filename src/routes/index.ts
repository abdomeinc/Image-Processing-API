// import the modules that will be use in here
import express from 'express'
import path from 'path'

// creating a route for index [/api/images]
const routes = express.Router()

// handle the get endpoit for index [/api/images] route
routes.get('/', (req: express.Request, res: express.Response) => {
  // concat html file name
  const htmlFileName: string = path.join(
    __dirname,
    'assets',
    'html',
    'index.html'
  )
  // fix the file name by removing \\routes
  let htmlFixedFileName: string = htmlFileName.replace('routes', '')
  htmlFixedFileName = htmlFixedFileName.replace('build', 'src')
  // send the file to the user
  res.sendFile(htmlFixedFileName)
})

// export the route
export default routes
