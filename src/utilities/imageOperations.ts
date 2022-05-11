import sharp from 'sharp'
import fs from 'fs'
import path from 'path'
import log from './systemLogger'

export const Resize = (
  filename: string,
  width: number,
  height: number
): Promise<string[]> => {
  const inputFileName: string = fixInputFileName(filename)
  const outputFileName: string = fixOutputFileName(
    '_resize_' + width.toString() + 'x' + height.toString() + '_' + filename
  )
  const result: string[] = ['false', 'Unknown Error!']
  const options = {
    kernel: sharp.kernel.nearest,
    fit: sharp.fit.fill,
    position: 'center',
    background: { r: 255, g: 255, b: 255, alpha: 0.5 }
  }
  return new Promise((resolve) => {
    try {
      if (fs.existsSync(outputFileName)) {
        result[0] = 'success'
        result[1] = outputFileName
        log(
          `The user asked to resize the image ${inputFileName}, But it was found it in the thumbs folder and has been returned it back to the user.`
        )
        resolve(result)
      } else {
        if (fs.existsSync(inputFileName)) {
          sharp(inputFileName)
            .resize(width, height, options)
            .toFile(outputFileName)
            .then(() => {
              result[0] = 'success'
              result[1] = outputFileName
              log(
                `The user asked to resize the image ${inputFileName}, So it is resized now and has been saved to thumbs folder and returned it back to the user.`
              )
              resolve(result)
            })
        } else {
          result[0] = 'error'
          result[1] = 'Sorry, File not found...'
          log(
            `The user asked to resize the image ${inputFileName}, Which is not exists in the images/full folder.`
          )
          resolve(result)
        }
      }
    } catch (err) {
      console.error(err)
      result[0] = 'error'
      result[1] = err as string
      log(
        `The user asked to resize the image ${inputFileName}, But an error occured ${
          err as string
        }.`
      )
      resolve(result)
    }
  })
}

export const Flip = (filename: string): Promise<string[]> => {
  const inputFileName: string = fixInputFileName(filename)
  const outputFileName: string = fixOutputFileName('_flip_' + filename)
  const result: string[] = ['false', 'Unknown Error!']
  return new Promise((resolve) => {
    try {
      if (fs.existsSync(outputFileName)) {
        result[0] = 'success'
        result[1] = outputFileName
        log(
          `The user asked to flip the image ${inputFileName}, But it was found it in the thumbs folder and has been returned it back to the user.`
        )
        resolve(result)
      } else {
        if (fs.existsSync(inputFileName)) {
          sharp(inputFileName)
            .flip()
            .toFile(outputFileName)
            .then(() => {
              result[0] = 'success'
              result[1] = outputFileName
              log(
                `The user asked to flip the image ${inputFileName}, So it is fliped now and has been saved to thumbs folder and returned it back to the user.`
              )
              resolve(result)
            })
        } else {
          result[0] = 'error'
          result[1] = 'Sorry, File not found...'
          log(
            `The user asked to flip the image ${inputFileName}, Which is not exists in the images/full folder.`
          )
          resolve(result)
        }
      }
    } catch (err) {
      console.error(err)
      result[0] = 'error'
      result[1] = err as string
      log(
        `The user asked to flip the image ${inputFileName}, But an error occured ${
          err as string
        }.`
      )
      resolve(result)
    }
  })
}

export const Flop = (filename: string): Promise<string[]> => {
  const inputFileName: string = fixInputFileName(filename)
  const outputFileName: string = fixOutputFileName('_flop_' + filename)
  const result: string[] = ['false', 'Unknown Error!']
  return new Promise((resolve) => {
    try {
      if (fs.existsSync(outputFileName)) {
        result[0] = 'success'
        result[1] = outputFileName
        log(
          `The user asked to flop the image ${inputFileName}, But it was found it in the thumbs folder and has been returned it back to the user.`
        )
        resolve(result)
      } else {
        if (fs.existsSync(inputFileName)) {
          sharp(inputFileName)
            .flop()
            .toFile(outputFileName)
            .then(() => {
              result[0] = 'success'
              result[1] = outputFileName
              log(
                `The user asked to flop the image ${inputFileName}, So it is floped now and has been saved to thumbs folder and returned it back to the user.`
              )
              resolve(result)
            })
        } else {
          result[0] = 'error'
          result[1] = 'Sorry, File not found...'
          log(
            `The user asked to flop the image ${inputFileName}, Which is not exists in the images/full folder.`
          )
          resolve(result)
        }
      }
    } catch (err) {
      console.error(err)
      result[0] = 'error'
      result[1] = err as string
      log(
        `The user asked to flop the image ${inputFileName}, But an error occured ${
          err as string
        }.`
      )
      resolve(result)
    }
  })
}

