import "../styles/layout/_letters.scss";

function ErrorLetters (prop) {

    const renderErrorLetters = () => {
        //
        return prop.userLetters
          .filter((eachLetter) => (prop.word.includes(eachLetter) ? "" : eachLetter))
          .map((eachLetter, index) => (
            <li key={index} className="letter">
              {eachLetter}
            </li>
          ));
      };
    return(
        <div className="error">
            <h2 className="title">Letras falladas:</h2>
            <ul className="letters">{renderErrorLetters()}</ul>
          </div>
    )
}
export default ErrorLetters;