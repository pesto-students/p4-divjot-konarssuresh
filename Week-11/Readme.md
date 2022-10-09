### Redux Exercise 1

Use the below Codesandbox linkhttps://codesandbox.io/s/github/dceddia/plain-react-state-lightswitchIt’s a plain React app displaying a “Room” with a lightswitch. Clicking the buttontoggles the state, which turns the light on and off.The task is to add Redux to this app, and move the lightswitch state out of the Reactcomponent and into Redux.Once you’re done, clicking the button should dispatch an action, and the reducershould return the updated lightswitch state.

You can leave everything in one file, or split out the Room component into its ownfile if you like.If youdoleave it all in index.js, you won’t needto export the connected Roomcomponent. Instead, save it in a separate variable, likeconst ConnectedRoom =connect(mapStateToProps)(Room)– and update theReactDOM.rendercall torender the ConnectedRoom

#### solution - https://codesandbox.io/s/plain-react-state-lightswitch-forked-n9rbhr?file=/src/index.js

### Redux Exercise -2

Create a brand new React project withCreate ReactApp1orCodeSandboxDelete the boilerplate code from index.js and start fresh.
Add Redux to the project as you’ve done before.There’s just one component here: the StepCounter. It should have 2 buttons, one“Add Step” and one “Reset Steps”, as shown above.
Clicking “Add Step” shouldincrement the step counter by 1, and “Reset Steps” should clear it. (think: how manyactions will you need?)

For each action, create an action constant and an action creator. UsemapDispatchToProps to pass the actions in as props to the StepCountercomponent. Try out the object form of mapDispatch as well as the function form.You can break the project up into files if you like, or keep it all in one file. If you wanta suggestion, try for an index.js with the createStore + reducer, a StepCounter.jswith the component and any necessary connect() setup, and an actions.js with theactions (don’t forget to export them!).

#### solution - https://codesandbox.io/s/magical-pascal-030h0m
