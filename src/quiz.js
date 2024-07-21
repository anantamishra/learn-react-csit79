
import { useEffect, useState } from "react";

export default function JokePage() {
    const [joke, setJoke] = useState("");
    const url = "https://opentdb.com/api.php?amount=10&category=18&difficulty=medium&type=multiple";


    useEffect(() => {
        async function fetchJoke() {
            try {
                const response = await fetch(url);
                if (!response.ok) {
                    throw new Error("Failed to fetch quiz");
                }
                const quizData = await response.json();
                console.log(quizData.results);
                setJoke(quizData.value);
            } catch (error) {
                console.error("Error fetching quiz:", error);
            }
        }

        fetchJoke();
    }, []);

    return <div>{joke}</div>
}