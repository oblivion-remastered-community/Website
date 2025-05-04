import { Metadata } from 'next'
import ClientLayout from './layoutClient'

import '../globals.css'
import {hasLocale, NextIntlClientProvider} from "next-intl";
import {routing} from "@/i18n/routing";
import {notFound} from "next/navigation";
import {kingthingsPetrockFont} from "@/fonts/KingthingsPetrock";

export const metadata: Metadata = {
    title: {
        default: 'Unknown Page | Starfield Community Patch',
        template: '%s | Starfield Community Patch',
    },
    category: 'Starfield,Modding,Video Games',
    classification: 'The Starfield Community Patch is a community-driven and open-source project to fix bugs in Bethesda\'s Starfield.',
    creator: 'Starfield Community Patch Team',
    colorScheme: 'only light',
    formatDetection: {
        address: false,
        telephone: false,
        email: false,
        date: true,
        url: true,
    },
    themeColor: '#334979',
    icons: [{
        url: '/favicon.ico',
        color: '#6e95de',
        sizes: '16x16,32x32,48x48',
        type: 'image/x-icon',
    }],
    keywords: ['Starfield', ''],
    metadataBase: (()=>{try{ return new URL(new URL(process.env.NEXTAUTH_URL!).origin) } catch { return new URL('https://starfieldpatch.dev') }})(),
    openGraph: {
        type: 'website',
        determiner: 'the',
        siteName: 'Starfield Community Patch Website',
    },
    twitter: {
        card: 'summary',
    }
}

export default async function RootLayout({
                                       children,
                                       params
}: {
    children: React.ReactNode,
    params: Promise<{locale: string}>
}) {
    const {locale} = await params
    if (!hasLocale(routing.locales, locale)) {
        notFound();
    }
    return <html className={`${kingthingsPetrockFont.variable}`} lang="en">
        <body>
        <NextIntlClientProvider>
            <ClientLayout>
                {children}
            </ClientLayout>
        </NextIntlClientProvider>
        </body>
    </html>
}
