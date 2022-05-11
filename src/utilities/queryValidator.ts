import express from 'express'
import log from './systemLogger'

function isDigits (input: string): boolean {
  return /^\d+$/.test(input)
}

function validateQuery (fields: string[]) {
  return (req: express.Request, res: express.Response, next: Function) => {
    for (const field of fields) {
      if (!req.query[field]) {
        log(`${field} is missing`)
        return res.status(400).send(`${field} is missing`)
      } else {
        switch (field) {
          case 'height':
            if (!isDigits(req.query.height as string)) {
              log(`${field} is not a valid number`)
              return res.status(400).send('height is not a valid number')
            }
            break
          case 'width':
            if (!isDigits(req.query.width as string)) {
              log(`${field} is not a valid number`)
              return res.status(400).send('width is not a valid number')
            }
            break
          case 'angle':
            if (!isDigits(req.query.angle as string)) {
              log(`${field} is not a valid number`)
              return res.status(400).send('angle is not a valid number')
            }
            break
          case 'sigma':
            if (!isDigits(req.query.sigma as string)) {
              log(`${field} is not a valid number`)
              return res.status(400).send('sigma is not a valid number')
            }
            break
        }
      }
    }
    next()
  }
}

export default validateQuery
