import type { AppProps } from "next/app";
import Link from "next/link";
import { Provider } from "effector-react/scope";

// Закомментировать
import { useScope } from "../use-scope";

/* Расскомментировать
import { fork, serialize, Scope } from "effector";
let clientScope: Scope;
*/

function MyApp({ Component, pageProps }: AppProps) {
  /* Расскомментировать
  const scope = fork({
    values: {
      ...(clientScope ? serialize(clientScope) : {}),
      ...(pageProps.initialState ?? {}),
    },
  });
  if (typeof window !== "undefined") clientScope = scope;
  */

  // Закомментировать
  let scope = useScope(pageProps.initialState);

  return (
    <Provider value={scope}>
      <nav>
        <Link href="/">
          <a>Index</a>
        </Link>
        <Link href="/ssr">
          <a>SSR</a>
        </Link>
        <Link href="/ssg">
          <a>SSG</a>
        </Link>
      </nav>
      <Component {...pageProps} />
      <style jsx>{`
        nav {
          display: flex;
          gap: 10px;
        }

        a {
          background-color: blue;
          color: white;
          padding: 0.5rem 2rem;
        }

        a:hover {
          background-color: green;
        }
      `}</style>
    </Provider>
  );
}

export default MyApp;
