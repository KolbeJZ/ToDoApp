class Chat {
    constructor(name, messages = []) {
        this.id = Utils.getNewId('chat-')
        this.name = name;
        this.messages = messages;
    }
    addMessage(message) {
        this.messages.push(message);
    }
}