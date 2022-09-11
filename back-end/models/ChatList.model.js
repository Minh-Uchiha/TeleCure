const { Schema, model } = require("mongoose");

const chatListSchema = new Schema(
    {
        chat_list: [{
            type: Schema.Types.ObjectId,
            ref: 'ChatLog'
        }]
    },
    {
        timestamps: true,
    }
);

module.exports = model("ChatList", chatListSchema);