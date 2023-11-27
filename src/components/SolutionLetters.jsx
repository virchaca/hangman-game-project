import "../styles/layout/_letters.scss";
import PropTypes from "prop-types";

function SolutionLetters({ word, userLetters }) {
  const renderSolutionLetters = () => {
    const wordLetters = word.split("");
    return wordLetters.map((eachLetter, index) => {
      return (
        <li key={index} className="letter">
          {userLetters.includes(eachLetter) ? eachLetter : ""}
        </li>
      );
    });
  };
  return (
    <div className="solution">
      <h2 className="title">Solución:</h2>
      <ul className="letters">{renderSolutionLetters()}</ul>
    </div>
  );
}

SolutionLetters.propTypes = {
  word: PropTypes.string,
  userLetters: PropTypes.string,
};
export default SolutionLetters;
