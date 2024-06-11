import Feedback from '../models/feedback.js';


export const addFeedback = async (req, res) => {
    try {
        const { title, userReviews } = req.body;
        const feedback = new Feedback({
            title,
            userReviews
        });
        const savedFeedback = await feedback.save();

        res.status(201).json(savedFeedback);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

export const listAllFeedbacks = async (req, res) => {
    try {
        const feedbacks = await Feedback.find();
        res.status(200).json(feedbacks);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

export const listUserFeedbacks = async (req, res) => {
    try {
        const userId = req.params.userId;
        const feedbacks = await Feedback.find({ 'userReviews.user_id': userId });
        res.status(200).json(feedbacks);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
