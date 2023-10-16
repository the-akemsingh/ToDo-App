To-Do App with Express Backend
A simple To-Do application that utilizes a browser frontend with a backend built on Express.js. It allows users to add, view, update, and delete to-do items.

✨FEATURES - 
Add To-Dos: Users can easily add new tasks by entering a title and description.
List To-Dos: View all added to-dos.
Update To-Dos: Edit existing to-do tasks by their unique ID.
Delete To-Dos: Remove a to-do task by its unique ID.

✨PREREQUISITES -
Node.js & npm
Express.js

✨USAGE -
Adding a To-Do:
Open the provided frontend in a browser, fill in the title and description, and click on the "Set the task" button. The task will be saved in the backend.

Viewing To-Dos:
Access http://localhost:3000/todos to view all the saved to-do items.

Updating a To-Do:
Send a PUT request to http://localhost:3000/todos/:id with the updated title and description in the body.

Deleting a To-Do:
Send a DELETE request to http://localhost:3000/todos/:id where :id is the ID of the to-do you wish to delete.

✨TECHNOLOGIES USED -

Frontend: HTML, CSS, and vanilla JavaScript.

Backend: Node.js with Express.js framework.

Middleware: Body-parser for handling JSON payloads and CORS for cross-origin requests.

✨CONTRIBUTIONS - 

Feel free to fork this project and add your own ideas or improvements. Pull requests are warmly welcome.
