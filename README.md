# Marama

Marama is a work-in-progress Node.js-based project that aims to create an app where users can access an interactive calendar based on Maramataka and a journal that allows them to reflect on their personal experiences through the different parts of the moon cycle. Currently, the app allows you to see, add, delete and edit the different marama (faces of the moon and individual stages of the moon's cycle) using the UI.
## Getting Started

### 0. Cloning and installation
- [ ] Clone this repo, navigate to it, install packages, run the database and start the server.
  
  <details style="padding-left: 2em">
    <summary>Tip</summary>

    You may also want to start a new branch
    ```sh
    git clone https://github.com/Om-GG/Marama.git
    cd Marama
    npm i
    npm run knex migrate:latest
    npm run knex seed:run
    git checkout -b <branchname> or gco -b <branchname>
    npm run dev        
    ```
  </details>
This will start the server on port 3333 by default.

Open your web browser and navigate to localhost:3333 to access the app.


---

## Using Marama

Once you have the app set up and running, you can use the UI to manage the different marama in the moon cycle. The following operations are available:

* View all marama: Displays a list of all marama.
* Add marama: Allows you to add a new marama with the specified data.
* Edit marama: Allows you to update the marama with the specified data.
* Delete marama: Allows you to delete the marama with the specified data.


In future stages of development, the ability to delete marama will be removed and the ability to create journal entries for each marama in the calendar will be added. These can then be accessed in the journal section (to be created), allowing users to reflect on their past insights and plan for future iterations of their cycles.

By following the steps outlined in this README file, you can set up the project and start using the UI to manage the different marama in the moon cycle.