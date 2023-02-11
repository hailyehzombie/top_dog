import mongoose from "mongoose";

const MsgSchema = new mongoose.Schema({
    name: String,
    number: Number,
    msg: String,
    read: Boolean
});

const Msg = mongoose.models.msg || mongoose.model('msg', MsgSchema);

export default Msg;