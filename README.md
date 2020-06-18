# Voicer
You can find the deployed project at https://www.voicer-app.com

#Badges
[<img src ="https://img.shields.io/packagist/l/doctrine/orm.svg" />](https://img.shields.io/packagist/l/doctrine/orm.svg)
[<img src ="https://img.shields.io/badge/react-v16.7.0--alpha.2-blue.svg" />](https://img.shields.io/badge/react-v16.7.0--alpha.2-blue.svg)
[![Maintainability](https://api.codeclimate.com/v1/badges/d96d9240f248b31ce972/maintainability)](https://codeclimate.com/github/Lambda-School-Labs/voicer-fe/maintainability)
[![Test Coverage](https://api.codeclimate.com/v1/badges/d96d9240f248b31ce972/test_coverage)](https://codeclimate.com/github/Lambda-School-Labs/voicer-fe/test_coverage)

## Contributors

Joseph Oliver
[<img src="https://avatars1.githubusercontent.com/u/46079055?s=460&v=4" width = "200" />](https://github.com/j0liver)

Brian Hague
[<img src="https://avatars3.githubusercontent.com/u/2449547?s=460&u=e9a01ef6432007e6aa7e8328f8eaea830ddf868b&v=4" width = "200" />](https://github.com/alphaseinor)


David Francis
[<img src="https://avatars3.githubusercontent.com/u/19578799?s=460&u=ada7469f7ab10d073581c1e373a471c8ea67ef71&v=4" width = "200" />](https://github.com/davidjayfrancis)


Tim Jeffries
[<img src="https://avatars2.githubusercontent.com/u/48488539?s=400&u=af65e60066e644016e2d54d8e45cf86760e335df&v=4" width = "200" />](https://github.com/TimRexJeff)


Christopher Quinn
[<img src="https://avatars1.githubusercontent.com/u/3174281?s=460&v=4" width = "200" />](https://github.com/xerillius)




## Project Overview

Trello Board: https://trello.com/b/bSVcWjZF/voicer

Notion documentation: https://www.notion.so/Voicer-3276d8fdf5df414299411e3e393167cd

## Mission
To create a voice over marketplace environment where users can post jobs, connect with reliable voice-over talent, offer a file delivery service between project owners and talent, and facilitate the financial transactions between the two parties.  


### Key Features

-    Users can create unique profiles that showcase their creative talent. 
-    Users can upload audio samples, and assign tags to individual audio samples to enhance searchability
-    Users can post jobs and "hire" individuals that have applied
-    Users can browse user profile snapshots, listening to audio samples in a Twitter-like format

## Tech Stack


### Front end built using:
The Voicer-App tech stack is as follows: 
- React for front-end framework 
- MaterialUI for styling/css
- @testing-library/react for unit testing
- Postgres for the database
- Heroku for backend deployment
- Netlify for frontend deployment
- AWS for asset storage (audio files)

#### React

React is a well supported, fully featured front end framework. We use Context for state management (instead of redux) since our global state schema is relatively simple (i.e.we think using redux for this application would be overkill). 

#### Node Sass

We started the project using Node Sass and Bootstrap, but will merge/migrate to MaterialUI in the near future. 

#### axios

-    We use axios for API calls. The framework is lightweight and simple, and meets all current needs of the project. 


#### Front end deployed to Netlify

#### [Back end](https://github.com/Lambda-School-Labs/voicer-be) built using: 

-    Postgres for database
-    Heroku for backend deployment
-    AWS for storage of audio samples


# APIs

## 2️⃣ Authentication API here

The authentication API is a gatekeeper function that is embedded in Provider.DataContext. We check if there's a token, and whether that token is still valid. While the token is valid, users remain logged in. When a user logs out or the token is deleted, the token is deleted. 

## 2️⃣ Payment API here

There is currently no payments API for Voicer-App. 

## 3️⃣ B&W computer image loader API

We use an API for "random" image generation on the Jobs/Marketplace component (mostly to make advertised jobs a bit more visually appealing.) Documentation for the API can be found at: https://picsum.photos

# 5️⃣ Content Licenses

🚫For all content - images, icons, etc, use this table to document permission of use. Remove the two placeholders and add you content to this table

| Image Filename | Source / Creator | License                                                                      |
| -------------- | ---------------- | ---------------------------------------------------------------------------- |

| rings.svg      | Material Icons      | [MIT](material.io)                             |

# 4️⃣ Testing

We use @testing-library/react for unit testing. This library had the advantage of working tightly with React and not needing additional setup. 

We expect a minimum threshold of 30% for test coverage. 

# 4️⃣ Installation Instructions

To install the required directories for this project: 

1. Clone the master branch to your local device
2. CD into `/voicer-client`
3. From the terminal, run `npm i` or `yarn install`

## Other Scripts

    * start - starts the production server after a build is created
    * test - runs tests in **tests** directory \* eject - copy the configuration files and dependencies into the project so you have full control over them

# Contributing

When contributing to this repository, please first discuss the change you wish to make via issue, email, or any other method with the owners of this repository before making a change. The best way to make a suggestion is to contribute to the Trello Board. 

Please note we have a [code of conduct](./CODE_OF_CONDUCT.md). Please follow it in all your interactions with the project.

## Issue/Bug Request
   
 **If you are having an issue with the existing project code, please submit a bug report under the following guidelines:**
 - Check first to see if your issue has already been reported.
 - Check to see if the issue has recently been fixed by attempting to reproduce the issue using the latest master branch in the repository.
 - Create a live example of the problem.
 - Submit a detailed bug report including your environment & browser, steps to reproduce the issue, actual and expected outcomes,  where you believe the issue is originating from, and any potential solutions you have considered.

### Feature Requests

We would love to hear from you about new features which would improve this app and further the aims of our project. Please provide as much detail and information as possible to show us why you think your new feature should be implemented.

### Pull Requests

If you have developed a patch, bug fix, or new feature that would improve this app, please submit a pull request. It is best to communicate your ideas with the developers first before investing a great deal of time into a pull request to ensure that it will mesh smoothly with the project.

Remember that this project is licensed under the MIT license, and by submitting a pull request, you agree that your work will be, too.

#### Pull Request Guidelines

- Ensure any install or build dependencies are removed before the end of the layer when doing a build.
- Update the README.md with details of changes to the interface, including new plist variables, exposed ports, useful file locations and container parameters.
- Ensure that your code conforms to our existing code conventions and test coverage.
- Include the relevant issue number, if applicable.
- You may merge the Pull Request in once you have the sign-off of two other developers, or if you do not have permission to do that, you may request the second reviewer to merge it for you.

### Attribution

These contribution guidelines have been adapted from [this good-Contributing.md-template](https://gist.github.com/PurpleBooth/b24679402957c63ec426).

## Documentation

See [Backend Documentation](https://github.com/Lambda-School-Labs/voicer-be/blob/master/README.md) for details on the backend of our project.
