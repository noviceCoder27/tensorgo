
import './Home.css';

const Home = () => {
    const feedbacks = [
        {
            id: 1,
            title: "Great Feature",
            userReviews: [
                { category: "feature", rating: "5", review: "Loved the new feature!" },
                { category: "usability", rating: "4", review: "Very user-friendly." }
            ]
        },
        {
            id: 2,
            title: "Pricing Feedback",
            userReviews: [
                { category: "pricing", rating: "3", review: "A bit expensive." },
                { category: "usability", rating: "4", review: "Easy to use." }
            ]
        }
    ];

    return (
        <div className="home-container">
            <h1>Feedbacks</h1>
            <div className="feedback-list">
                {feedbacks.map(feedback => (
                    <div key={feedback.id} className="feedback-card">
                        <h2>{feedback.title}</h2>
                        {feedback.userReviews.map((review, index) => (
                            <div key={index} className="review">
                                <p><strong>Category:</strong> {review.category}</p>
                                <p><strong>Rating:</strong> {review.rating}</p>
                                <p><strong>Review:</strong> {review.review}</p>
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Home;
