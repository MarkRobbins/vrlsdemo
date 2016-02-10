Feature: Create Account

  As a visitor
  I want to create an account
  So that I can use exclusive features of the site

  Background: Fake data for Account Creation
    Given the existing <account_name> and <email>
    | account_name | email                | password   |
    | john.doe     | john.doe@nowhere.com | Qwerty!234 |
    | jane.doe     | jane.doe@nowhere.com | Qwerty!234 |
  #@watch
  Scenario: Valid Account Information

    When I visit the account creation page
      Given I use "some_username" as the username
      And I use "some_email@nowhere.com" as the email
      And I use "Qwerty!234" as the password
      And I use "Qwerty!234" as the challenge password
      And I submit the form
    Then I should see see a confirmation page with the message "Account Created"
      And I should see a link to the login screen
  #@watch
  Scenario: Duplicate Username

    When I visit the account creation page
      And I use "john.doe" as the username
    Then I should see an error message with the message "The username is already taken"
      And I should see the username emphasized
  #@watch
  Scenario: Duplicate Email

    When I visit the account creation page
      And I use "some.username" as the username
      And I use "jane.doe@nowhere.com" as the email
    Then I should see an error message with the message "The email is already taken"
      And I should see the email address emphasized
  #@watch
  Scenario: Not A Strong Password

    When I visit the account creation page
      And I use "some.username" as the username
      And I use "some.email@nowhere.com" as the email
      And I use "qwerty" as the password
    Then I should see the error message "The password must be at least 6 characters long and contain at least 1 Capital letter, 1 Symbol, and 1 number"
      And I should see the password emphasized

  #@watch
  Scenario: Passwords do not match

    When I visit the account creation page
      And I use "some.username" as the username
      And I use "some.email@nowhere.com" as the email
      And I use "Qwerty!234" as the password
      And I use "Qwerty1234" as the challenge password
    Then I should see the error message "The password and challenge password do not match"
      And I should see the password and challenge password emphasized
