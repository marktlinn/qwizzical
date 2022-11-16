# qwizzical
A history multiple choice quiz app, made using the OpenTriva API, ReactJS, SCSS & Figma.

**Link to Qwizzical:** https://qwizzical.netlify.app

## Images
**The Welcome Page
<img width="452" alt="frontpage" src="https://user-images.githubusercontent.com/88390425/202168257-cfc35e10-2513-4a7b-aa03-e5a326160d62.png">
<br/>
**Selecting Answers
<img width="1249" alt="selecting" src="https://user-images.githubusercontent.com/88390425/202168358-e4b5a3c9-1fcb-4044-a828-392d9909b795.png">
<br/>
**Submitting/Checking Answers
<img width="1249" alt="checkingAnswers" src="https://user-images.githubusercontent.com/88390425/202168462-4ccb2636-705a-44ec-98c0-5168f79614bf.png">

## How It's Made:
**Tech used:** ReactJS, JavaScript, SCSS, Figma
<br/>
The project is built entirely in ReactJS, and designed in Figma. 
<br/>
For the API calls I created a custom useFetch hook, to retrieve an api token and store it for future calls, to avoid repetition of questions. It then responds to token errors, or when the dbs questions have been exhausted by refreshing and resetting the token.
<br/>
I decided not to add the ability to select the quiz category, as I wanted to build a history quiz. Although that functionality could be easily added by some simple changes to the useFetch hook.
<br/>
Likewise a selection for the difficulty could be added too. However, I wanted to create a quiz which was quick to use and didn't ask the user to make choices about the setup.

## Optimizations
There are other features I would like to add to this app to improve it in future:
<br/>
[ ] - Add localstorage of scores, and display previous results over the last few days.
<br/>
[ ] - Add a header with profile option to see past results, scores etc from localStorage.
<br/>
[ ] - Add colour theme toggle, so the user can toggle from a white background to dark theme
<br/>
[ ] - Add ability to share results with friends.
<br/>

## Lessons Learned:
This was a fun project to get up and running, I got to spend more time working with React which has been great, again making custom hooks to handle data fetching and working to manipulate and display that data in complex objects.
<br/>
Building the game logic was fun, as was the styling. Although simple, it was satisfying to find a colour palette that I liked and thought worked well.
