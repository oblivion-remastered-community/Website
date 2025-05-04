import { Orbitron } from 'next/font/google'
import NexusMods from '@/components/sidebar/Nexus Icon.svg';
import GitHub from '@/components/sidebar/github-mark-white.svg';
import Bethesda from '@/components/sidebar/Bethesda.svg';
import Image from 'next/image';
import { Metadata } from 'next';
import {useTranslations} from "next-intl";

const orb = Orbitron({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'Download',
    description: 'Downloads for the Starfield Community Patch, no matter what platform you play on.',
}

export default function DownloadPage() {
    const t = useTranslations('Download')

    return (
        <div>
            <div className='mb-4'>
                <h1 id='PC'>{t('downloadOnPc')}</h1>
                <p></p>
                <br />
                <p>{t('availability')}</p>
                <div className='p-4 bg-stripe-orange my-4 border-2 border-black text-white'>
                    <b>{t('pleaseNote')}</b> {t('pricing')}
                </div>
                <p>Selected your preferred download location below:</p>
                <div className='grid lg:grid-cols-3 grid-cols-1 gap-3 py-8'>
                <a href='https://nexusmods.com/starfield/mods/1' target='_blank'>
                    <button className='w-full' disabled={true}>
                        <Image
                            src={NexusMods}
                            alt={t('nexusMods')}
                            width={24}
                            height={24}
                            className='inline mr-2'
                        />
                        {t('comingSoon')}
                    </button>
                </a>
                <a href='https://github.com/Starfield-Community-Patch/Starfield-Community-Patch/releases' target='_blank'>
                    <button className='w-full' disabled={true}>
                        <Image
                            src={GitHub}
                            alt={t('github')}
                            width={24}
                            height={24}
                            className='inline mr-2'
                        />
                        {t('comingSoon')}
                    </button>
                </a>
                <a href='https://creations.bethesda.net/en/starfield/details/a11a0cdf-5abb-4a59-9e12-e261e5aae8d5/Starfield_Community_Patch' target='_blank'>
                    <button className='w-full' disabled={true}>
                        <Image
                            src={Bethesda}
                            alt={`${t('creations')} ${t('tbd')}`}
                            width={24}
                            height={24}
                            className='inline mr-2 bg-white'
                        />
                        {t('tbd')}
                    </button>
                </a>
                </div>
                <h2 id='InstallPC'>{t('pcInstallationHeader')}</h2>
                <p>
                    {t.rich('modManagerInstructions', {
                        vortexLink: (chunks) => <a href='https://nexusmods.com/site/mods/1' target='_blank'>{chunks}</a>,
                        mo2Link: (chunks) => <a href='https://www.modorganizer.org/' target='_blank'>{chunks}</a>
                    })}
                    <br /> <br/>
                    {t.rich('manualInstallationInstructions', {
                        code: (chunks) => <code>{chunks}</code>
                    })}
                </p>
                <h3 className={orb.className+' mt-4'} id='PCBethesda'>Bethesda.net on PC</h3>
                <p>
                    To install the mod via Bethesda.net, simply go to the mod page, log into your account and select &quot;Add to library&quot;. You can also select the mod to be installed from the &quot;Creations&quot; menu at the main menu of the game. 
                </p>
            </div>
            <hr />
            <div className='pt-4 mt-6'>
                <h1 id='Xbox'>Download on Xbox Series X/S</h1>
                <div className='mb-24'>
                    <div className='p-4 bg-stripe-orange my-4 border-2 border-black text-white'>
                        <b>{t('pleaseNote')}</b> {t('xboxDisclaimer')}
                    </div>
                    <a href='https://creations.bethesda.net/en/starfield/details/a11a0cdf-5abb-4a59-9e12-e261e5aae8d5/Starfield_Community_Patch' target='_blank'>
                    <button className='w-full' disabled={true}>
                        <Image
                            src={Bethesda}
                            alt={`${t('creations')} ${t('tbd')}`}
                            width={24}
                            height={24}
                            className='inline mr-2 bg-white'
                        />
                        {t('tbd')}
                    </button>
                </a>
                </div>
                {/* <h2 id='InstallXbox'>Installation on Xbox Consoles</h2> */}
            </div>
        </div>
    )
}