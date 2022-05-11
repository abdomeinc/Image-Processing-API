// import the modules that will be use in here
import apiListen from '../../../../app'
import request, { get } from 'request'
import log from '../../../../utilities/systemLogger'

// define, declare and assign urls that will be used for test purpose
const resizeUrl =
  'http://localhost:5050/api/images/resize?filename=photo20.jpg&height=200&width=200'
const flipUrl = 'http://localhost:5050/api/images/flip?filename=photo20.jpg'
const flopUrl = 'http://localhost:5050/api/images/flop?filename=photo20.jpg'
const rotateUrl =
  'http://localhost:5050/api/images/rotate?filename=photo20.jpg&angle=90'
const blurUrl =
  'http://localhost:5050/api/images/blur?filename=photo20.jpg&sigma=5'
const thumbUrl = 'http://localhost:5050/api/images/thumbs'
// apiListen()
describe('Test Api Endpoints', () => {
  beforeAll(() => {
    // eslint-disable-next-line no-unused-expressions
    apiListen
  })

  afterAll(() => {
    apiListen.close()
  })

  describe('Test Resize Api Endpoint [http://localhost:5050/api/images/resize]', () => {
    it('returns status code 200', function (done) {
      get(resizeUrl, function (error, response: request.Response, body) {
        expect(response.statusCode).toBe(200)
        if (response.statusCode !== 200 && error) {
          log('error:' + error) // Print the error if one occurred
          log('body:' + body) // Print the HTML for the page.
        }
        done()
      })
    })
  })

  describe('Test Flip Api Endpoint [http://localhost:5050/api/images/flip]', () => {
    it('returns status code 200', function (done) {
      get(flipUrl, function (error, response: request.Response, body) {
        expect(response.statusCode).toBe(200)
        if (response.statusCode !== 200 && error) {
          log('error:' + error) // Print the error if one occurred
          log('body:' + body) // Print the HTML for the page.
        }
        done()
      })
    })
  })

  describe('Test Flop Api Endpoint [http://localhost:5050/api/images/flop]', () => {
    it('returns status code 200', function (done) {
      get(flopUrl, function (error, response: request.Response, body) {
        expect(response.statusCode).toBe(200)
        if (response.statusCode !== 200 && error) {
          log('error:' + error) // Print the error if one occurred
          log('body:' + body) // Print the HTML for the page.
        }
        done()
      })
    })
  })

  describe('Test Blur Api Endpoint [http://localhost:5050/api/images/blur]', () => {
    it('returns status code 200', function (done) {
      get(blurUrl, function (error, response: request.Response, body) {
        expect(response.statusCode).toBe(200)
        if (response.statusCode !== 200 && error) {
          log('error:' + error) // Print the error if one occurred
          log('body:' + body) // Print the HTML for the page.
        }
        done()
      })
    })
  })

  describe('Test Rotate Api Endpoint [http://localhost:5050/api/images/rotate]', () => {
    it('returns status code 200', function (done) {
      get(rotateUrl, function (error, response: request.Response, body) {
        expect(response.statusCode).toBe(200)
        if (response.statusCode !== 200 && error) {
          log('error:' + error) // Print the error if one occurred
          log('body:' + body) // Print the HTML for the page.
        }
        done()
      })
    })
  })

  describe('Test Thumbs Api Endpoint [http://localhost:5050/api/images/thumbs]', () => {
    it('returns status code 200', function (done) {
      get(thumbUrl, function (error, response: request.Response, body) {
        expect(response.statusCode).toBe(200)
        if (response.statusCode !== 200 && error) {
          log('error:' + error) // Print the error if one occurred
          log('body:' + body) // Print the HTML for the page.
        }
        done()
      })
    })
  })
})
