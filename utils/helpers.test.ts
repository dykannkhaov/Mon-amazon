import { convertToStars } from './helpers'

describe('convertToStars', () => {
  it('should return an array of full', () => {
    const fakeRating = 3
    const stars = convertToStars(fakeRating, 3)
    expect(stars).toEqual(['full', 'full', 'full'])
  })
  it('should return an array of empty', () => {
    const fakeRating = 0
    const stars = convertToStars(fakeRating)
    expect(stars).toEqual(['empty', 'empty', 'empty', 'empty', 'empty'])
  })
  it('should return a mixed array of full, half and empty', () => {
    const fakeRating = 2.5
    const stars = convertToStars(fakeRating)
    expect(stars).toEqual(['full', 'full', 'half', 'empty', 'empty'])
  })

  it('should return a mixed array of full, half and empty', () => {
    const fakeRating = 1.5
    const stars = convertToStars(fakeRating)
    expect(stars).toEqual(['full', 'half', 'empty', 'empty', 'empty'])
  })

  it('should return a mixed array of full, half and empty', () => {
    const fakeRating = 3.5
    const stars = convertToStars(fakeRating)
    expect(stars).toEqual(['full', 'full', 'full', 'half', 'empty'])
  })

  it('should return a mixed array of full, half and empty', () => {
    const fakeRating = 4.5
    const stars = convertToStars(fakeRating)
    expect(stars).toEqual(['full', 'full', 'full', 'full', 'half'])
  })
})
