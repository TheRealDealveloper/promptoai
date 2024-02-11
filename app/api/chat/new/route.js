// New Conversation
export const POST = async (request) => {
    const { userId, content } = await request.json();

    try {
        await connectToDB();
        const newMessage = new Message({
            creator: userId,
            content: content,
        });
        const newConversation = new Chat({
            creator: userId, 
            content: [{newMessage}],
        });
        await newConversation.save();
        return new Response(JSON.stringify(newConversation), { status: 201 });
    } catch (error) {
        return new Response("Failed to create new conversation", { status: 500 });
    }
};
