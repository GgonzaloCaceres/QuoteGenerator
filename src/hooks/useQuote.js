import { useState, useEffect } from 'react'
import { getRandomQuote } from '../services/getQuotes'

const useQuote = () => {
  const [quoteState, setQuoteState] = useState({
    data: {
      text: '',
      author: '',
      genre: ''
    },
    error: null,
    loading: true
  })
  console.log(quoteState)
  useEffect(() => {
    try {
      setTimeout(() => getRandomQuote().then(handleQuote), 1000)
    } catch (error) {
      console.log(quoteState)
      setQuoteState(lastValues => ({
        ...lastValues,
        error: true
      }))
    }
  }, [])

  const handleQuote = data =>
    setQuoteState(lastValues => ({
      ...lastValues,
      loading: false,
      data
    }))

  return quoteState
}

export default useQuote
