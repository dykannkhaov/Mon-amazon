type Star = 'full' | 'half' | 'empty'

function convertToStars(rate: number, length = 5): Array<Star> {
  return Array(length)
    .fill(null)
    .map((item, index) => {
      if (index < Math.floor(rate)) return 'full'
      else if (!Number.isInteger(rate) && Math.floor(rate) === index) return 'half'
      return 'empty'
    })
}

export { convertToStars }
export type { Star }
