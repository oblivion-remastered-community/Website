import Stripes from "./stripes";
import {useTranslations} from "next-intl";

export default function Footer() {
    const t = useTranslations('Footer')

    return (
        <footer className='text-center text-gray-700 bg-parchment-dark'>
            {/*<Stripes />*/}
            <div className='pt-8'>{t('affiliation')}</div>
        </footer>
    )
}