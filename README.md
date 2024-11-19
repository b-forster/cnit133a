# CNIT 133A - Javascript Libraries & Frameworks

This repository contains my projects submitted for CNIT 133A - Javascript Libraries & Frameworks, offered by the [Computer Networking & Information Technology](https://www.ccsf.edu/academics/ccsf-catalog/courses-by-department/computer-networking-and-information-technology) (CNIT) Department at [City College of San Francisco](https://www.ccsf.edu/) (CCSF).

Each project focuses on a different technology covered in the course. I will continue uploading them as they are submitted throughout the Fall 2024 semester.

This is intended to showcase my learning, and should not be used by students enrolled in the course.

## Topic 01: jQuery

<img width="500" alt="Screenshot of jQuery project" src="https://github.com/user-attachments/assets/09d17faa-057d-43d7-9835-305a3e73fe37">

This project was a review of the [jQuery](https://jquery.com/) library, which was introduced in a prerequisite course.

Clicking on the 'Light Mode' or 'Dark Mode' button triggers a jQuery event that changes the image, its alt text, and the text and background colors of the page.

The text in the jQuery section and the assets were provided for the assignment, but the section of text regarding [HTMX](https://htmx.org/) is my own. It answers a question about how to bind multiple event triggers to the same action. HTMX was briefly introduced at this point in the course, although it is not used in the code for this assignment.

<a href="https://hills.ccsf.edu/~bforster/cnit133a/01-jquery/index.html">View demo</a>

## Topic 02: D3.js

<img width="500" alt="Screenshot of D3 project" src="https://github.com/user-attachments/assets/e9b6cfad-d51d-4367-9d84-a55ae965da13">

This project was my first introduction to [D3](https://d3js.org/), a popular open-source library for visualizing data. 

I used D3 to generate a bar chart from JSON data representing student enrollment numbers for several academic terms. I also used D3 to trigger a tooltip when a bar is moused over, showing the corresponding number of students above the bar.

The text and design were created by me.

<a href="https://hills.ccsf.edu/~bforster/cnit133a/02-d3/index.html">View demo</a>

## Topic 03: Typescript, Node & Deno

This module covered two technologies I was already very familiar with: [Typescript](https://www.typescriptlang.org/) and [Node](https://nodejs.org/en). It also introduced me to [Deno](https://deno.com/), a framework similar to Node and made by the same creator.

Since we were assigned written exercises in lieu of a project, you can see samples of my work with these technologies in the following repositories:
- Typescript: [Reminders](https://github.com/b-forster/react-reminders)
- Node: [D&D Archivist](https://github.com/b-forster/dnd-archivist) (Warning: WIP!)

## Topic 04: Angular

<img width="500" alt="Screenshot of Angular project" src="https://github.com/user-attachments/assets/30e547b4-6bda-40ae-bd50-c71a334cb6e4">

This project was my first experience with [Angular](https://angular.dev/).

For the assignment, I had to set up website for a farm selling snacks like nuts and dried fruit. It gave me a chance to practice generating components, routing, building a form with validations, and reading data from a JSON file.

The text and design were created by me without the use of any styling libraries, and the logo was created with [icons8](https://icons8.com/icons).

I also learned how to deploy apps to the web using [Surge](https://surge.sh/) and [Netlify](https://www.netlify.com/).

There was a bit of a learning curve, but I didn't find Angular too difficult to pick up after my experience with React. I also enjoyed the predictability of the MVC architecture which I was familiar with from Ruby on Rails. I can see why Angular has been so popular with developers, and I would gladly work with it again.

<a href="https://orchard-gems.netlify.app/">View demo</a>

## Topic 05: React

<img width="500" alt="Screenshot of React project" src="https://github.com/user-attachments/assets/bf3dcfe7-435f-4ae6-a36f-bb0069198fb3">

This was my time to shine with my favorite frontend library, [React](https://react.dev/).

The task was to create a course planning tool which allows students to add and remove courses from the CNIT department at CCSF.

As I was already pretty familiar with React from 4+ years of professional experience, I was able to go beyond the requirements by adding a few bonus features:
- Courses are removed from the dropdown when added to the course list, and added back to the dropdown when the course is deleted from the list.
- The add course button is disabled and info text is shown if a student selects a course whose prerequisite(s) have not yet been added to the list.
- The delete course button is disabled with an informational tooltip on hover if that course is a prerequisite for one or more other courses on the list.

This was my first opportunity using [Vite](https://vite.dev/) to bootstrap a React app, and since learning that it's 20% the package size of my usual go-to [Create React App](https://create-react-app.dev/) with all the speed and features I'm used to, I see no reason to go back.

I used [Bootstrap](https://getbootstrap.com/) for styling, which I hadn't used in a few years and wanted to keep my skills fresh. Considering the size it may have been overkill for this small of a project, but I appreciated how quickly and simply it allowed me to create a unified look and feel.

<a href="https://cnit-course-plan.surge.sh/">View demo</a>

## Topic 06: Vue

Coming soon!
