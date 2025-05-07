import AdoringFanTip from "./adoringFanTip";

interface IStageProps {
    next: () => void;
    status: string;
}

export default function StartStage(props: IStageProps) {
    return (
        <div>
            <AdoringFanTip>
            Remember, the Community Patch is only intended to fix bugs and errors in the base game. Your report should <b>not</b> ask for:
                <ul>
                    <li>New content (new quests, missions, characters, items, etc)</li>
                    <li>Balance changes (outside of correcting obvious errors)</li>
                    <li>Any tweaks that are not inkeeping with the original vision for game</li>
                </ul>
            </AdoringFanTip>
            <div className='text-center my-4'>
                <button onClick={props.next}>{props.status !== 'authenticated' ? 'Sign In' : 'Start reporting'}</button>
                <div>{props.status !== 'authenticated' && `You must be signed in to a Discord account to submit a report.`}</div>
            </div>
        </div>
    )
}
