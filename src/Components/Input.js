const Input = ({ type, handleOnChange, name }) => {
  //   function handleFirstName(e) {
  //     console.log(e.target.value);
  //     setFirstName(e.target.value);
  //   }

  return (
    <>
      <input type={type} onChange={handleOnChange} className={name} />
    </>
  );
};

export default Input;
