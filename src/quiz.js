import { useEffect, useState } from "react";

export default function QuizApp() {
    const [quizs, setQuizs] = useState([]);
    const [result, setResult] = useState(null);
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

    function handleButonClick(e) {
        if (condition) {
            // statement
        }
        else {
            // statement
        }
    }
    return (
        <div className="flex flex-col gap-5 p-5">
            <h1 className="text-xl font-bold w-full flex justify-center">Quiz App</h1>
            {quizs.map((quiz, index) => (
                <div key={index} className="shadow-lg border p-5 rounded gap-4 flex flex-col">
                    <h3 className="font-semibold">Question: {quiz.question}</h3>
                    <div className="grid grid-cols-2 gap-2">
                        {quiz.options.map((option, idx) => (
                            <div>
                                <input type="radio" key={idx} id={option} value={option} />
                                <label for={option}>{option}</label>
                            </div>
                        ))}
                    </div>
                    <p>{result}</p>
                    <button className="bg-blue-500 text-white py-1" onClick={handleButonClick}> Submit</button>
                    <p>correct_answer: {quiz.correct_answer}</p>
                </div>
            ))}
        </div>
    );
}
