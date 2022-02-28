# Test Assignment Part-1
## CYPRESS-E2E-tests
- E2E testing using cypress

## Requirements/Pre-Requisites
- git
- Javascript
- node.js
- npm
- cypress

## Execution steps to run E2E tests
- Clone this project in your local machine 
- Open the project in the IDE
- Run the following commands to execute the tests in headed mode
- In the terminal write the following:
    ```
    npm install
    ```
- Run the Backend of the application:

    ```
    npm run start:server
    ```
- Run the Frontend of the application by opening a new terminal in VScode by clicking on the plus button:

    ```
    npm run start
    ```  
If everything is working properly you should be able to open localhost:3000 and see the portal

- In the terminal write the following:

    ```
    npx cypress open
    ```
- Automatically one cypress UI window will open
- Click on ToDoTest.spec.js file
- It will Run ToDo E2E Automation Test under that file
- Click on ToDoAPITest.spec.js file
- It will Run ToDo API Automation Test under that file

## Execution steps to run E2E tests in headless mode
- Below command is to run tests in headless mode:

  ```
  npm run e2eTests_headless
  ``` 

## Execution steps to run E2E tests in headed mode
- Below command is to run tests in headed mode:

  ```
  npm run e2eTests_headed
  ``` 

## Execution steps to run API tests in headless mode
- Below command is to run tests in headless mode:

  ```
  npm run apiTests_headless
  ``` 

## Execution steps to run API tests in headed mode
- Below command is to run tests in headed mode:

  ```
  npm run apiTests_headed
  ``` 

## Test Reports
Execution report can be found under the project and in below format. It generates very good report with all the details if it fails anywhere.
 + HTML format : "cypress\reports\report.html" 
 + JSON format : "cypress\reports\report.json" 

## Instructions to run on Gitlab
- Navigate to CI/CD and click on "Run Pipeline"
- have created the .gitlab-ci.yml file
- For running cypress test I have added the docker image but the pipeline will fail for now as I do not know what image is necessary for building and running the application.
- If we have the image information then we can run the ci pipeline successfully.

## The project directory structure
The project follows the standard directory structure used in cypress projects:
Thuisbezorgd-Test-Automation
  + cypress
    + fixtures                      testdat.json
    + framework 
    + helpers                                           
    + plugins                       index
    + reports                       report.html
    + support
    + videos
                               