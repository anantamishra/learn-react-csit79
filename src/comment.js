import React, { useState } from 'react';
import starIcon from './assets/staricon.png'
function CommentPage() {
    const [name, setName] = useState('');
    const [rating, setRating] = useState(0);
    const [description, setDescription] = useState('');
    const [sections, setSections] = useState([]);

    const handleAddSection = () => {
        if (name && rating && description) {
            setSections([...sections, { name, rating, description }]);
            setName('');
            setRating(0);
            setDescription('');
        }
    };

    const renderStars = (rating) => {
        const filledStars = '★'.repeat(rating);
        const emptyStars = '☆'.repeat(5 - rating);
        return filledStars + emptyStars;
    };

    return (
        <div className="p-4 max-w-3xl mx-auto flex flex-col border shadow mt-10 rounded">
            <h1 className='flex justify-center font-bold mb-6 text-xl'>Comment App</h1>
            <div className="mb-6">
                <input
                    type="text"
                    placeholder="Enter name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="block w-full p-2 border border-gray-300 rounded mb-4"
                />
                <input
                    type="number"
                    min="0"
                    max="5"
                    placeholder="Enter star rating (0-5)"
                    value={rating}
                    onChange={(e) => setRating(Number(e.target.value))}
                    className="block w-full p-2 border border-gray-300 rounded mb-4"
                />
                <textarea
                    placeholder="Enter description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    className="block w-full p-2 border border-gray-300 rounded mb-4"
                />
                <button
                    onClick={handleAddSection}
                    className="bg-blue-500 text-white py-2 px-4 rounded"
                >
                    Add Comment
                </button>
            </div>

            <div className="space-y-4">
                {sections.map((section, index) => (
                    <div key={index} className="p-4 border border-gray-300 rounded">
                        <h3 className="text-lg font-semibold">{section.name}</h3>
                        <img src={starIcon} alt='' />
                        <p className="text-yellow-500">{renderStars(section.rating)}</p>
                        <p className="text-gray-600">{section.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default CommentPage;
