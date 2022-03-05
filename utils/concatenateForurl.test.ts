import { concatenateForUrl } from './concatenateForUrl'

describe('concatenateForUrl', () => {
  it('should return macbook-pro-m1-2020-13-inch', () => {
    const desc = 'MacBook Pro M1 2020 13-inch'
    const toUrlDesc = concatenateForUrl(desc)
    expect(toUrlDesc).toBe('macbook-pro-m1-2020-13-inch')
  })

  it('should return iphone-13-pro-128-gb-sierra-blue', () => {
    const desc = 'Iphone 13 Pro 128 GB Sierra Blue'
    const toUrlDesc = concatenateForUrl(desc)
    expect(toUrlDesc).toBe('iphone-13-pro-128-gb-sierra-blue')
  })

  it('should return nike-air-force-1-07-blue-fury', () => {
    const desc = 'Nike Air Force 1 "07 Blue Fury'
    const toUrlDesc = concatenateForUrl(desc)
    expect(toUrlDesc).toBe('nike-air-force-1-"07-blue-fury')
  })

  it('should return dumbbbells-(2-3-5-8-12-lb)', () => {
    const desc = 'Dumbbbells (2-3-5-8-12 LB)'
    const toUrlDesc = concatenateForUrl(desc)
    expect(toUrlDesc).toBe('dumbbbells-(2-3-5-8-12-lb)')
  })
})
