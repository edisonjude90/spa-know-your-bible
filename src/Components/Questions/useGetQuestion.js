import { useCallback, useEffect, useState } from "react";
import { allBooks } from "../../Books";

function useGetQuestion() {
    const [hint, setHint] = useState('');
    const [suggestions, setSuggestion] = useState([]);
    const [answer, setAnswer] = useState('');
    const [cursor, setCursor] = useState(0);

    const shuffleSuggestion = (arr) => {
        return arr.sort(() => Math.random() - 0.5);
    };

    const getQuestion = useCallback(() => {
        const hintBook = allBooks[cursor];
        const answer = allBooks[cursor + 1];
        const suggestion = allBooks.slice(cursor + 1, cursor + 4);

        setAnswer(answer);
        setSuggestion(shuffleSuggestion(suggestion));
        setHint(hintBook);
    }, [
        cursor,
    ]);

    const validateAnswer = useCallback((selected) => {
        if (selected === answer) {
            setCursor(cursor + 1);
        }
    }, [cursor, answer]);

    useEffect(() => {
        getQuestion();
    }, [getQuestion, cursor]);

    return {
        hint,
        answer,
        suggestions,
        validateAnswer,
    };
}

export default useGetQuestion;