import { Hello } from "../hello";
import { Profile } from "../profile";
import { Notification } from "../notification";
import { HeaderUI } from "../ui";

const Header = () => {
  const hello = <Hello />;
  const profile = <Profile />;
  const notification = <Notification />;

  return (
    <HeaderUI hello={hello} notification={notification} profile={profile} />
  );
};

export default Header;
