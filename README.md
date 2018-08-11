# MyReads Project

This is the starter template for the final assessment project for Udacity's React Fundamentals course. The goal of this template is to save you time by providing a static example of the CSS and HTML markup that may be used, but without any of the React code that is needed to complete the project. 


# You can get the app from this link :
(https://github.com/mostafa-medht/feeds-my-reads)

## TL;DR

To get started developing right away:

* install all project dependencies with `npm install`
* start the development server with `npm start`


## Contributing

This repository is the starter code for _all_ Udacity students. Therefore, we most likely will not accept pull requests.

For details, check out [CONTRIBUTING.md](CONTRIBUTING.md).


## Debounce for better performance
Sometimes the user types too fast and it makes server requests as soon as the user types each search input. Instead of firing on each iteration of the search event, we can ensure it fires only every n milliseconds. Used [Debounce](https://github.com/gmcquistin/react-throttle) for react to implement this and improve performance