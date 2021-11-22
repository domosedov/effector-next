import { useStore } from "effector-react";
import { $message } from "../model";

export default function SSG() {
  let message = useStore($message);
  return <h1>SSG page title - {message}</h1>;
}

export const getStaticProps = async () => {
  return {
    props: {
      initialState: {
        [$message.sid!]: "SSG",
      },
    },
  };
};
