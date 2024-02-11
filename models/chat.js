import { Schema, model, models } from 'mongoose';

const MessageSchema = new Schema({
  creator: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  },
  content: [{
    type: Schema.Types.ObjectId,
    ref: 'Message'
  }],
});

const Message = models.Message || model('Message', MessageSchema);

export default Message;