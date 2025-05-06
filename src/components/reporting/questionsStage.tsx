import { Orbitron } from "next/font/google";
import AdoringFanTip from "./adoringFanTip";
import { ChangeEvent, FormEvent } from "react";
import { IReportBody } from "./reportwizard";
import {useTranslations} from "next-intl";

const orb = Orbitron({ subsets: ['latin'] })

interface IStageProps {
    next: () => void;
    prev: () => void;
    setBody: (newBody: IReportBody) => void;
    body: IReportBody;
}

const gameLocales = [
    '',
    'English (EN)',
    'French (FR)',
    'German (DE)',
    'Italian (IT)',
    'Spanish (ES)',
    'Polish (PL)',
    'Japanese (JA)',
    'Brazilian Portuguese (PTBR)',
    'Chinese - Simplified (ZHHANS)'
];

export default function QuestionStage(props: IStageProps) {
    const { next, prev, body, setBody } = props;
    const t = useTranslations('Report')
    
    const isBodyComplete = () => {
        let result = true
        if (!body.title || !body.summary || !body.questions) result = false;
        const qs = ['Game Version', 'New Game', 'Reproduction Steps'];
        for (const q of qs) {
            if (!body.questions?.[q] || !body.questions[q].answer) {
                result = false
                break;
            };
        }
        return result
    }

    const updateQuestion = (e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement | HTMLSelectElement> | FormEvent<HTMLDivElement>, q: string, p: number) => {
        const newBody = {...body};
        if (!newBody.questions) newBody.questions = {}
        if (!(e.target as any).value || (e.target as any).value === '') delete newBody.questions[q];
        else newBody.questions[q] = { title: q, answer: (e.target as any).value, priority: p || 999 };
        setBody(newBody)
    }

    const updateSummary = (e: ChangeEvent<HTMLTextAreaElement>) => {
        const newBody = {...body};
        if (!e.target.value) delete newBody.summary;
        else newBody.summary = e.target.value;
        setBody(newBody)
    }

    const updateDetails = (e: ChangeEvent<HTMLTextAreaElement>) => {
        const newBody = {...body};
        if (!e.target.value) delete newBody.details;
        else newBody.details = e.target.value;
        setBody(newBody)
    }

    const updateTitle = (e: ChangeEvent<HTMLInputElement>) => {
        const newBody = {...body};
        if (!e.target.value) delete newBody.title;
        else newBody.title = e.target.value;
        setBody(newBody)
    }

    const warning = (text: string) => (
        <div className="w-full rounded-md bg-red-300 p-4">
            <b>Warning: </b>{text}
        </div>
    )

    return (
        <div>
            <div>
                <div className="my-4">
                <h2>{t('title')}</h2>
                <input 
                    type='text' 
                    placeholder={t('titlePlaceholder')}
                    className="mx-auto p-1 w-2/3" 
                    onChange={updateTitle} 
                    value={body.title} 
                    maxLength={50}
                />
                </div>
                <hr />
                <div className="my-4">
                <h2>{t('summary')}</h2>
                <textarea 
                    rows={3} 
                    className="w-full mx-auto p-1" 
                    onChange={updateSummary} 
                    value={body.summary} 
                    maxLength={2048} 
                    placeholder={t('summaryPlaceholder')}
                />
                </div>
                <hr />
                <div className="my-4">
                <h2>{t('details')}</h2>
                <textarea 
                    rows={3} 
                    className="w-full mx-auto p-1" 
                    onChange={updateDetails} 
                    value={body.details} 
                    maxLength={2048} 
                    placeholder={t('detailsPlaceholder')}
                />
                </div>
                <hr />
                <div  className="my-4">
                <h2>{t('gameVersion')}</h2>
                <input 
                    type='text' 
                    placeholder="e.g. 1.7.36.0" 
                    className="mx-auto p-1" 
                    onChange={(e) => updateQuestion(e, 'Game Version', 10)} 
                    value={body.questions?.['Game Version']?.answer} 
                    maxLength={25}
                />
                <AdoringFanTip side='right'>
                    {t('adoringFanTip')}
                </AdoringFanTip>
                </div>
                <hr/>
                <div className="my-4">
                <h2>{t('language')}</h2>
                    <select value={body.questions?.['Language']?.answer} onChange={(e) => updateQuestion(e, 'Language', 11)}>
                        {gameLocales.map(l => (<option key={l}>{l}</option>))}
                    </select>
                </div>
                <hr />
                <div  className="my-4" onChange={(e) => updateQuestion(e, 'New Game', 20)}>
                <h2>{t('newGameQuestion')}</h2>
                <div>
                    <input value='Yes' name='New Game' type='radio' checked={body.questions?.['New Game']?.answer === 'Yes'} onChange={() => null} /> {t('yes')}
                </div>
                <div>
                    <input value='No' name='New Game' type='radio' checked={body.questions?.['New Game']?.answer === 'No'} onChange={() => null}/> {t('no')}
                </div>
                {body.questions?.['New Game']?.answer === 'No' ? warning(t('noNewGameWarning')) : null}
                </div>
                <hr />
                <div  className="my-4">
                <h2>{t('stepsToReproduce')}</h2>
                <textarea 
                    rows={5} 
                    className="w-full mx-auto p-1" 
                    onChange={(e) => updateQuestion(e, 'Reproduction Steps', 30)} 
                    value={body.questions?.['Reproduction Steps']?.answer} 
                />
                </div>
            </div>
            <div className="flex flex-row justify-between my-2 mx-8">
                <button className="secondary" onClick={prev}>{t('back')}</button>
                <button onClick={next} disabled={!isBodyComplete()}>{t('next')}</button>
            </div>
        </div>
    )
}
