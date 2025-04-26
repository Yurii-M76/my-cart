import HelloUI from "../ui/hello/helloUI";

const mock = {
  welcome: "Доброе утро",
  userName: "admin",
};

const Hello = () => {
  return <HelloUI welcomeText={mock.welcome} userName={mock.userName} />;
};

export default Hello;
