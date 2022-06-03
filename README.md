# Event Organiser Dashboard
<img width="839" alt="event-organiser-management-hompage" src="https://user-images.githubusercontent.com/93338557/171903905-9f1ff256-bf26-4bca-b6f6-9c02322a587d.png">

## Client Specification

You have been asked to build a dashboard that makes it easy for organisers to view race start list entries and ticket sale revenue.

1. It must be possible for organisers to apply a filter so that they can see only their start list entries.
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

This should open the application in your browser at which point, you can click in the search bar and search for an organiser:

https://user-images.githubusercontent.com/93338557/171904930-65d005c5-a6c2-45e1-a58e-cd22070f438e.mp4

You can click on any of the organisers to enter the organiser specific dashboard, which will display the list of events and the total ticket sales. You can also use the logo to re-route to the home page:

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
- React Router DOM - a package that enables the implementation of dynamic routing in a web app
- Jest - unit and feature testing, including coverage
- React Testing Library - library for testing React applications, which focuses on testing components from the end-user's experience

## My Approach

I approached this task, firstly by planning. This was to ensure I understood what the client wanted as their output and to ensure that I went about it in a measured way.

I decided to use React for this task. The reason behind this is that by utilising a React App, it made the project simple for the client to use without needing a more in depth technical knowledge. All they have to do is download the repository and once inside the repository they can type ```npm start``` and be faced with a simple to use and intuitive User Interface. Further down the line, this app could be hosted and the client would just have to visit the webpage.

I started by planning out what would be best for the client's user experience, this led me to believe that having the starting page displaying all the organisers would be best as this fit with the client's specification "It must be possible for organisers to apply a filter so that they can see only their start list entries". This way the user could look specifically at their events and start list entries. I then went on to think that the user wouldn't want to have to sift through all their start list entries when looking specifically for one event and it made sense to me that for a good user experience the next page displayed would be events specific to that of the organiser selected. From there I thought that the start list entries for the specified event. This marked out how I wanted the pathing of the website. I implemented the pathing of the website utilising React Router using parameters to pass across Organiser and Event ids to the respective dashboards to ensure that the data could be filtered accordingly to display the correct information.

This moved my planning for the next client specification "It must also be possible for each organiser to see how much they have made in ticket sales”. I decided that this would be important to display across all events. I then also thought it may be valuable to the client to know how much money was made per event. Having looked at the data thoroughly, I noticed that the tickets had the "ticketPrice'' key, which included an object containing "originalValue", "value", "fee" and "currencyValue". I decided that it would be pertinent to use the "value" to calculate the total ticket sales, as there may be at any given time a discount on tickets and I believed that this would be reflected in "value" and not "originalValue''. I then also noted that there were three "status" types - "CONFIRMED", "PENDING" and "REFUNDED". This appeared to me that the money had been collected and confirmed as revenue from the "CONFIRMED" status, the money had been refunded to the individual if the status was "REFUNDED" and that the "PENDING'' status would mean that the ticket value could either become "CONFIRMED" or "REFUNDED". I therefore believed that in order to get an accurate representation of the turnover, it was most appropriate to calculate the total revenue from ticket sales to only take into account tickets with the "CONFIRMED" status. However, should the client wish for "PENDING'' to be included, this would be easily changeable when filtering the data. To ensure this, a component for calculating the ticket values was used to extract the logic and be reused across the app.

When I began the creation of the app, I was intending to create a Get request to utilise the data provided from ```https://ldt-tech-test.herokuapp.com/api/startlistentries```, however, the Get request was blocked due to the CORS policy. Therefore I created a JavaScript file containing the data. Although beyond the scope for the current project, should the data being requested be updated, then a Get request would be used along with updating the CORS policy on the backend to ensure there is good communication between the front and back ends. 

As an added bonus feature, I enabled a real-time search bar to the organisers page. This was to ensure that should there be an increase in the number of organisers, it would improve the user experience and make filtering the data for the user more manageable.

## Future Work

Should I have had more time to work on this project there are a number of features I would have implemented:
- I would have implemented the search feature across all aspects of the website
- I would have implemented full end to end testing utilising Cypress, however, due to issues with Cypress and React 18 as well as having very recently switched to using a Windows PC using Ubuntu on Windows Sub Linux, I did not have sufficient time to fix the bugs occurring on my machine
- I would have implemented the ability for the user to add, update and delete events and start list entries directly on the website
- Further extension could have come by implementing user authentication, which would link to the organiser's dashboard that the user is associated with
