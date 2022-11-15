# qwizzical
History multiple choice quiz app, made using the OpenTriva API, ReactJS, SCSS & Figma.

**Link to Qwizzical:** https://qwizzical.netlify.app

## Images

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
