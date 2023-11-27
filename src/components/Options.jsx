const Options = ({word, handleWord}) => {
    const handleSubmit = (ev) => {
        ev.preventDefault();
      };
    
      const handleChange =(ev) =>{
        const value = ev.target.value;
        handleWord(value);
      }
      
  return (
    <>
      <form onSubmit={handleSubmit}>
        <label className="title" htmlFor="word">
          Escribe aquí la palabra que hay que adivinar:
        </label>
        <input
          autoFocus
          autoComplete="off"
          className="form__input"
          maxLength="15"
          type="text"
          id="word"
          name="word"
          onChange= {handleChange}
        />
      </form>
    </>
  );
};

export default Options;
