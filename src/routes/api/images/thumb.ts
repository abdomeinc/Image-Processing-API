// import the modules that will be use in here
import express from 'express'
import fs from 'fs'
import createPage from '../../../utilities/thumbPage'

// creating a route for rotate
const imagesThumbsDirectory = express.Router()

// handle the get endpoit for rotate route
imagesThumbsDirectory.get(
  '/',
  (req: express.Request, res: express.Response) => {
    // set the thumbs directory path related to the project
    let thumbsPath: string = './src/assets/images/thumb'
    // if(__dirname.endsWith('\\src\\routes\\api\\images')){
    //   thumbsPath = './src/assets/images/thumb'
    // }
    // else if(__dirname.endsWith('\\build\\routes\\api\\images')){
    //   thumbsPath = './build/assets/images/thumb'
    // }
    thumbsPath = thumbsPath.replace('build', 'src')
    // using file system module to read directory files
    fs.readdir(thumbsPath, (err, files) => {
      // if there an error print it and send it to the user
      if (err) {
        console.log(err)
        res.send(err)
      } else {
        // if no errors, then call createPage and pass the files array
        createPage(files).then(function (pageContent) {
          // send the page content to the user
          res.send(pageContent)
        })
      }
    })
  }
)

// export the route
export default imagesThumbsDirectory
