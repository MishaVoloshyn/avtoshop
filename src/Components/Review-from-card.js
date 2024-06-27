import React, { useState } from 'react';


const ReviewComponent = () => {
    const [reviews, setReviews] = useState([
        {
            name: 'Demo',
            date: 'November 30, 2023',
            rating: 4.8,
            comment: 'Etiam sit amet ex pharetra, venenatis ante vehicula, gravida sapien. Fusce eleifend vulputate nibh, non cursus augue placerat pellentesque. Sed venenatis risus nec felis mollis.',
            scores: {
                comfort: 5,
                exteriorStyling: 4,
                performance: 5,
                interiorDesign: 5,
                valueForMoney: 5,
                reliability: 5
            }
        }
    ]);

    const [newReview, setNewReview] = useState({
        name: '',
        email: '',
        comment: '',
        scores: {
            comfort: 5,
            exteriorStyling: 5,
            performance: 5,
            interiorDesign: 5,
            valueForMoney: 5,
            reliability: 5
        }
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewReview({ ...newReview, [name]: value });
    };

    const handleScoreChange = (e) => {
        const { name, value } = e.target;
        setNewReview({
            ...newReview,
            scores: { ...newReview.scores, [name]: parseInt(value) }
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setReviews([...reviews, { ...newReview, date: new Date().toLocaleDateString(), rating: 4.8 }]);
        setNewReview({
            name: '',
            email: '',
            comment: '',
            scores: {
                comfort: 5,
                exteriorStyling: 5,
                performance: 5,
                interiorDesign: 5,
                valueForMoney: 5,
                reliability: 5
            }
        });
    };

    return (
        <div className="container mt-5">
            <h2 className="mb-4">Reviews</h2>
            <div className="review-summary mb-4">
                <div className="d-flex justify-content-between align-items-center">
                    <div className="rating-circle">
                        <div className="circle">
                            <div className="rating">4.0</div>
                            <div className="rating-text">Overall Rating</div>
                        </div>
                    </div>
                    <div className="rating-details">
                        {Object.entries(reviews[0].scores).map(([key, value]) => (
                            <div key={key} className="rating-item">
                                <strong>{key.replace(/([A-Z])/g, ' $1')}:</strong>
                                <span>{'★'.repeat(value)}{'☆'.repeat(5 - value)}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {reviews.map((review, index) => (
                <div key={index} className="mb-4">
                    <div className="d-flex justify-content-between">
                        <div>
                            <h5>{review.name}</h5>
                            <p>{review.date}</p>
                            <p>{review.comment}</p>
                        </div>
                        <div>
                            <p>Overall Rating: {review.rating}</p>
                            <div>
                                {Object.entries(review.scores).map(([key, value]) => (
                                    <div key={key}>
                                        <strong>{key.replace(/([A-Z])/g, ' $1')}</strong>: {value}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    <hr />
                </div>
            ))}

            <form onSubmit={handleSubmit}>
                <h4>Add a Review</h4>
                <div className="row mb-3">
                    {Object.keys(newReview.scores).map((score) => (
                        <div className="col-md-4" key={score}>
                            <label className="form-label">
                                {score.replace(/([A-Z])/g, ' $1')}
                            </label>
                            <select
                                className="form-select"
                                name={score}
                                value={newReview.scores[score]}
                                onChange={handleScoreChange}
                            >
                                {[1, 2, 3, 4, 5].map((n) => (
                                    <option key={n} value={n}>
                                        {n}
                                    </option>
                                ))}
                            </select>
                        </div>
                    ))}
                </div>
                <div className="mb-3">
                    <label className="form-label">Name</label>
                    <input
                        type="text"
                        className="form-control"
                        name="name"
                        value={newReview.name}
                        onChange={handleInputChange}
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Email</label>
                    <input
                        type="email"
                        className="form-control"
                        name="email"
                        value={newReview.email}
                        onChange={handleInputChange}
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Review</label>
                    <textarea
                        className="form-control"
                        name="comment"
                        rows="3"
                        value={newReview.comment}
                        onChange={handleInputChange}
                    ></textarea>
                </div>
                <button type="submit" className="btn btn-primary">
                    Submit Review
                </button>
            </form>
        </div>
    );
};

export default ReviewComponent;
