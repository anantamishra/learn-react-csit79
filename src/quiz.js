
import { useEffect, useState } from "react";

export default function QuizApp() {
    const [quizs, setQuizs] = useState([]);
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
                setQuizs(quizData.results);
            } catch (error) {
                console.error("Error fetching quiz:", error);
            }
        }

        fetchQuiz();
    }, []);

    return <div>
        {quizs.map((quiz, index) => (
            <div key={index}>
                <h3>Question: {quiz.question}</h3>
                <h3>Correct Answer: {quiz.correct_answer}</h3>
                <h3>InCorrect Answer: {quiz.incorrect_answer}</h3>
            </div>
        ))}
    </div>
}