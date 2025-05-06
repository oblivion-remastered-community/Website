import { Orbitron } from 'next/font/google'
import type { Metadata } from 'next'
import JoinTeamWrapper from '@/components/join-team/joinTeamWrapper'
import {getTranslations} from "next-intl/server";
import Image from 'next/image';

export const metadata: Metadata = {
    title: 'Join the team',
    description: 'Become a part of the Oblivion Remastered Community Patch Team by joining our team on GitHub.'
}

export default async function JoinPage() {
    const t = await getTranslations('JoinTeam')

    return <div>
        <h1>{t('header')}</h1>
        <div>
            {t.rich('temporaryInstructions', {
                discordLink: (chunks) => <a href='https://discord.gg/d3TRtvJ9fD' target='_blank'>{chunks}</a>,
                channelLink: (chunks) => <a href='https://discord.com/channels/1364356029932109976/1368788918451048498'>{chunks}</a>
            })}
            <br />
            <br />
            <p>{t('lookingFor')}</p>
            <ol>
                <li>{t('merger')}</li>
                <li>{t('developer')}</li>
                <li>{t('artist')}</li>
                <li>{t('tester')}</li>
            </ol>
            {/* Enable once we're ready to take github users */}
            {/*{t.rich('formInstructions', {*/}
            {/*    githubLink: (chunks) => <a href='https://github.com/join' target='_blank'>{chunks}</a>,*/}
            {/*    b: (chunks) => <b>{chunks}</b>*/}
            {/*})}*/}
        </div>

        <div className={'grid justify-items-center'}>
            <button className='lg:w-1/2 sm:w-full discord'>
                <Image
                    src={'/Discord-Symbol-White.svg'}
                    alt={t('github')}
                    width={24}
                    height={24}
                    className='inline mr-2'
                />
                {t('joinUsOnDiscord')}
            </button>
        </div>
        {/*<JoinTeamWrapper />*/}
    </div>
}
