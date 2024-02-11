// Existing Conversation
export const PATCH = async (request, { params }) => {
    const { userId, content } = await request.json();

    try {
        await connectToDB();
        const newMessage = new Message({
            creator: userId,
            content: content,
        });

        const existingChat = await Chat.findById(params.id);
        if (!existingChat) {
            return new Response("Chat not found", { status: 404 });
        }
        if(existingChat.creator != userId){
            return new Response("Unauthorized access", { status: 401 });
        }

        existingChat.content.push(newMessage);

        await existingPrompt.save();
        return new Response(JSON.stringify(newPrompt), { status: 201 });
    } catch (error) {
        return new Response("Failed to message chat", { status: 500 });
    }
};
