import { useStore } from "effector-react";
import { $message } from "../model";

export default function SSR() {
  let message = useStore($message);
  return <h1>SSR page title - {message}</h1>;
}

export const getServerSideProps = async () => {
  return {
    props: {
      initialState: {
        [$message.sid!]: "SSR",
      },
    },
  };
};
