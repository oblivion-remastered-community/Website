import { mdiMenu } from '@mdi/js'
import Icon from '@mdi/react'
import { Orbitron } from 'next/font/google'
import {useTranslations} from "next-intl";
import {kingthingsPetrockFont} from "@/fonts/KingthingsPetrock";

interface IHeaderProps {
    toggleNav: () => void;
}

export default function Header(props: IHeaderProps) {
    const commonT = useTranslations('Common')
    return (
        <div className="w-full items-center justify-between  p-4 bg-parchment-dark border-b-2 fixed top-0 line-clamp-1 z-20">
            <h1 className={'mb-0 text-lg lg:text-3xl text-left '+kingthingsPetrockFont.className}>
                <span onClick={() => props.toggleNav()}><Icon path={mdiMenu} size={1} className='inline mr-8 lg:hidden' title='Toggle Navigation'/></span>
                {commonT('patchName')}
            </h1>
        </div>
    )
}