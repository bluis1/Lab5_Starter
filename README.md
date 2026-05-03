# Lab 5 - Starter
Make sure you make a PR to your own repo's main and not the class' repo!! Otherwise you will lose points!!

## Info 
Name: Benedict Luis  
Lab Partner: None

## Links
Expose page: https://bluis1.github.io/Lab5_Starter/expose.html
Explore page: https://bluis1.github.io/Lab5_Starter/explore.html

## Questions
1) Would you use a unit test to test the “message” feature of a messaging application? Why or why not? For this question, assume the “message” feature allows a user to write and send a message to another user.

No, because sending messages involves multiple components working together (UI, network and backend), so unit tests alone are not enough.

2) Would you use a unit test to test the “max message length” feature of a messaging application? Why or why not? For this question, assume the “max message length” feature prevents the user from typing more than 80 characters.

Yes, because this is a simple rule (limit to 80 characters) that can be tested independently with unit tests.