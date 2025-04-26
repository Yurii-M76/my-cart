import Hello from "../hello/Hello";
import HeaderUI from "../ui/header/HeaderUI";

const Header = () => {
  const hello = <Hello />;
  return (
    <HeaderUI hello={hello} notification={"notification"} profile={"profile"} />
  );
};

export default Header;
