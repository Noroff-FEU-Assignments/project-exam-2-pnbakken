# Project Exam 2 - [Just Post](https://just-post-app.netlify.app/) social media front-end

This is my submission for Project Exam 2 for December 22. The app is a front-end for the [Noroff API social endpoints](https://noroff-api-docs.netlify.app/).
The live site can be accessed [here](https://just-post-app.netlify.app/).

## Table of Contents

- [1. About](#1-about)

- [2.Getting Started](#2-getting-started)

- [3. Release Notes](#3-release-notes)

- [4. Reflection](#4-reflection)

- [5. Acknowledgements](#5-acknowledgements)

- [0. Update History](#0-update-history)

## <a name="#1">1.</a> About

### Technologies Used

- React
- SCSS
- NPM packages like Axios, React-router-dom, React-hook-form with Yup
- Some Bootstrap
- Adobe XD for design files

### Project Goal

The brief for this project was to design a modern social media front-end, using the social endpoints of the [Noroff API](https://noroff-api-docs.netlify.app/).
It includes a required set of features, in the form of short user stories. The full brief can be read [here](https://github.com/Noroff-FEU-Assignments/project-exam-2-pnbakken/blob/main/BRIEF.MD)

## <a name="#2">2</a>. Getting Started

To use this application just clone the repo, run `npm install`, then run `npm start`. The app wil run on port `3000`, or whichever is available. Or go to the [website](https://just-post-app.netlify.app/)

### User Guide

In order to access the app you must register a user with the following requirements:

- **Email:** must be unique and in the form of `anything@stud.noroff.no`. Does not need to be an actual existing email address.
- **Username** must be unique and in the form of `Aa-Zz, 0-9`. Must not contain any spaces or characters besides `_`
- **Password** must be at least `8` characters.

The app will receive an object with a token which will authenticate all subsequent API calls.

In its current state, the app allows a user to post (image and tags optional), leave a comment or reaction to a post, reply to a comment, follow and unfollow a user and see a list of all their posts, and change the user's own avatar and banner images.

## <a name="#3">3</a>. Release Notes

### v0.8

This is the exam submission version. Most of the worst bugs encountered during development and testing have been fixed, and most of the UI has been revised in order to give more accurate feedback.

#### Known Issues

- Tag input will only delete one tag per round of the post form. Once per post or per edit. If you try to delete more than once, the second deletion is instead replaced by the first.
- ~~Deleting a post while the post is open will result in a not-found error. It seems like the app is still trying to show the post after it's stopped existing. Trying to fix.~~ I fixed this
- App navbar acts strange on mobile browsers. Bounces up and down.
- On the user list page the follow button stopped working when I added data-pagination. It would display as following or non-following on random users. I haven't been able to determine the cause of this so I have removed the buttons from the page to avoid confusion.
- On the user settings page, the user banner and profile image does not update as it should. I've brute-forced a workaround that uses window.location.reload(), as I found it more important to let the user know their image is updated at all, rather than doing so elegantly. Will try to fix.
- I'm not sure how big of an issue this actually is, but the codebase feels enormous, for such a relatively small project. Mostly I've tried to do to what seemed logical at the time, but there are still some components that could be further split into smaller parts, and at the same time there are some components that are way more granular than neccessary, making certain parts a maze to navigate even for someone who's been staring at it for 7 weeks

#### Things left to fix/improve/do

- The issues listed above
- Clean up code and styles.
- Would like to add a search function. For users or posts, or both.
- Fix scroll position when switching from post detail display
- Improve UI flow
- Add more content sections using API data. A list of most commented/reacted posts or a collection of images from posts.
- Add guest user login for later portfolio use. Create a guest user and an automatic login button. Use context to limit guest users to GET functions only.
- Further tidy up styling details
- Add About page
- Maybe add light colour scheme if time permits. I'm dark mode for life, but it's nice to change things up occasionally.
- On very short mobile screens, important content disappears below the fold. For test users who are afraid to even scroll down for fear of doing something wrong - this is a problem.

## <a name="#4">4</a>. Reflection

This is the largest project I've built so far and I'm exhausted. I'm happy with the end result on screen though, minus a few irritations.
I feel like the code and the technical side is messy. This is our first experience building anything remotely close to this size, and the structure is something I've had to work out as I've gone along, resulting in the disorganised state of some of the components themselves and their directories.

As far as DRY principles go this is by far my most css-efficient project, but I know there are redundancies and I'm sure there are plenty more left to discover. This also goes for React components. I have tried to keep reusability of components in mind, but I'm sure I could achieve this just as well with a lot less code.
I feel like I've only scratched the surface of what can be achieved using a framework like React, and I will continue trying to learn and work on whatever projects I can after graduating.

Having said all that; my main take-away is that I've had a lot of fun working on this. Just using the api functionality itself and posting with other students has been a laugh. The brief gives a lot of room for interpretation and I've enjoyed getting to know the API and trying to piece together a pleasant front-end to interact with it.

I've tried to remain objective and keep a personal distance to the design and end-product, but I can't get away from the fact that this is _my_ end-product, and a majority of the choices made underway are purely based on my personal preference. So one thing I'm looking forward to in the future is working in a group where not _every_ decision is mine to make. (Although I have listened to my testers and incorporated what feedback they gave).

## <a name="#5">5</a>. Acknowledgements

_I have noted in the code where I have copied resources._
One place I haven't noted it is in useLocalStorage hook. This is copied from [useLocalStorage hook]("https://usehooks.com/useLocalStorage/")

I couldn't have reached the state of this project (or really, the end of this course) on my own, and I have to acknowledge, in no particular order:

- The tutors at [Noroff](https://github.com/Noroff-FEU-Assignments). I've offered my share of complaints over the last two years, but I recognize that I couldn't have finished this project without the springboard they have provided in forms of written material, video lectures and general course structure, as well as help on Discord when I've needed it.

- [Ankit Soni](https://github.com/aktson) and [Vilde Hystad Lesto](https://github.com/vildehys). For providing feedback, offering suggestions, being good classmates, and all-around good people.

- [Maiken Lindstad](https://github.com/maikenlindstad). For testing and feedback on this exam.

- Inger-Anne Sundbø. My MVP. For going above and beyond with testing, providing feedback, and general encouragement and moral support.

## <a name="#0">0</a>. Update History

### v0.5.0

Functional version of the app that includes a basic version of pretty much every user story.

### v0.5.0.1

Move app to project root, update README

### v0.5.5

Improvements to posting interface. General style revision and improvements.

#### Issues

Still can't get that blessed tag display to update. I'm confident I'll find a solution or worst case just ask, so I'll come back to it later

### v0.6

General styling improvements and fixes. Added feed selector. Added app background image. Styled post comment section

#### New features

Post feed selector. See all posts or posts from followed users.

#### Issues

The flippin tag input is still acting screwy. It adds and displays tags, that persist through an edit, but deleting more than one tag causes mayhem

### v0.6.6

Change app sidebar layout on mobile. Need to implement hide/show function

### v0.7

Finished all remaining unstyled major components. Add working api pagination.

### v0.7.1

Api pagination broke post feed selector. Fixed it

### v0.8

Final version submitted for exam. See release notes
