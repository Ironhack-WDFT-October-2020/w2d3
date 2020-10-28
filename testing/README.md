## Testing is the concept of checking if our program or app functions in the way that we expect it to function

For this purpose we use automated tests. The tests are just code that is also written in JavaScript that calls and executes parts of our program or our app and checks if everything works as expected.

### Advantages of testing - and that means automated testing here, not 'trying it out and see if it works'
- Can be repeated with no additional effort and executed quickly
- We can add / change code without fearing to break something (we would see that immediately)
- Saves  time in the long run 
- It forces us to structure our code -> cleaner, more readable code
- We can integrate testing into other automated workflows
- Often better than documentation - tells you exactly whats happening in the code

### There are different forms of automated tests:
(only the first one is interesting to us now - but it is good to have some context and see the bigger
picture)

* Unit Tests - fully isolated (e.g. functions) - you want to have a loooot of them 

* Integration Tests - with dependencies (e.g. function calling anoter function) - a good couple of them 

* End-to-End - test of a whole process (e.g. user clicks a button and the dom gets updated) - few of these

![Alt Text](https://www.shapeblue.com/wp-content/uploads/2018/11/1541174074683725.gif)

## TDD - Test Drive Development 

#### You write the test before you implement a piece of the functionality

* Law 1: You can't write any production code until you have first written a failing test
* Law 2: You can't write more of a unit test than is sufficient to fail
* Law 3: You can't write more production code than is sufficient to pass the currently failing unit test

#### Forces you to write a lot of tests which is good
#### Enforces minimal and modular code - otherwise this code would not be testable