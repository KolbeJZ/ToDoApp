class Task {
    constructor(name, messages = []) {
        this.id = Utils.getNewId('task-')
        this.name = name;
        this.messages = messages;
    }
    addMessage(message) {
        this.messages.push(message);
    }
}