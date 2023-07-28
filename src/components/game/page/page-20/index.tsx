import { useState } from "react";
import { QuizQuestion } from "../../../../modules/game/questions/quiz-questions"
import Box from "../../../layout/box/box"

type Props = {
    onNext(): void
}

export default function Page20({onNext}: Props) {
    const [showNext, setShowNext] = useState(false);
    return <Box>
        <QuizQuestion id='9' onComplete={() => setShowNext(true)}></QuizQuestion>
        {showNext && <button onClick={onNext}>Dalej</button>}
    </Box>
}
