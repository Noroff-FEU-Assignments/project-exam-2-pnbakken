> Written with [StackEdit](https://stackedit.io/).

# Project Exam 2 - Just Post social media front-end

This is my submission for Project Exam 2 for December 22. The app is a front-end for the [Noroff API social endpoints](https://noroff-api-docs.netlify.app/) .
It is hosted [here](here)
In order to access the app you must register a user with the following requirements:

- **Email:** must be unique and in the form of `anything@stud.noroff.no`.
- **Username** must be unique and in the form of `a-z, 0-9, _`.
- **Password** must be at least `8` characters.

The app will receive an object with a token which will authenticate all subsequent API calls.

## Table of Contents

[1. Just Post User Guide](#1) 2. Developer Guide 1. Codebase Structure 2. Components 1. Top-Level Components 2. Contexts 1. 3. Pages 1. 4. Page-Components 1. 5. Hooks
.1 6. Utilities
.1 3. Some notes on styling 4. 3. Something else 4.

## <a name="#1">1. Just Post User Guide</a>

### Access

In order to access the app you must register a user with the following properties:

- **Email:** must be unique and in the form of `anything@stud.noroff.no`.
- **Username** must be unique and in the form of `a-z, 0-9, _`.
- **Password** must be at least `8` characters.

The app will receive an object with a token which will authenticate all subsequent API calls. Until the user logs out.
