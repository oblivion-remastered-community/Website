import {useRouter, withRouter} from "next/router";
import {AppProps} from "next/app";
import {NextIntlClientProvider} from "next-intl";

export default function App({ Component, pageProps }: AppProps) {
    const router = useRouter()

    return (
      <NextIntlClientProvider
        locale={router.locale}
        timeZone={"UTC"}
        messages={pageProps.messages}
      >
          <Component {...pageProps} />
      </NextIntlClientProvider>
    )
}
