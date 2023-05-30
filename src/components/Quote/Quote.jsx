import style from './Quote.module.css'
import useQuote from '../../hooks/useQuote'

const Quote = () => {
  const { randomQuote } = useQuote()
  const { data, error, loading } = randomQuote()
  console.log(data, error, loading)
  return (
    <div className={style.quoteContainer}>
      <section className={style.quoteRTextContainer}>
        <p>{loading ? 'Loading quote' : data.text}</p>
      </section>
      <section className={style.quoteInformationContainer}>
        <div>
          <span className={style.quoteAuthor}>{data.author}</span>
          <span className={style.quoteGenre}>{data.genre}</span>
        </div>
        <svg
          className={style.getMoreQuotesButton}
          src="../../assets/arrow-icons.svg"
        ></svg>
      </section>
    </div>
  )
}

export default Quote
