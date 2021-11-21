import { convertToStars } from '../utils/helpers'
import { BsStarFill, BsStarHalf, BsStar } from 'react-icons/bs'

function Rating({ rate }) {
  return (
    <p className="flex sm:justify-center xl:justify-start">
      {convertToStars(rate).map((star, index) => {
        if (star === 'full') return <BsStarFill key={index} className="text-yellow-500" />
        else if (star === 'half') return <BsStarHalf key={index} className="text-yellow-500" />
        return <BsStar key={index} className="text-yellow-500" />
      })}
    </p>
  )
}

export default Rating
