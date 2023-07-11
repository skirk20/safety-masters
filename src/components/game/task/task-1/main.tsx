import Box from "../../../../components/layout/box/box"

type Props = {
    onComplete(): void
}

export default function TaskMain({onComplete}: Props) {
    return <Box>
        <p>Tutaj będzie zadanie 1 do wykonania.</p>
        <button onClick={onComplete}>Zrobione!</button>
    </Box>
}
