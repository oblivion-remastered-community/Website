import {
    mdiEarth,
    mdiListStatus,
    mdiBug,
    mdiMedal,
    mdiRocketLaunch,
    mdiMessage,
    mdiDownload,
    mdiHistory,
    mdiBriefcasePlus,
    mdiPaletteOutline
} from '@mdi/js'
import NavButton from './navbutton'
import Link from 'next/link'
import Reddit from './reddit.svg'
import Discord from './discord-mark-black.svg'
import GitHub from './github-mark.svg'
import Bethesda from '@/components/sidebar/Bethesda.svg';
import NexusModsMono from './Nexus Logo Icon - Monocrom.svg'
import { signIn, signOut, useSession } from "next-auth/react"
import Image from 'next/image'
import {useTranslations} from "next-intl";

interface ISidebarProps {
    showMobile: boolean;
    toggleNav: (state: boolean) => void;
}

export default function Sidebar(props: ISidebarProps) {
    const { showMobile, toggleNav } = props;
    const { data: session, status } = useSession()
    const t = useTranslations('Sidebar')

    const showMobileClasses = showMobile ? 'float-left absolute top-16 w-auto h-screen' : 'collapse h-0 lg:h-auto lg:visible'

    return (
        <div className={`sticky top-20 bg-white z-50 lg:z-auto lg:flex-initial overflow-auto lg:border-black lg:border-2 lg:m-4 pt-2 pb-2 pl-2 bg-parchment ${showMobileClasses}`}>
            <Link href='/' onClick={() => toggleNav(false)}><NavButton icon={mdiEarth} label={t('home')} /></Link>
            <Link href='/mission' onClick={() => toggleNav(false)}><NavButton icon={mdiPaletteOutline} label={t('missionStatement')} /></Link>
            {/*<Link href='/download' onClick={() => toggleNav(false)}><NavButton icon={mdiDownload} label={t('download')} /></Link>*/}
            {/*<Link href='/changelog' onClick={() => toggleNav(false)}><NavButton icon={mdiHistory} label={'changelog'} /></Link>*/}
            <hr />
            <Link href='/issues' onClick={() => toggleNav(false)}><NavButton icon={mdiListStatus} label={'issues'} /></Link>
            <Link href='/report' onClick={() => toggleNav(false)}><NavButton icon={mdiBug} label={t('report')} /></Link>
            <Link href='/contributors' onClick={() => toggleNav(false)}><NavButton icon={mdiMedal} label={t('contributors')} /></Link>
            <Link href='/join-team' onClick={() => toggleNav(false)}><NavButton icon={mdiBriefcasePlus} label={t('joinTheTeam')} /></Link>
            <hr />
            {/*<Link href='https://nexusmods.com/starfield/mods/1' target='_blank'><NavButton customIcon={NexusModsMono} label={`${t('nexusMods')} ↗`} /></Link>*/}
            {/*<Link href='https://creations.bethesda.net/en/starfield/details/a11a0cdf-5abb-4a59-9e12-e261e5aae8d5/Starfield_Community_Patch' target='_blank'><NavButton customIcon={Bethesda} label={`${t('creations')} ↗`} /></Link>*/}
            <Link href='https://forums.nexusmods.com/forum/9064-remastered-discussion/' target='_blank'><NavButton icon={mdiMessage} label={`${t('forums')} ↗`} /></Link>
            <Link href='https://discord.gg/d3TRtvJ9fD' target='_blank'><NavButton customIcon={Discord} label={`${t('discord')} ↗`} /></Link>
            <Link href='https://github.com/oblivion-remastered-community' target='_blank'><NavButton customIcon={GitHub} label={`${t('github')} ↗`} /></Link>
            <div className='mt-4'>
            {status === 'authenticated' ?
            <div className=''>
                <div className='flex flex-row justify-start gap-2'> 
                    <div className=''>
                        <Image src={session?.user?.image ?? ''} alt={session?.user?.name ?? ''} width={32} height={32} className='rounded-full' />
                    </div>
                    <div className='col-span-2 flex flex-col pr-4'>
                        {session?.user?.name ?? 'Logged out'}
                        <a onClick={() => signOut({ redirect: false })}>{t('signOut')}</a>
                    </div>
                </div>
            </div>:
            <button onClick={() => signIn('nexusmods', { redirect: false })}>{t('signIn')}</button>}
            </div>
        </div>
    )
}
