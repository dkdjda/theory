const Circle = (props) => {
  const a = (circlestyle = {
    width: props.size,
    height: props.size,
    borderRadius: "9999px",
    backgroundColor: props.bg,
  });

  const name = "떡볶이";
  return <div style={circlestyle}></div>;
};

export default Circle;
