import Image from 'next/image';
import { Orbitron } from 'next/font/google'
import { PropsWithChildren } from 'react';

const orb = Orbitron({ subsets: ['latin'] })

export default function AdoringFanTip(props : PropsWithChildren<{ side?: 'left' | 'right' }>) {
    const { children, side } = props

    const sbClass = side === 'right' ? 'sb-l' : 'sb-r'

    return (
        <div className='grid grid-cols-3 grid-rows-[2rem_minmax(2rem,_1fr)] bg-stripe-yellow rounded-md py-2 my-2 '>
            {!side || side === 'left' ? <div className='col-start-1 row-start-2'>
                <Image src={'/adoring_fan.png'} alt='Adoring Fan' className='' width={'286'} height={'286'} />
            </div> : null}
            <div className='px-4 col-span-3'>
            <h2>Adoring Fan says</h2>
            </div>
            <div className='col-span-2 row-start-2'>
                <div className={`${sbClass} relative border-black border-2 p-2 bg-white m-2 px-4`}>
                    {children}
                </div>
            </div>
            {side === 'right' ? <div className='col-start-3 row-start-2'>
                <Image src={'/adoring_fan.png'} alt='Adoring Fan' width={'286'} height={'286'} className='scale-x-[-1]' />
            </div> : null}
        </div>
    )
}