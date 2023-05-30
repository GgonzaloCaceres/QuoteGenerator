import { useState, useEffect } from 'react'
import { getRandomQuote, getMoreQuotes } from '../services/getQuotes'

const useQuote = () => {
  const randomQuote = () => {
    const [randomQuoteState, setRandomQuoteState] = useState({
      data: {
        text: '',
        author: '',
        genre: ''
      },
      error: null,
      loading: true
    })

    const handleRandomQuote = (data, error) =>
      setRandomQuoteState(lastValues => ({
        error,
        loading: false,
        data
      }))

    useEffect(() => {
      const abortController = new AbortController()
      try {
        getRandomQuote().then(data => handleRandomQuote(data, null))
      } catch (error) {
        handleRandomQuote(null, error)
      }
      return () => abortController.abort()
    }, [])

    return randomQuoteState
  }

  return { randomQuote }
}

export default useQuote
