Feature: Browse to app
  As a human
  I want to see if the app is running
  So I confirm

  @watch
  Scenario: Launch the app
  Given I have visited localhost:3000
  Then I actually see "Welcome to Meteor!"