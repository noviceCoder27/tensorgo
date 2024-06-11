import mongoose from 'mongoose'

const Schema = mongoose.Schema;

const CategorySchema = new Schema({
    _id: {type: mongoose.Schema.Types.ObjectId, auto: true},
    category: {type: String,enum:["feature","pricing","usability"],required: true},
    rating: {type: String, required: true},
    review: {type: String, required: true},
    user_id: {type: mongoose.Schema.Types.ObjectId, required: true, ref: "User"},
})

const FeedbackSchema = new Schema({
    _id: {type: mongoose.Schema.Types.ObjectId, auto: true},
    title: {type: String, required: true},
    userReviews: {type: [CategorySchema], required: true}
},{timestamps: true});



const Feedback = mongoose.model('Feedback',FeedbackSchema);

export default Feedback