export const Blur = (filename: string, sigma: number): Promise<string[]> => {
  const inputFileName: string = fixInputFileName(filename)
  const outputFileName: string = fixOutputFileName(
    '_blur_' + sigma.toString() + '_' + filename
  )
  const result: string[] = ['false', 'Unknown Error!']
  return new Promise((resolve) => {
    try {
      if (fs.existsSync(outputFileName)) {
        result[0] = 'success'
        result[1] = outputFileName
        log(
          `The user asked to blur the image ${inputFileName}, But it was found it in the thumbs folder and has been returned it back to the user.`
        )
        resolve(result)
      } else {
        if (fs.existsSync(inputFileName)) {
          sharp(inputFileName)
            .blur(sigma)
            .toFile(outputFileName)
            .then(() => {
              result[0] = 'success'
              result[1] = outputFileName
              log(
                `The user asked to blur the image ${inputFileName}, So it is blured now and has been saved to thumbs folder and returned it back to the user.`
              )
              resolve(result)
            })
        } else {
          result[0] = 'error'
          result[1] = 'Sorry, File not found...'
          log(
            `The user asked to blur the image ${inputFileName}, Which is not exists in the images/full folder.`
          )
          resolve(result)
        }
      }
    } catch (err) {
      console.error(err)
      result[0] = 'error'
      result[1] = err as string
      log(
        `The user asked to blur the image ${inputFileName}, But an error occured ${
          err as string
        }.`
      )
      resolve(result)
    }
  })
}

export const Rotate = (filename: string, angle: number): Promise<string[]> => {
  const inputFileName: string = fixInputFileName(filename)
  const outputFileName: string = fixOutputFileName(
    '_rotate_' + angle.toString() + '_' + filename
  )
  const result: string[] = ['false', 'Unknown Error!']
  return new Promise((resolve) => {
    try {
      if (fs.existsSync(outputFileName)) {
        result[0] = 'success'
        result[1] = outputFileName
        log(
          `The user asked to rotate the image ${inputFileName}, But it was found it in the thumbs folder and has been returned it back to the user.`
        )
        resolve(result)
      } else {
        if (fs.existsSync(inputFileName)) {
          sharp(inputFileName)
            .rotate(angle)
            .toFile(outputFileName)
            .then(() => {
              result[0] = 'success'
              result[1] = outputFileName
              log(
                `The user asked to rotate the image ${inputFileName}, So it is rotated now and has been saved to thumbs folder and returned it back to the user.`
              )
              resolve(result)
            })
        } else {
          result[0] = 'error'
          result[1] = 'Sorry, File not found...'
          log(
            `The user asked to rotate the image ${inputFileName}, Which is not exists in the images/full folder.`
          )
          resolve(result)
        }
      }
    } catch (err) {
      console.error(err)
      result[0] = 'error'
      result[1] = err as string
      log(
        `The user asked to rotate the image ${inputFileName}, But an error occured ${
          err as string
        }.`
      )
      resolve(result)
    }
  })
}

export const fixInputFileName = (filename: string): string => {
  const inputFile: string = path.join(
    __dirname + 'assets',
    'images',
    'full',
    filename as string
  )
  const inputFileName: string = inputFile.replace(
    path.join('routes', 'api', 'images'),
    ''
  )
  return inputFileName
    .replace(path.join('', 'utilities'), '')
    .replace('build', 'src')
}

export const fixOutputFileName = (filename: string): string => {
  const outputFile: string = path.join(
    __dirname + 'assets',
    'images',
    'thumb',
    filename as string
  )
  const outputFileName: string = outputFile.replace(
    path.join('routes', 'api', 'images'),
    ''
  )
  return outputFileName
    .replace(path.join('', 'utilities'), '')
    .replace('build', 'src')
}
