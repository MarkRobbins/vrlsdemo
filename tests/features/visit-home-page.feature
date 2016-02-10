Feature: Visit Home Page

  As a visitor
  I want to visit the home page
  So that I can browse the website


  Scenario: Page Load
  Given I visit the home page
  Then I should see a link to the account creation page on the global navigation
  And I should see a link to the login page on the global navigation
  And I should see a link to the home page on the global navigation
  And I should see this message in the main content area
  """
    Lorem ipsum dolor sit amet, consectetur adipiscing elit.  Sed dignissim
    euismod pulvinar. Sed convallis neque non luctus semper.  Quisque leo
    arcu, mattis vitae eros in, blandit gravida orci. Vivamus quam orci,
    semper sit amet nisi vitae, sollicitudin porttitor neque. Vestibulum
    ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia
    Curae; Ut tempus purus vel leo luctus lacinia. Nullam ac ante nec tortor
    interdum eleifend. Quisque rutrum mauris non turpis fermentum maximus.
    Cras malesuada dui eget malesuada gravida. Suspendisse lacinia ipsum
    commodo odio ullamcorper tempus. Pellentesque rutrum egestas ex at
    congue. Ut dignissim leo sed urna iaculis, eget feugiat sapien lobortis.
    Pellentesque lacinia ex quis fringilla aliquet. Integer faucibus urna
    eget enim mollis luctus.
  """
