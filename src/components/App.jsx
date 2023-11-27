// import viteLogo from '/vite.svg'
import "../styles/App.scss";
import "../fonts/KgTenThousandReasons-R1ll.ttf";
import { useEffect, useState } from "react";
import Header from "./Header";
import Dummy from "./Dummy";
import SolutionLetters from "./SolutionLetters";
import ErrorLetters from "./ErrorLetters ";
import Form from "./Form";
import Footer from "./Footer";
import { Route, Routes } from "react-router-dom";
import Instructions from "./Instructions";
import Options from "./Options";
import Loading from "./Loading"

function App() {
  const [lastLetter, setLastLetter] = useState("");
  const [word, setWord] = useState("");
  const [userLetters, setUserLetters] = useState([]);
   const [isLoading, setIsLoading]=useState(true);

  const failedLetters = userLetters.filter((letter) => !word.includes(letter));
  console.log(failedLetters);
  const numberOfErrors = failedLetters.length;

  useEffect(() => {
    // Dentro de useEffect llamamos a la API
    fetch("https://dev.adalab.es/api/random/word") // El 5 es el id de la Princesa Leia
      .then((response) => response.json())
      .then((Data) => {
        // Cuando la API responde guardamos los datos en el estado para que se vuelva a renderizar el componente
        setWord(Data.word);
        setIsLoading (false);
      });
  }, []);

  const handleLastLetter = (value) => {
    setLastLetter(value);
    setUserLetters([...userLetters, value]);
    setTimeout(() => {
      setLastLetter('');
    }, 1000);
  };

  const handleWord = (value) =>{
    setWord(value);
    setUserLetters([]);
    setLastLetter([]);

  }

  return (
    <div className="page">
      <Header />
      <main className="main">
        <Loading isLoading={isLoading}/>
        <Routes>
          <Route
            path="/"
            element={
              <>
                {" "}
                <section>
                  <SolutionLetters word={word} userLetters={userLetters} />
                  <ErrorLetters word={word} userLetters={userLetters} />
                  <Form
                    lastLetter={lastLetter}
                    userLetters={userLetters}
                    handleLastLetter={handleLastLetter}
                  />
                </section>
                <Dummy numberOfErrors={numberOfErrors} />
              </>
            }
          />
          <Route path="/instructions" element={<Instructions />} />
          <Route path="/options" element={<Options word={word} handleWord={handleWord}/>} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;
