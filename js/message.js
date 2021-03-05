class Message {
    constructor(text, username) {
        this.id = Utils.getNewId('message-')
        this.text = text;
        this.username = username;
    }
}