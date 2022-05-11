// import the modules that will be use in here
import express from 'express'
import validateQuery from '../../../utilities/queryValidator'
import { Blur } from '../../../utilities/imageOperations'
import { ParsedQs } from 'qs'

// creating a route for blur
const imagesBlur = express.Router()

// handle the get endpoit for blur route
imagesBlur.get(
  '/',
  validateQuery(['filename', 'sigma']),
  (req: express.Request, res: express.Response) => {
    // get the url data
    const urlData: ParsedQs = req.query
    // get filename value from the url data as string
    const filename: string = urlData.filename as string
    // get sigma value from the url data as number
    const sigma: number = parseInt(urlData.sigma as string)
    // call the function Blur to do a blur effect on the selected image
    Blur(filename, sigma).then(function (result) {
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
export default imagesBlur
