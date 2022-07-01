# bynder_assignment_ui

Technologies
-------------
* [Cypress](https://docs.cypress.io/) 

Getting Started
-------------
These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

Installing
-------------
Clone the repo to get a working project

Running the tests from command line mode
-------------------
cd to project path  
Run the command from cmd with parameters
`TBD`



###Login Feature scenarios are as follows:
```

Feature: Login

Scenario Outline: User can Log In
    Given the user is on the Login page
    And the user login as "<User>"
    Then the user is on the "<PageType>" page
    Examples:
    | User         | PageType                    |
    | Registered   | Dashboard                   |
    | Non-Existing | Incorrect credentials Alert |

Scenario Outline: User Can Log out
    Given the "<User>" user is logged in
    When the user opens Admin DropDown Menu
    And the user select Logout
    Then the user is on the Login page
    And the user is logged out
    Examples:
    | User       |
    | Registered |
```