import { Apple, Dribbble, Facebook, Twitch } from "lucide-react";
import SocialLogin from "./SocialLogin";
function App() {
  return (
    <>
      <SocialLogin
        bg="Facebook"
        icon={<Facebook />}
        social={"Facebook"}
      ></SocialLogin>
      <SocialLogin bg="Apple" icon={<Apple />} social={"Apple"}></SocialLogin>
      <SocialLogin
        bg="Dribbble"
        icon={<Dribbble />}
        social={"Facebook"}
      ></SocialLogin>
      <SocialLogin
        bg="Twitch"
        icon={<Twitch />}
        social={"Twitch"}
      ></SocialLogin>
    </>
  );
}

export default App;
