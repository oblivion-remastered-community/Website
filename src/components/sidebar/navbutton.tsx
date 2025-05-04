import { Icon } from '@mdi/react'
import { Orbitron } from 'next/font/google'
import Image from 'next/image'
import {mdiSword} from "@mdi/js";

const orb = Orbitron({ subsets: ['latin'] })

interface IProps {
    icon?: string;
    customIcon?: string;
    label: string;
}

export default function NavButton(props: IProps) {
    const { icon, label, customIcon } = props;

    return (
        <div className='uppercase leading-10 flex flex-wrap-nowrap justify-between h-12 nav-item align-middle items-center font-normal hover:font-extrabold text-black'>
            <div className='text-ellipsis truncate'>
            {customIcon 
            ? <Image 
                src={customIcon}
                alt={label}
                width={24}
                height={24}
                className='inline mr-2'
            /> 
            : null}
            {icon ? <Icon path={icon || ''} size={1} className='inline mr-2' /> : null }
            <p className={`${orb.className} inline`}>{label}</p>
            </div>
            <div className='grid grid-rows-1 overflow-clip nav-stripes h-max min-w-[12px]'>
                <Icon path={mdiSword} size={1}
                    style={{'--ribbon-index': '1'} as any}
                    className='inline mr-2 stripe w-3 h-2 transition-transform ease-stripe-ease duration-150 scale-x-0 origin-stripe-wipe'
                />
            </div>
        </div>
    )
}