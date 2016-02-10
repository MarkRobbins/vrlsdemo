Feature: Login

  As a visitor
  I want to login to my account
  So that I can use exclusive features of the site

  Background: Fake Data for Login
    Given the existing <account_name> and <password>
    | account_name | email                | password   |
    | john.doe     | john.doe@nowhere.com | Qwerty!234 |
    | jane.doe     | jane.doe@nowhere.com | Qwerty!234 |

  @watch
  Scenario: Valid Username and Password

    When I visit the login page
        And I use "john.doe" as the username
        And I use "Qwerty!234" as the password
        And I submit the form
    Then I should go to the profile page for my account
        And I should see the message "Welcome john.doe !"
        And I should see the logout link on the global navigation
        And I should not see the login link on the global navigation
        And I should not see the create account link on the global navigation
  #@watch
  Scenario: Invalid Username or Password

    When I visit the login page
        And I use "jane.doe" as the username
        And I use "BadPassword" as the password
        And I submit the form
    Then I should see the error message "Not a valid username or password"
        And I should see the username emphasized
        And I should see the password emphasized
