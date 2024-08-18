import { useMemo } from "react";
import { useCryptoStore } from "../store"
import Spinner from "./Spinner";

export default function CryptoPriceDisplay() {
    
    const { result, loading } = useCryptoStore();
    const hasResult = useMemo( () => !Object.values(result).includes(''), [result]);

    return (
      <div className="result-wrapper">
        {loading ? <Spinner/> : hasResult && (
          <>
            <h2>Quotation</h2>

            <div className="result">
                <img 
                    src={`https://cryptocompare.com/${result.IMAGEURL}`} 
                    alt="Imagen Cryptomoneda" 
                />
                <div>
                    <p>The price is: <span>{result.PRICE}</span></p>
                    <p>Highest price of the day: <span>{result.HIGHDAY}</span></p>
                    <p>Lowest price of the day: <span>{result.LOWDAY}</span></p>
                    <p>Variation of the last 24 hours: <span>{result.CHANGEPCT24HOUR}</span></p>
                    <p>Last update: <span>{result.LASTUPDATE}</span></p>
                </div>
            </div>
          </>
        )}
      </div>
    );
}
