import  { useState } from 'react';
import './FeedbackForm.css';

const FeedbackForm = () => {
    const [title, setTitle] = useState('');
    const [userReviews, setUserReviews] = useState([
        { category: 'feature', rating: '', review: ''},
    ]);

    const handleAddReview = () => {
        setUserReviews([
            ...userReviews,
            { category: 'feature', rating: '', review: '', user_id: '' },
        ]);
    };

    const handleReviewChange = (index, field, value) => {
        const updatedReviews = userReviews.map((review, i) =>
            i === index ? { ...review, [field]: value } : review
        );
        setUserReviews(updatedReviews);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const feedback = { title, userReviews };
        const response = await fetch('http://localhost:5000/api/feedback', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(feedback),
        });

        const data = await response.json();
        console.log(data);
    };

    return (
        <div className="feedback-form-container">
            <form className="feedback-form" onSubmit={handleSubmit}>
                <h2>Submit Feedback</h2>
                <div className="input-group">
                    <label>Title</label>
                    <input
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        required
                    />
                </div>
                {userReviews.map((review, index) => (
                    <div key={index} className="review-group">
                        <div className="input-group">
                            <label>Category</label>
                            <select
                                value={review.category}
                                onChange={(e) => handleReviewChange(index, 'category', e.target.value)}
                            >
                                <option value="feature">Feature</option>
                                <option value="pricing">Pricing</option>
                                <option value="usability">Usability</option>
                            </select>
                        </div>
                        <div className="input-group">
                            <label>Rating</label>
                            <input
                                type="text"
                                value={review.rating}
                                onChange={(e) => handleReviewChange(index, 'rating', e.target.value)}
                                required
                            />
                        </div>
                        <div className="input-group">
                            <label>Review</label>
                            <textarea
                                value={review.review}
                                onChange={(e) => handleReviewChange(index, 'review', e.target.value)}
                                required
                            ></textarea>
                        </div>
                    </div>
                ))}
                <button type="button" onClick={handleAddReview}>Add Review</button>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default FeedbackForm;