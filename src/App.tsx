import { useEffect } from "react";
import CriptoSearchForm from "./components/CriptoSearchForm"
import { useCryptoStore } from "./store"
import CryptoPriceDisplay from "./components/CryptoPriceDisplay";

function App() {

  const { fetchCryptos } = useCryptoStore();

  useEffect( () => {
    fetchCryptos()
  }, [fetchCryptos])

  return (
    <>
      <div className="container">
        <h1 className="app-title">
          Cryptocurrency <span>Quotation</span>
        </h1>

        <div className="content">
          <CriptoSearchForm />
          <CryptoPriceDisplay/>
        </div>
      </div>
    </>
  )
}

export default App
