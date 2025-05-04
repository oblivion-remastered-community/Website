import type { Metadata } from 'next'
import { Orbitron, Roboto } from 'next/font/google'
import Link from 'next/link'
import HomePageBanner from '@/components/homepageBanner'
import { metadata as layoutMetadata } from './layout'
import {useTranslations} from "next-intl";
import {kingthingsPetrockFont} from "@/fonts/KingthingsPetrock";
import Icon from "@mdi/react";
import {mdiAlert} from "@mdi/js";

const orb = Orbitron({ subsets: ['latin'] })
const robo400 = Roboto({ weight: "400", subsets: ['latin'] })

// Layout metadata sadly doesn't apply to routes at the same level so we have to manually add it here
export const metadata: Metadata = {
  ...layoutMetadata,
  title: 'Home | Starfield Community Patch',
  description: 'The home of the Starfield Community Patch project.',
}

export default function Home() {
    const t = useTranslations('Home')

  return (
    <main>
      <h1 className={`text-4xl text-center mb-4 ` + kingthingsPetrockFont.className}>{t('welcomeMessage')}</h1>
      <HomePageBanner />
      <span className={robo400.className}>
      <p className='mb-4'>
          {t('about')}
      </p>
      </span>
      {/*<hr />*/}
      {/*<div className='flex space-x-4 text-center place-content-around my-4'>*/}
      {/*  <Link href='/download#PC' className='w-[40%]'><button className='p-8 bg-stripe-blue rounded-md text-xl hover:bg-stripe-orange text-white'>{t('downloadForPC')}</button></Link>*/}
      {/*  /!*<Link href='/download#Xbox' className='w-[40%]'><button className='p-8 bg-stripe-blue rounded-md text-xl hover:bg-stripe-orange text-white'>Download (Xbox)</button></Link>*!/*/}
      {/*</div>*/}
      {/*<div className='text-center border-2 lg:mx-12 bg-stripe-orange text-white p-2'>*/}
      {/*  <Icon path={mdiAlert} size={1} className='inline m-2' />*/}
      {/*    {t('notAvailableForXbox')}*/}
      {/*</div>*/}
      <hr />
      <h1 className={`text-4xl text-center my-4`}>{t('orcpNeedsYou')}</h1>
      <p>
          {t('helpWantedMessage')}
      </p>
    </main>
  )
}