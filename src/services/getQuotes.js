export const getRandomQuote = () => {
  const URL = 'https://quote-garden.onrender.com/api/v3/quotes/random'

  return fetch(URL, {})
    .then(res => {
      if (!res.ok) throw new Error()
      return res.json()
    })
    .then(({ data }) => {
      return {
        text: data[0].quoteText,
        author: data[0].quoteAuthor,
        genre: data[0].quoteGenre
      }
    })
}

export const getMoreQuotes = author => {
  const URL = 'https://quote-garden.onrender.com/api/v3/quotes'

  return fetch(URL, {})
    .then(d => d.json())
    .then(({ data }) => data[0].quoteText)
}
