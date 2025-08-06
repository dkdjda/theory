const Button = (props) => {
  const brObj = { primary: "#205BF3", secondary: "#478DF5" };

  const brOdj = {
    hard: "0px",
    smooth: "5px",
    circle: "10px",
  };

  const buttonstyle = {
    boderadius: brOdj[props.br],
    backgroundColor: bgObj[props.bg],
    padding: "10px 45px",
    color: "white",
    boder: "none",
  };
  return <button style={buttonstyle}>Button</button>;
};
