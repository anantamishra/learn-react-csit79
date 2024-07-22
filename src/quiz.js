import { useEffect, useState } from "react";

export default function QuizApp() {
    const [quizs, setQuizs] = useState([]);
    let options = [];
    const url = "https://opentdb.com/api.php?amount=10&category=18&difficulty=medium&type=multiple";

    useEffect(() => {
        async function fetchQuiz() {
            try {
                const response = await fetch(url);
                console.log("response is:", response);
                if (!response.ok) {
                    throw new Error("Failed to fetch quiz");
                }
                const quizData = await response.json();

                // Process and shuffle options for each quiz
                const processedQuizs = quizData.results.map(quiz => {
                    options = [quiz.correct_answer, ...quiz.incorrect_answers];
                    options.sort(() => Math.random() - 0.5);
                    return { ...quiz, options };
                });

                // console.log("processed quiz", processedQuizs)
                setQuizs(processedQuizs);
            } catch (error) {
                console.error("Error fetching quiz:", error);
            }
        }

        fetchQuiz();
    }, []);

    return (
        <div>
            {quizs.map((quiz, index) => (
                <div key={index}>
                    <h3>Question: {quiz.question}</h3>
                    <ul>Options:
                        {quiz.options.map((option, idx) => (
                            <li key={idx}>{option}</li>
                        ))}
                    </ul>
                    <p>correct_answer: {quiz.correct_answer}</p>
                </div>
            ))}
        </div>
    );
}
