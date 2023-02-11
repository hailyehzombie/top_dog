import mongoose from "mongoose";

const WorkSchema = new mongoose.Schema({
    name: String,
    date: Date,
    status: Boolean
});

const Work = mongoose.models.work || mongoose.model('work', WorkSchema);

export default Work;