
# Todo Application - Setup
We have built an application for you where you can clone and run it locally and have access to the code and have your own database, doing it this way will give you the best learning experience and you can see what is happening behind the scene.#

# Running the Application:
* In VS code open the terminal (Terminal > New terminal). VScode will open the terminal and navigate to the correct folder automatically. To make sure that you are in the correct folder in the terminal write the following and hit enter:
```
ls
```
And then you should see the package.json file

* In the terminal write the following:

```
npm install
```

* Run the Backend of the application:

```
npm run start:server
```

* Run the Frontend of the application by opening a new terminal in VScode by clicking on the plus button:

```
npm run start
```
If everything is working properly you should be able to open localhost:3000 and see the portal

> To make sure that the frontend and backend are connecting properly, you will need to create an account using the UI. If it was created correctly then everything is configured as it should be.


# About the application


The application is a simple todo application where you can add, delete and mark tasks as completed. There are three important functionalities that we want to see how you are going to test as below:

* The welcome message will change when you visit the application. It will say “Good morning”, “Good afternoon”, “Good evening” or “Time to sleep” depending on time off day.

<img width="978" alt="MicrosoftTeams-image (15)" src="https://user-images.githubusercontent.com/100218115/155163501-dddac8dd-dff6-4081-a60c-25ef03d15dc1.png">

*  The users name will be shown in the title, but if the name contains a “@” or “.” or has less that 3 characters, the application will show “USER” instead of the real name.

<img width="978" alt="MicrosoftTeams-image (17)" src="https://user-images.githubusercontent.com/100218115/155163618-88b7bc88-5b18-46f5-9ab6-58075af4dbb8.png">

*  If more than 5 tasks are added, a pagination will appear (5 tasks every page).

# Assignment:


1. Create an Automation test using cypress.io to test the UI, try to cover at least the functionalities that we mentioned above.
2. Create an Automation test using cypress.io to test the API.
3. Create an Automation test using cypress.io to test one E2E scenario (Add new To Do).

# Bonus:


Running the automated test on cloud (Gitlab or Github actions) is a plus.

# Important information:


Please share a github or gitlab link with the results within 5 working days.
