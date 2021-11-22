import { useStore } from "effector-react";
import { $message } from "../model";

export default function Index() {
  let message = useStore($message);
  return <h1>Index page title - {message}</h1>;
}
