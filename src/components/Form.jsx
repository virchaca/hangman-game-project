function Form(prop) {
  const handleSubmit = (ev) => {
    ev.preventDefault();
  };

  const handleLetter = (ev) => {
    ev.preventDefault();

    const letterPress = ev.target.value;
    const regex = /^[a-z]+$/;
    if (regex.test(letterPress) || letterPress === "") {
      prop.handleLastLetter(letterPress);
      if (letterPress !== "") {
        prop.handleLastLetter(letterPress);
      }
    } else if (
      letterPress === "Backspace" ||
      letterPress === "" ||
      letterPress === "Enter"
    ) {
      prop.handleLastLetter("");
    }
    console.log(letterPress);
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <label className="title" htmlFor="last-letter">
        Escribe una letra:
      </label>
      <input
        autoComplete="off"
        className="form__input"
        maxLength="1"
        type="text"
        name="last-letter"
        id="last-letter"
        value={prop.lastLetter}
        onChange={handleLetter}
      />
    </form>
  );
}
export default Form;
