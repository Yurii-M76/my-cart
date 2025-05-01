import { Hello } from "../hello";
import { Profile } from "../profile";
import { HeaderUI } from "../ui";

const Header = () => {
  const hello = <Hello />;
  const profile = <Profile />;

  return (
    <HeaderUI hello={hello} notification={"notification"} profile={profile} />
  );
};

export default Header;
