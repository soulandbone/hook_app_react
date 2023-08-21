import { LoadingQuote } from '../03-examples/LoadingQuote';
import { Quote } from '../03-examples/Quote';
import { useCounter, useFetch } from '../hooks';




export const Layout = () => {


const {counter, increment} = useCounter(1);
const {data, isLoading, hasError} = useFetch(`https://api.breakingbadquotes.xyz/v1/quotes/${counter}`);





// console.log({data, isLoading, hasError});

const {author, quote} = !!data && data[0];  // basically says to delived the data only if there is data available. When its loading it is null. This happens because this is an array . See double negation for undefined, 





  return (
    <>
    <h1>Breaking Bad Quotes</h1>
    <hr />

    {(isLoading) ?  <LoadingQuote/> : <Quote quote={quote}  author={author}/> }



    <button disabled= {isLoading} className="btn btn-primary" onClick={() => increment()}>
        Next Quote
    </button>
   


    </>
  )
}
