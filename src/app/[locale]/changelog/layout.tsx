import {kingthingsPetrockFont} from "@/fonts/KingthingsPetrock";

interface IProps {
    children: React.ReactNode;
    changeList: React.ReactNode;
}

export default function Layout(props: IProps) {
    return (
        <>
            <h1 className={`${kingthingsPetrockFont.className}`}>Changelog</h1>
            {props.children}
            <div className="[&>h3]:mt-4 [&>h3]:mb-0.5 [&>h3]:font-orbitron">{props.changeList}</div>
        </>
    )
}