# Tic-Tac-Toe

## About

Tic-tac-toe is a game in which two players, X and O, take turns marking empty spaces in a 3x3 grid.  The player who gets 3 markings in a row, wins the game.

## Planning

The planning for this project started with the wireframe, thinking about how best to present the game board along side the additional requirements for the game while keeping it simple and sleek.

Once that was in place, I began working with General Assembly's Tic-Tac-Toe API to get users signed and logged in.  Then I made sure the user was able to change their password.

After a user was successfully able to login I started working on the game API, just creating a game and adding moves to the game history.  At the point that I felt comfortable making the correct API calls I started to add the logic to my game along side the visual representations of the game itself.  

Once the game had successfully meet all the requirements I went back and started to improve the visuals of the site.

### Wireframe

Below is an image of my original wireframe that helped me design the start of my project.

![wireframe](/public/images/Tic-Tac-Toe.jpg)

### User Stories

These are the user stories that helped with the development for my game:

1. As a user, I want to be able to sign into the game so that I can play the game.
2. As a user, I want to click on the board to make my picks.
3. As a user, I want to be able to pick who goes first to challenge myself.
4. As a user, I want to be able to change the color/theme of the board to make it more pleasent to look at.

### Improvements

The improvements that I would like to make to the game is to add a settings tab where a user can customize their board layout.  This would require of recoding as I would need to use CSS variables passed through Javascript to be able to change at runtime.  Right now I am currently using SCSS functions which compile before runtime.

I would also like to add an AI to play against.  Different levels of difficulty ranging from randomly selecting squares to strategically making picks.

## Technologies Used

* HTML
* CSS
* SASS
* Bootstrap
* JavaScript
* JQuery
* Ajax
* General Assembly Tic-Tac-Toe API