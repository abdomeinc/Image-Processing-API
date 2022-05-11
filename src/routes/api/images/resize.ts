// import the modules that will be use in here
import express from 'express'
import validateQuery from '../../../utilities/queryValidator'
import { Resize } from '../../../utilities/imageOperations'
import { ParsedQs } from 'qs'

// creating a route for resize
const imagesResize = express.Router()

// handle the get endpoit for resize route
imagesResize.get(
  '/',
  validateQuery(['filename', 'height', 'width']),
  (req: express.Request, res: express.Response) => {
    // get the url data
    const urlData: ParsedQs = req.query
    // get filename value from the url data as string
    const filename: string = urlData.filename as string
    // get width value from the url data as number
    const imgWidth: number = parseInt(urlData.width as string)
    // get width value from the url data as number
    const imgHeight: number = parseInt(urlData.height as string)
    // call the function Resize to resize the selected image
    Resize(filename, imgWidth, imgHeight).then(function (result) {
      // if result is success send the image file as a response
      if (result[0] === 'success') {
        res.sendFile(result[1])
      } else {
        // if result is error send the error message as a response
        res.send(result[1])
      }
    })
  }
)
// export the route
export default imagesResize
