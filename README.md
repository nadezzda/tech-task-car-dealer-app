# Car Dealer App - Front-end JS Engineer Test Assessment

This project is a solution to the front-end test assessment for creating a Car Dealer App using Next.js. The app allows users to filter vehicles by type and model year, and view the results on a separate page.

## Features
- Filter vehicles by make and model year.
- Display a list of vehicle models based on selected filters.
- Use of Next.js for static generation and server-side rendering.
- Styling with Tailwind CSS for responsive design.
- Full TypeScript support for type safety.

## Getting Started

### 1. Clone the Repository

Clone this repository to your local machine using the following command:

```bash
git clone https://github.com/nadezzda/tech-task-car-dealer-app
cd car-dealer-app
npm install
```


### 2. Run the Development Server

To start the development server, run the following command:

```bash
npm run dev
```

The application will be available at http://localhost:3000.

### 3. Build for Production

To create a production build, run:

```bash
npm run build
```

This will generate the optimized build for production in the .next directory.

### 4. Start the Production Server

To start the production server after building, run:

```bash
npm start
```

The app will be available at http://localhost:3000.

### 5. Create Environment Variables
Create a .env.local file in the root directory. This file is added to the repository and contain API URL. 


### 6. Application Architecture

The application follows a modular structure to ensure scalability and maintainability. Below is an overview of the folder structure:

#### `src/` Directory Structure:

- **`components/`**  
    This folder contains reusable UI components that are used throughout the application. Components are designed to be modular and small in size for easy testing and reusability.
    

- **`app/`**  
    The `app` folder contains the main application logic and page components. It is responsible for routing and rendering the core pages of the application.

- **`types/`**  
    This folder holds TypeScript types and interfaces used throughout the application to ensure type safety and improve code maintainability.

- **`lib/`**  
    The `lib` folder is used for utility functions, API calls, and other reusable logic. This keeps business logic separate from UI components.

### Data Flow
1. **Filter Page:**
    - On the filter page, the app fetches available vehicle makes from the VPIC API and populates a dropdown.
    - Another dropdown allows users to select a model year from 2015 to the current year.
    - When both a make and a year are selected, the "Next" button is enabled, allowing navigation to the result page.

2. **Result Page:**
    - On the result page, the selected vehicle make and model year are passed as URL parameters.
    - The `generateStaticParams` function is used to pre-render paths for all possible make/year combinations.
    - The app fetches vehicle models using the selected make ID and model year from the VPIC API.
    - The models are displayed, and error handling is in place to inform the user if something goes wrong.

3. **React Suspense:**
    - The app uses React's `Suspense` component to manage loading states while fetching data, providing a smooth user experience.

