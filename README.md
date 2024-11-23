# StackOverflow Clone

A fully responsive and pixel-perfect StackOverflow clone built using **React** with **Vite**, integrating the StackOverflow Open APIs for dynamic functionality. This project was developed as part of an assignment from **Aacorn Globus**, focusing on creating a static page for design elements while ensuring a dynamic questions section powered by the StackOverflow API.

---

## 🚀 Overview

### Features:
- **Static Design Elements:** 
  - The layout mimics the given StackOverflow design with utmost precision. [Stack Overflow Design](https://formester.s3.ap-south-1.amazonaws.com/public/users/2/forms/13382/builder/stack-overflow-design-v2.png)

  - Non-interactive sections, such as the blog and footer, are hardcoded for simplicity.
- **Dynamic Questions Section:** 
  - Fetch and display questions dynamically using the [StackExchange API](https://api.stackexchange.com/docs).
  - Supports filters like **Hot**, **Week**, etc., implemented via the API.
- **Bonus Feature:** 
  - Search functionality integrated with the API to retrieve relevant questions.
- **Pixel-Perfect UI:** 
  - Ensures the design is visually consistent with the provided guidelines.
  - Implements **responsive design** for an optimal user experience across devices.

### Live Demo:
Check out the live deployment here: [StackOverflow Clone](https://clone-stackoverflow-acornglobus.netlify.app)

---

## 🛠 Installation Guide

### Prerequisites:
Before proceeding, ensure you have **Node.js** and **npm** (or **yarn**) installed.

### Step 1: Clone the Repository
```bash
git clone https://github.com/Sareen76/stackOverflow-clone.git
cd stackOverflow-clone
```

### Step 2: Install Dependencies
```bash
# Navigate to the client directory
cd client

# Install the dependencies
npm install
```

### Step 3: Start the Development Server
```bash
npm run dev
```

The application will be available at `https://clone-stackoverflow-acornglobus.netlify.app` by default.

---

## 📂 Project Structure

```
stackOverflow-clone-main/
    .gitignore
    README.md
    client/
        .env
        .gitignore
        eslint.config.js
        index.html
        package-lock.json
        package.json
        vite.config.js
        public/
            vite.svg
        src/
            App.css
            App.jsx
            index.css
            main.jsx
            API/
                api-client.js
                utils.js
            assets/
                logo-stackoverflow.png
                logo-stackoverflow.svg
                react.svg
            components/
                Blog.jsx
                Feed.jsx
                Loader.jsx
                Navbar.jsx
                NavbarCollapse.jsx
                QuestionCard.jsx
                QuestionTab.jsx
                component.module.css
            context/
                context.jsx
            pages/
                Auth.jsx
                Home.jsx
                Layout.jsx
                Questions.jsx
                _breakpoints.css
                _global.css
                _pages.module.css
            utils/
                constant.js
```

---
## ⚙️ Technologies Used

```

- **React**: JavaScript library for building user interfaces, used for the dynamic components and state management in this project.
- **Vite**: Next-generation build tool that provides fast and efficient development, used as the bundler for this project.
- **Tailwind CSS**: Utility-first CSS framework for designing responsive, customizable user interfaces with minimal effort.
- **Axios**: Promise-based HTTP client for making API requests to the StackExchange API.
- **Lucide React**: A collection of SVG icons for React applications, used for adding icons to the interface.
- **React Router DOM**: A routing library for React, used to manage navigation between different views in the app.


```
---
## ✨ Contact


If you have any questions or feedback, feel free to reach out:
- **Author:** Sareen Garnaik
- **Email:** sareengarnaik15@gmail.com
- **GitHub:** [Sareen76](https://github.com/Sareen76)
- **LinkedIn:** [LinkedIn Profile](https://www.linkedin.com/in/sareen-garnaik-a93a98234)
