import useGetQuestion from "./useGetQuestion";

const Suggestions = ({ suggestions, selectSuggestion }) => {
    const suggestionList = suggestions.map((suggestion) => (
        <div
            key={suggestion}
            className="suggestion"
            onClick={() => { selectSuggestion(suggestion) }}
        >
            {suggestion}
        </div>
    ));

    return suggestionList;
};

const Questions = () => {
    const {
        hint,
        answer,
        suggestions,
        validateAnswer,
    } = useGetQuestion();

    const checkAnswer = (selected) => {
        if (selected === answer) {
            document.body.style.backgroundColor = '#6be464';
        } else {
            document.body.style.backgroundColor = '#ea1717';
        }

        setTimeout(() => {
            document.body.style.backgroundColor = '#e3e464';
        }, 100);

        validateAnswer(selected);
    };

    return (
        <>
            <div>
                <div className="hintbook">
                    {hint}
                </div>
            </div>
            <div className="question">
                The Next Book is ?
            </div>
            <div>
               <Suggestions
                    suggestions={suggestions}
                    selectSuggestion={checkAnswer}
               />
            </div>
        </>
    );
}

export default Questions;
