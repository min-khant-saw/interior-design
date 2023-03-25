# Interior Design Website

Interior Design is a web application developed by Min Khant Saw that provides users with access to interior design ideas and inspiration. The application features a sign-up and login system, a home page, and a room page. It also comes with an admin panel, built using React JS and Laravel, that allows administrators to create designs, manage users, roles, permissions, and check the number of designs.

## Installation

To install and run the project, follow these steps:

1.  Clone the repository: `git clone https://github.com/min-khant-saw/interior-design.git`
2.  Navigate to the project directory: `cd interior-design`
3.  Run the database migrations: `php artisan migrate`
4.  Run the queue worker: `php artisan queue:work`
5.  Install the composer dependencies and start the Laravel server: `composer i && php artisan serve`
6.  Navigate to the frontend directory: `cd interior-design/frontend`
7.  Install the npm dependencies and start the development server: `npm i && npm run dev`

## Features

### Sign-up and Login

Users can create an account and log in to the application to access the home page and room page. The sign-up and login functionality is implemented using Laravel's authentication system.

### Home Page

The home page is the landing page for the application and features a slideshow of interior design ideas and inspiration. Users can browse through the slideshow and click on individual images to view more details about the design.

### Room Page

The room page is where users can view and explore different room designs. Users can filter the designs by room type, style, and color scheme. The room page also features a gallery of images that users can click on to view more details about the design.

### Admin Panel

The admin panel is a separate section of the application that is only accessible to administrators. It allows administrators to create designs and manage users, roles, and permissions. The admin panel is built using React JS and Laravel, and it features a user-friendly interface that makes it easy to manage the application's content.

## Conclusion

Interior Design is a powerful web application that provides users with access to interior design ideas and inspiration. It features a user-friendly interface, a sign-up and login system, a home page, and a room page. The application also comes with an admin panel that allows administrators to create designs and manage users, roles, and permissions. If you are looking for an interior design website that is easy to use and manage, then Interior Design is the perfect choice for you.
