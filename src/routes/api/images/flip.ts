// import the modules that will be use in here
import express from 'express'
import validateQuery from '../../../utilities/queryValidator'
import { Flip } from '../../../utilities/imageOperations'
import { ParsedQs } from 'qs'

// creating a route for flip
const imagesFlip = express.Router()

// handle the get endpoit for flip route
imagesFlip.get(
  '/',
  validateQuery(['filename']),
  (req: express.Request, res: express.Response) => {
    // get the url data
    const urlData: ParsedQs = req.query
    // get filename value from the url data as string
    const filename: string = urlData.filename as string
    // call the function Flip to flip the selected image
    Flip(filename).then(function (result) {
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
export default imagesFlip
