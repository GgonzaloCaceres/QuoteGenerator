import { useEffect, useState } from 'react'
import style from './Quote.module.css'

const URL = 'https://quote-garden.onrender.com/api/v3/quotes'

const Quote = () => {
  const [quote, setQuote] = useState('')

  useEffect(() => {
    fetch(URL, {})
      .then(d => d.json())
      .then(({ data }) => setQuote(data[0].quoteText))
  }, [])

  return (
    <div className={style.quoteContainer}>
      <p>{quote}</p>
    </div>
  )
}

export default Quote
