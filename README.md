This Coding Test implemented via React and json-server

how to run this project?

1. Make sure you installed node and npm

2. Go to the root directory of this project, which has 'package.json' file.

3. Open a terminal in this root direcotry

4. Run ```npm install``` for installing this project with the pacakges it relies on

5. Run ```json-server -p 4000 db.json``` for start the mockup database

6. Run ```npm start``` for run this project, then you can go to http://localhost:3000/ in Chrome for view this project

7. Press Ctrl + C for termination.



---

In this example, we would like you to create a simple MVC application using the provided fictional Vet domain layer to provide a page to search for appointments and display a summary of search results.

Requirements:
Search for appointments by: Date and/or Pet Name. Allow for a search all if no criteria is selected. 

For search results, display the appointment date/time, pet name, owner’s name, and preferred contact details.

Search results should be ordered by date/time.

UI should be responsive for screen resolution, I.e. compatible with mobile devices.

Data should support paging with 25 items per page.

