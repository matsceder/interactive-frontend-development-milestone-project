# Simon Memory Game
Interactive Frontend development milestone project

This is my second milestone project with Code Institute. Here I've made a Simon Memory Game to show that 
I've learned the basics, and hopefully a bit more, of Javascript, jQuery, testing with Jasmine and making 
it into an interactive front end page. Of course I also get to repeat and practise my HTML and 
CSS skils a bit more too.

Hosts: [GitHub Pages](https://github.com/matsceder/interactive-frontend-development-milestone-project/index.html)  
Repository: [GitHub](https://github.com/matsceder/interactive-frontend-development-milestone-project)

## UX
![Display of page look on different devices](documentation/ifedmp-responsive.png)

### User Stories
The expected user is most likely on the page to play the game. It could also be a person learning to code 
and looking for inspiration for making a Simon Game of their own. Since this page is really simple and 
straight forward I don't see that many other options for usage. I'm convinced users will find what they're 
looking for and won't have to think for long before they figure out how to use it for their needs.

### Design
My intention was to create a nice and simple look that stood out a little from how the physical storebought 
game looks. Since the game itself will have colored buttons flashing it would be nice to have a dark space 
gray-ish backtround and some nice contrasting colors for the game itself. The game is simple and meant for 
kids to play, and I've always thought of pastel colors to feel somewhat childish but also charming and nice at 
the same time. 
* Pastel colorscheme from [Schemecolor](https://www.schemecolor.com/pastel-color-tones.php).
* For other selection of colors I used [Color Scheme Designer 3](https://http://colorschemedesigner.com/csd-3.5/).
* Fonts used are [Orbitron](https://fonts.google.com/?query=orbitron), [Roboto](https://fonts.google.com/?query=roboto) and [Silkscreen](https://www.fontsquirrel.com/fonts/Silkscreen?filter%5Bclassifications%5D%5B0%5D=pixel&sort=hot).

### Mockups
Here are my mockups for the different devices. 
[Mobile](https://www.figma.com/file/AhTZTwGAI8af8Aic9391UM/Memory-game-page?node-id=17%3A3),
[Tablet](https://www.figma.com/file/AhTZTwGAI8af8Aic9391UM/Memory-game-page?node-id=17%3A2),
[Desktop](https://www.figma.com/file/AhTZTwGAI8af8Aic9391UM/Memory-game-page?node-id=0%3A1).
 
## Features

This is a small project that I consider to be done, with no plans of making the page more advanced. 
So there are no plans of additional features.
### Existing Features
- Responsive design - Mobile first application
- Documentation - README.md and Mockups
- JavaScript focused development
- Colorscheme
- GitHub - Remote repository and deployment
- Git - Version control
- Jasmine Testing
- Bootstrap Icons

## Technologies and tools used

- [HTML](https://developer.mozilla.org/en-US/docs/Web/HTML)
    - Used for the strucure of the page
- [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)
    - Used for styling
- [JavaScript](https://www.javascript.com/)
    - JS is used for dynamic functionallity
- [JQuery](https://jquery.com)
    - JQuery is used to simplify DOM manipulation
- [GitHub](https://github.com/)
    - Is the service used for hosting my repository
- [GitHub Pages](https://pages.github.com/)
    - Used for hosting the website
- [Gitpod](https://www.gitpod.io/)
    - To write and run my code in real time for development
- [Google Chrome](https://www.google.com/chrome/)
    - Chrome has been used for browsing and Dev Tools
- [Google](https://www.google.com/)
    - Used for research
- [Google Fonts](https://fonts.google.com/)
    - Is where I found the fonts used in the page 
- [Bootstrap](https://getbootstrap.com/)
    - Bootstrap is where I got the HTML and CSS frameworks
- [Schemescolor](https://www.schemecolor.com/)
    - Used for finding a nice colorscheme to start working from
- [Color Scheme Designer 3](https://http://colorschemedesigner.com/csd-3.5/)
    - Used for picking complementary colors
- [Am I Responsive](http://ami.responsivedesign.is)
    - Testing of the site to make sure it's responsive
- [The W3C Markup Validation Service](https://validator.w3.org/)
    - For testing of all the HTML and CSS, looking for flaws in the code
- [Font Awesome](https://fontawesome.com/)
    - Icons used on the page was found here
- [Youtube](https://www.youtube.com/)
    - For tutorials, guides and inspiration
- [Jasmine](https://jasmine.github.io/)
    - Testing Javascript behaviour and sorting out unnecessary code

## Testing

This project has gone through manual testing of all functions, testing of HTML and CSS, and some of the Javascript
has been tested with Jasmine. For some reason it took me a long time to get the Jasmine to work the way I wanted 
it to do. But then after looking at some more instructional videos, reading a few guides and talking to the tutor 
assistance at Code Institute it started making sence. I'm aware I'm not testing all everything, but I think it's 
enough to show that I now understand and know how to use it. In the beginning of the project I spent way too much 
time trying to work out Jasmine and implement test-driven development. After a while I realized that it did not 
make sence at the moment. My basic knowledge and experience in Javascript was not good enough to be able to work 
that way. It made more sence to start with JS and get a better understaning of how it works, then write tests and 
really understand how they work and get used to that. I'll present my tests a little closer here below.

### First Test - Manual testing with Chrome Dev Tools
Using Chrome browser and Dev Tools, checking booth responsiveness, navigation and links. One screen size at a time.
- Mobile 
    - Design and responsiveness - Nothing in the UX is really changing when you go between devices. Only changes 
    are size and scale of layout and it is working good.
    - Links and Buttons - The buttons for the game is working. Mute mode works and when the rules button is 
    clicked the modal pops up nicely. Link to tutorial video works too.
    - Game - The game itself is working good, counter clock is looking nice and the flashing of the play buttons 
    is contrasting nicely.
- Tablet (Normal and bigger)
    - Design and responsiveness - Nothing in the UX is really changing when you go between devices. Only changes 
    are size and scale of layout and it is working good.
    - Links and Buttons - The buttons for the game is working. Mute mode works and when the rules button is 
    clicked the modal pops up nicely. Link to tutorial video works too.
    - Game - The game itself is working good, counter clock is looking nice and the flashing of the play buttons 
    is contrasting nicely.
- Desktop (Laptop and large screen resolution)
    - Design and responsiveness - Nothing in the UX is really changing when you go between devices. Only changes 
    are size and scale of layout and it is working good.
    - Links and Buttons - The buttons for the game is working. Mute mode works and when the rules button is 
    clicked the modal pops up nicely. Link to tutorial video works too.
    - Game - The game itself is working good, counter clock is looking nice and the flashing of the play buttons 
    is contrasting nicely.

### Second Test - Validation of code using W3C Markup Validation Service
- Testing HTML
    - Testing of the HTML went smoth. Had a div that had been misplaced when moving things around, though all 
    functions was working. So that was an easy fix.
- Testing CSS
    - Tested the CSS too and first ran into some trouble with the font-face code. I had never added a font from 
    a local source before that but made it work, and the error in the code was just a minor mistake.

### Third Test - Javascript behaviour using Jasmine
As mentioned earlier. My knowledge of both Javascript and Jasmine was nowhere near what's needed for test-driven 
development when I started this project. Therefor it got pushed back to be one of the last steps of my process.
- Here are the different things I've tested in the code.
    - Testing so button clicks changes CSS
    - Testing that the modal open and closes
    - Testing that the buttons call correct functions
    - Testing that the game audio plays as it should

## Deployment

The host for this site is [GitHub Pages](https://github.com/matsceder/interactive-frontend-development-milestone-project/).  
These following steps were made to create and set up the repository:
- Created a new repository at GitHub, including an index.html and a README.md-file.
- In the terminal, make sure to add, commit and push your project the repository.
- In the repository at GitHub, go to settings and scroll down to GitHub Pages.
- Choose the desired branch as your source(I used the master branch). 
- Use the provided link for your index page. And here you can also provide a custom domain name.
These stes were then followed to deploy the site:
- Go to [GitHub Pages](https://pages.github.com/) and install GitHub Desktop(Instructions for deployment are also provided on this site)
- Go to the repository and choose "Clone or download".
- In GitHub Desktop, select your repository and push "Publish".
- The project should now be online and ready to visit at "*username*.github.io.

From here on, changes that are made in the master branch will appear on the site as soon as they are pushed.
Just update the browser after your work is pushed, sometimes it might take a little while for the changes to show.
This gives you the option to keep making changes and develope the site under different branches. They can later be merged or switched from the master branch to a new desired one.
I've been running the code locally using GitPod Online and serving it through port 8000, by typinig "python3 -m http.server" in the terminal.

## Credits

### Content
Credit where credit is due. These are my sources to get throgh this project.
- [Bootstrap](https://getbootstrap.com/) - Used for icons and buttons
- [freeCodeCamp](https://www.youtube.com/watch?v=n_ec3eowFLQ) - The video tutorial I followed to make the game
- [freeCodeCamp](https://github.com/beaucarnes/simon-game) - The repository for the tutorial
- [W3School](https://www.w3schools.com/howto/howto_css_modals.asp) - Helped me make my modal
- [stackoverflow](https://stackoverflow.com/) - Looking at different peoples solutions to problems similar to mine. Great source.
- [Jasmine](https://jasmine.github.io/) - For understanding Jasmine I used their page, and also the following sources.
    - [Tutorialspoint](https://www.tutorialspoint.com/jasminejs/jasminejs_spies.htm)
    - [Stackoverflow](https://stackoverflow.com/questions/9510148/using-jasmine-to-spy-on-a-function-without-an-object) 
    - [CodewithHugo](https://codewithhugo.com/jest-fn-spyon-stub-mock/#jest-not-tobecalled-not-tohavebeencalled-asserting-a-stub-spy-has-not-been-called)
    - [Devhints](https://devhints.io/jasmine) 
    - [TravelTimN](https://github.com/TravelTimN/ci-ifd-lead/blob/master/week5-jasmine/jasmine.md#further-resources--additional-reading) 
    - [Dylan Israel](https://www.youtube.com/watch?v=h2eWfvcAOTI) 
    - [Daveceddia](https://daveceddia.com/jasmine-2-spy-cheat-sheet/) 
    - [Scriptverse](https://scriptverse.academy/tutorials/jasmine-createspy-createspyobj.html) 

### Media
- [Fontsquirrel](https://www.fontsquirrel.com/fonts/Silkscreen?filter%5Bclassifications%5D%5B0%5D=pixel&sort=hot) - Font used in the project
 
### Acknowledgements
For inspiration and help to make this page I'd like to thank the following:
- Seun Owonikoko @seun_mentor
- Code Institute and the Tutor support team
 
 