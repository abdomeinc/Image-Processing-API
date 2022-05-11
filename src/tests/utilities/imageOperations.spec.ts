import {
  Resize,
  Flip,
  Flop,
  Blur,
  Rotate,
  fixInputFileName
} from '../../utilities/imageOperations'

describe('Unit Tests for Image Operations', () => {
  beforeEach(async function () {
    // await someLongSetupFunction();
  })
  it('expect Resize image photo1.jpg return success', () => {
    return Resize('photo1.jpg', 250, 250).then(function (result) {
      expect(result[0]).toEqual('success')
    })
  })

  it('expect Flip image photo2.jpg return success', () => {
    return Flip('photo2.jpg').then(function (result) {
      expect(result[0]).toEqual('success')
    })
  })

  it('expect Flop image photo3.jpg return success', () => {
    return Flop('photo3.jpg').then(function (result) {
      expect(result[0]).toEqual('success')
    })
  })

  it('expect Rotate image photo4.jpg return success', () => {
    return Rotate('photo4.jpg', 180).then(function (result) {
      expect(result[0]).toEqual('success')
    })
  })

  it('expect Blur image photo5.jpg return success', () => {
    return Blur('photo5.jpg', 5).then(function (result) {
      expect(result[0]).toEqual('success')
    })
  })
})

describe('Unit Tests for Image path fix', () => {
  it('expect fixInputFileName photo6.jpg return apth ends with \\src\\assets\\images\\full\\photo6.jpg', () => {
    return Resize('photo6.jpg', 250, 250).then(function (result) {
      expect(fixInputFileName('photo6.jpg')).toContain(
        '\\src\\assets\\images\\full\\photo6.jpg'
      )
    })
  })
})
