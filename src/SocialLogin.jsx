const SocialLogin = (props) => {
  const bgObj = {
    Facebook: "#1877F2",
    Apple: "#000000",
    Dribbble: "#EA4C89",
    Twitch: "#9146FF",
  };

  const Loginstyle = {
    display: "flex",
    allgnItem: "center",
    width: "fit-content",
    fontSize: "20px",
    fontWeight: "700",
    height: "50px",
    boderadius: "5px",
    color: "white",
    boder: "none",
    backgroundColor: bgObj[props.bg],
    padding: "14px 16px",
    gap: "20px",
  };
  return (
    <div style={Loginstyle}>
      {props.icon}Login via {props.soical}
    </div>
  );
};

export default SocialLogin;
