const chats = {};
const message = {}
const users = [];
let currentChat;
// me and Kade worked on this project together
document
  .getElementById('new-chat-button')
  .addEventListener('click', addNewChat);
  document
  .getElementById('new-chat-button1')
  .addEventListener('click', addNewMessage);
  document
  .getElementById('new-chat-input')
  .addEventListener('keydown', (event) => {
    if (event.key == 'Enter') {
      addNewChat();
    }
  });
print();


function print() {
  // chats
  let chatsHtml = '';

  Object.values(chats).forEach((chat) => {
    chatsHtml += `<li class="list-group-item" onclick="selectCurrentChat('${chat.id}')">${chat.name}</li> <button class="btn btn-primary">Remove</button></div>`;
  });
  document.getElementById('chats').innerHTML = chatsHtml;

  // current chat name
  document.getElementById('current-chat-name').innerText = currentChat.name;
  // current chat message window
  let chatWindowHtml = '';
  currentChat.messages.forEach((message) => {
    chatWindowHtml += `
        <div class="message">
            <p>${message.text}</p>
            <p>${message.username}</p>
        </div>
    `;
  });
  document.getElementById('chat-window').innerHTML = chatWindowHtml;
  document.getElementById('task-window').innerHTML = taskWindowHtml;
  // users
  let usersHtml = '';
  users.forEach((user) => {
    usersHtml += `
    <div>
        <label for="${user.username}">${user.username}</label>
        <input id="${user.username}">
        <button onclick="addNewMessage('${currentChat.id}')" class="btn btn-primary">Submit</button>

    </div>`;
  });
  document.getElementById('users').innerHTML = usersHtml;
}

function addNewChat() {
  const chatName = document.getElementById('new-chat-input').value;
  if (chatName) {
    // create the list
    const newChat = new Chat(chatName);
    // add list to lists
    chats[newChat.id] = newChat;
    // clear out the input box
    document.getElementById('new-chat-input').value = '';
    //print again
    print();
  }
}
function addNewMessage(chatId, username) {
  const text = document.getElementById(username).value;
  const newMessage = new Message(text, username);
  chats[chatId].addMessage(newMessage);
  print();
}
function selectCurrentChat(chatId) {
  currentChat = chats[chatId];
  // print again
  print();
}