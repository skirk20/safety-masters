import Box from "../../../layout/box/box"

type Props = {
    onNext(): void
}

export default function Page7({onNext}: Props) {
    return <Box>
        <p>zrób zdj</p>
        <button onClick={onNext}>Dalej</button>
    </Box>
}
