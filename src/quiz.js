import { useEffect, useState } from "react";

export default function QuizApp() {
    const [quizzes, setQuizzes] = useState([]);
    const [selectedAnswers, setSelectedAnswers] = useState({});
    const [results, setResults] = useState({});
    const url = "https://opentdb.com/api.php?amount=10&category=18&difficulty=medium&type=multiple";

    useEffect(() => {
        async function fetchQuiz() {
            try {
                const response = await fetch(url);
                if (!response.ok) {
                    throw new Error("Failed to fetch quiz");
                }
                const quizData = await response.json();

                const processedQuizzes = quizData.results.map((quiz) => {
                    const options = [quiz.correct_answer, ...quiz.incorrect_answers];
                    options.sort(() => Math.random() - 0.5);
                    return { ...quiz, options };
                });

                setQuizzes(processedQuizzes);
            } catch (error) {
                console.error("Error fetching quiz:", error);
            }
        }

        fetchQuiz();
    }, []);

    const handleOptionChange = (quiz, selectedOption) => {
        setSelectedAnswers({
            ...selectedAnswers,
            [quiz.question]: selectedOption
        });
    };

    const handleButtonClick = (quiz) => {
        const selectedAnswer = selectedAnswers[quiz.question];
        const correctAnswer = quiz.correct_answer;
        setResults({
            ...results,
            [quiz.question]: selectedAnswer === correctAnswer
        });
    };

    return (
        <div className="flex flex-col gap-5 p-5">
            <h1 className="text-xl font-bold w-full flex justify-center">Quiz App</h1>
            {quizzes.map((quiz, index) => (
                <div key={index} className="shadow-lg border p-5 rounded gap-4 flex flex-col">
                    <h3 className="font-semibold" dangerouslySetInnerHTML={{ __html: `Question: ${quiz.question}` }}></h3>
                    <div className="grid grid-cols-2 gap-2">
                        {quiz.options.map((option, index) => (
                            <div key={index}>
                                <input
                                    type="radio"
                                    id={option}
                                    name={quiz.question}
                                    value={option}
                                    onChange={() => handleOptionChange(quiz, option)}
                                />
                                <label htmlFor={option} dangerouslySetInnerHTML={{ __html: option }}></label>
                            </div>
                        ))}
                    </div>
                    {results[quiz.question] !== undefined && (
                        <div>{results[quiz.question] ? "Correct!" : `Incorrect! The correct answer is ${quiz.correct_answer}`}</div>
                    )}
                    <button
                        className="bg-blue-500 text-white py-1"
                        onClick={() => handleButtonClick(quiz)}
                    >
                        Submit
                    </button>
                </div>
            ))}
        </div>
    );
}
