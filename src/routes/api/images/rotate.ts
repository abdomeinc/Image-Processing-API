// import the modules that will be use in here
import express from 'express'
import validateQuery from '../../../utilities/queryValidator'
import { Rotate } from '../../../utilities/imageOperations'
import { ParsedQs } from 'qs'

// creating a route for rotate
const imagesRotate = express.Router()

// handle the get endpoit for rotate route
imagesRotate.get(
  '/',
  validateQuery(['filename', 'angle']),
  (req: express.Request, res: express.Response) => {
    // get the url data
    const urlData: ParsedQs = req.query
    // get filename value from the url data as string
    const filename: string = urlData.filename as string
    // get angle value from the url data as number
    const angle: number = parseInt(urlData.angle as string)
    // call the function Rotate to rotate the selected image
    Rotate(filename, angle).then(function (result) {
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
export default imagesRotate
