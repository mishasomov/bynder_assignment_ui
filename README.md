# bynder_assignment_ui

Technologies
-------------

* [Cypress](https://docs.cypress.io/)

Installing
-------------
Clone the repo to get a working project.

To start work locally run following commands in terminal

`cd /your/project/path`

`npm install`

`npm install cypress --save-dev`

`npx cypress open`

Running tests from command line mode in container
------------------- 
To Run Cypress e2e tests headlessly without copying files in Docker Container

`cd /your/project/path`

`sh cy-run.sh`

### Login Feature scenarios are as follows:

```
Feature: Login

Scenario Outline: User can Log In
    Given the user is on the Login page
    And the user login as "<Usertype>"
    Then the user is on the "<PageType>" page
    Examples:
    | Usertype     | PageType                    |
    | Registered   | Dashboard                   |
    | Non-Existing | Incorrect credentials Alert |

Scenario Outline: User Can Log out
    Given the "<Usertype>" user is logged in
    When the user opens Admin DropDown Menu
    And the user select Logout
    Then the user is on the Login page
    And the user is logged out
    Examples:
    | Usertype   |
    | Registered |
```