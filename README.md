# Event Organiser Dashboard
<img width="839" alt="event-organiser-management-hompage" src="https://user-images.githubusercontent.com/93338557/171903905-9f1ff256-bf26-4bca-b6f6-9c02322a587d.png">

## Client Specification

You have been asked to build a dashboard that makes it easy for for organisers to view race startlist entries and ticket sale revenue.

1. It must be possible for organisers to apply a filter so that they can see only their startlist entries.
2. It must also be possible for each organiser to see how much they have made in ticket sales.

If you have time, you have also been given the opportunity to build in one other feature you think will be useful for our event organisers. As an engineer at Let’s Do This, you are heavily involved in all parts of a product’s development, so in addition to testing your coding ability, we also want to see how you think about engineering in the context of a broader product. Hence, we’re giving you some space to build something you think might be useful.

Some questions that might be helpful to consider:

- What do other products in this space usually do?
- How much time will your proposed features likely take you to implement? Do you have enough time? If not, is there a simpler way to give a user 80% of the experience?

## Setup

Copy the following code into your terminal and hit enter

```
https://github.com/clovellbsc/event-organiser-dashboard.git
```

Change directory into the project by copying the following code into your terminal and hitting enter

```
cd event-organiser-dashboard
```

## Ensuring Dependencies Are Installed

If you do not have node installed on your device you can go to the [NPM documentation](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm "NPM documentation")

If/once you have node installed on your device copy the following code into your terminal and hit enter

```
npm install
```

## Running The Application

Once you are ready to use the application type the following and hit enter
```
npm start
```

This should open the application in your browser at which point, you can click in the searchbar and search for an organiser:

https://user-images.githubusercontent.com/93338557/171904930-65d005c5-a6c2-45e1-a58e-cd22070f438e.mp4

You can click on any of the organisers to enter the organiser specific dashboard, which will dispaly the list of events and the total ticket sales. You can also use the logo to re-route to the home page:

https://user-images.githubusercontent.com/93338557/171905638-7741d783-65b8-4e9a-88b3-70403b7086ff.mp4

Clicking on a specified event will bring up all start list entries for that event and will also render the total ticket sales for the specified event:

https://user-images.githubusercontent.com/93338557/171906392-a3ae32bf-c1b7-43f0-a303-944575eaac8d.mp4


## Running Tests

This project has been tested with the React testing library and Jest. To run the tests you can copy the following into your terminal and hit enter:
```
npm test
```

when this has loaded it will provide you with the following options:

<img width="287" alt="react test" src="https://user-images.githubusercontent.com/93338557/170873311-777a5410-0459-4af2-9704-0cf3ddc2afdd.png">

To run all the tests type:
```
a
```

This will run all the tests and produce a result like this: 

<img width="325" alt="react test for event management dashboard" src="https://user-images.githubusercontent.com/93338557/171906874-e356dd81-723a-4c8c-901f-a2a1e22701ed.png">

To run the tests with coverage, you can copy the following code:
```
npm test -- --coverage .
```

## Technologies Used

- JavaScript - chosen programming language
- Git - version control
- React - front-end JavaScript library
- Jest - unit and feature testing, including coverage
- React Testing Library - library for testing React applications, which focuses on testing components from the end-user's experience
