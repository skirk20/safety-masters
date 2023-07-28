import { useState } from "react";
import { QuizQuestion } from "../../../../modules/game/questions/quiz-questions"
import Box from "../../../layout/box/box"

type Props = {
    onNext(): void
}

export default function Page24({onNext}: Props) {
    const [showNext, setShowNext] = useState(false);
    return <Box>
        <QuizQuestion id='3' onComplete={() => setShowNext(true)}></QuizQuestion>
        <button onClick={onNext}>Dalej</button>
    </Box>
}
