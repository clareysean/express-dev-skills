# Developer Skills Website

This is a simple web application that showcases common developer skills and their descriptions. The website was built using Node.js, Express, Express Generator, and EJS to render dynamic pages/views.

## Installation

1. Clone the repository: `git clone https://github.com/your-username/developer-skills-website.git`
2. Navigate to the project directory: `cd developer-skills-website`
3. Install the dependencies: `npm install`

## Usage

1. Start the application in your terminal: `npm start`
2. Open your browser and visit: `http://localhost:3000`

## Project Structure

The project structure follows the convention created by Express Generator:

```
.
├── app.js
├── bin
│   └── www
├── public
│   ├── stylesheets
│   │   └── style.css
│   └── images
├── routes
│   └── index.js
└── views
    ├── error.ejs
    ├── index.ejs
    └── skill.ejs
```

- `app.js`: The main application file where the Express server is configured.
- `bin/www`: The entry point script to start the server.
- `public`: Contains static files such as stylesheets and images.
- `routes/index.js`: Defines the routes and handles the logic for each page.
- `views`: Contains EJS templates for rendering different pages/views.

## Customization

To customize the website with your own developer skills and descriptions, follow these steps:

1. Open `routes/index.js`.
2. Modify the `skills` array to include your desired skills and their descriptions.
3. Update the corresponding EJS template (`views/skill.ejs`) to display the skills dynamically.

## Contributing

If you would like to guild on this project, feel free to submit a pull request.

## Acknowledgements

- This project was built using Node.js, Express, Express Generator, and EJS.
- Thanks to the open-source community for providing valuable resources and inspiration.