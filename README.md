# Egy-FWD-Image-Processing-API-Project
 EGY-FWD Image Processing API Project

[About]
 This is an API that can be used in two different ways. As a simple placeholder API, the first allows you to place images into your frontend with the size set via URL parameters (and additional stylization if you choose) for rapid prototyping. The second use case is as a library to serve properly scaled versions of your images to the front end to reduce page load size. Rather than needing to resize and upload multiple copies of the same image to be used throughout your site, the API you create will handle resizing and serving stored images for you.

[Note]
node_modules & build folders are deleted, you need to run npm install before you build the project

[Command's]
To build the project: run ('npm run build') command
To use prettier check: run ('npm run prettier') command
To use eslint check: run ('npm run eslint') command
To use jasmine test: run ('npm run test') command
To run build, pretteir, eslint and jasmine: run ('npm run check') command
To start the server development env: run ('npm run start-ts')
To start the server production env: run ('npm run start-js')

[Endpoints]
1- 'http://localhost:5050'
    API Home Endpoint 

2- 'http://localhost:5050/api/images/resize?filename=photo20.jpg&height=200&width=200'
    Resize image enpoint

3- 'http://localhost:5050/api/images/flip?filename=photo20.jpg'
    Flip image enpoint

4- 'http://localhost:5050/api/images/flop?filename=photo20.jpg'
    Flop image enpoint

5- 'http://localhost:5050/api/images/rotate?filename=photo20.jpg&angle=90'
    Rotate image enpoint

6- 'http://localhost:5050/api/images/blur?filename=photo20.jpg&sigma=5'
    Blur image enpoint

7- 'http://localhost:5050/api/images/thumbs'
    Thumbs directory enpoint

[Functions]
1- src/utilities/imageOperations/Resize
    Doing a resize to the image.

2- src/utilities/imageOperations/Flip
    Doing a flip to the image.

3- src/utilities/imageOperations/Flop
    Doing a flop to the image.

4- src/utilities/imageOperations/Rotate
    Doing a rotate to the image.

5- src/utilities/imageOperations/Blur
    Doing a blur to the image.

6- src/utilities/imageOperations/fixInputFileName
    Fixing input image file path.

7- src/utilities/imageOperations/fixOutputFileName
    Fixing output image file path.

8- src/utilities/queryValidator/isDigits
    Checking if input is only digits.

9- src/utilities/queryValidator/validateQuery
    Validating query parameters to meet endpoint needed data.

10- src/utilities/thumbPage/createPage
    Creating HTML string to display thumbs images.