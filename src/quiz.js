import React, { useEffect, useState } from 'react';

function QuizApp() {
    let [dogImage, setDogImage] = useState("")
    const dataUrl = "https://dog.ceo/api/breeds/image/random"

    useEffect(() => {
        fetch(dataUrl)
            .then(response => response.json())
            .then(data => setDogImage(data.message))
    }, [])

    return (
        <div>
            {dogImage && <img src={dogImage}></img>}
        </div>
    );
}

export default QuizApp;