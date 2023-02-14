import "./Hamburger.scss";

export const Hamburger = () => {
  const onInput = (e: any) => {
    console.log(e.target.checked);
  };

  return (
    <div className="hamburger">
      <input type="checkbox" id="burger-checkbox" onInput={onInput} />
      <div className="hamburger__lines">
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};
