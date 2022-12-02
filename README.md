# Project Exam 2 - Just Post social media front-end

This is my submission for Project Exam 2 for December 22. The app is a front-end for the [Noroff API social endpoints](https://noroff-api-docs.netlify.app/). It is hosted [here](here).
In order to access the app you must register a user with the following requirements:

- **Email:** must be unique and in the form of `anything@stud.noroff.no`.
- **Username** must be unique and in the form of `a-z, 0-9, _`.
- **Password** must be at least `8` characters.

The app will receive an object with a token which will authenticate all subsequent API calls.

## Table of Contents

- [0 Update Notes](#0)

- [1 Just Post User Guide](#1)

- [2 Developer Guide](#2)

- [3 Notes on Styling](#3)

## <a name="#0">0. Update Notes</a>

### v0.5.0

Functional version of the app that includes a basic version of pretty much every user story.

#### Issues

- Replying to a comment doesn't work. I changed the input component and need to re-attach it
- Adding tags do a post does work, but not on Chrome browsers on Android. I haven't tested iPhones or Safari yet. Although the display component doesn't update the tags get collected and will be displayed on the sendt post.

#### Things left to do

- Basically do-over everything but better.
- Need to add pagination to fetched lists
- Should add a user search function
- Fix scroll position when switching from post detail display
- Improve UI flow
- Make it look better
- Add dream features like displaying following feed, image carousel, most commented/reacted posts etc

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

#### Left to do:

- Improve user image menu ui and flow
- Finish styling reaction menu.
- Finish styling all small details
- Create About page

### v0.7.1

Api pagination broke post feed selector. Fixed it
