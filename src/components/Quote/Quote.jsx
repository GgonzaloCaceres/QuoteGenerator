import style from './Quote.module.css'
import useQuote from '../../hooks/useQuote'

const Quote = () => {
  const { data } = useQuote()
  return (
    <div className={style.quoteContainer}>
      <section className={style.quoteRTextContainer}>
        <p>{data.text}</p>
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
