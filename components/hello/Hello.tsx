"use client";
import { useRouter } from "next/navigation";
import HelloUI from "../ui/hello/helloUI";

const mock = {
  welcome: "Доброе утро",
  userName: "admin",
};

const Hello = () => {
  const router = useRouter();
  return (
    <HelloUI
      welcomeText={mock.welcome}
      userName={mock.userName}
      onClickToHome={() => router.push("/")}
    />
  );
};

export default Hello;
