# HNG Stage 0 Backend Task

This is a simple Node.js and Express.js API that returns basic information in JSON format. It was developed as part of the HNG Stage 0 Backend Task.

---

## Project Description

The API provides a single endpoint that returns the following information:

- Your registered email address.
- The current datetime in ISO 8601 format.
- The GitHub URL of the project's codebase.

This project demonstrates the use of Node.js and Express.js to create a lightweight, production-ready API.

---

## Setup Instructions

### Prerequisites

- Node.js (v18 or higher)
- npm (Node Package Manager)

### Steps to Run the Project Locally

1. **Clone the Repository**:

   ```bash
   git clone https://github.com/TLTechbender/hngbackendTaskOne.git
   cd hngbackendTaskOne
   ```

2. **Install Dependencies**:

   ```bash
   npm install
   ```

3. **Run the Application**:

   - For development and production(It's the most basic of APIs):

     ```bash
     npm start
     ```

4. **Test the API**:
   - Open your browser or use a tool like Postman.
   - Visit `http://localhost:3000`.
   - You should see the following JSON response:
     ```json
     {
       "email": "myjoyhasarrived2004@gmail.com",
       "current_datetime": "2024-01-30T12:34:56.789Z",
       "github_url": "https://github.com/TLTechbender/hngbackendTaskOne"
     }
     ```

---

## API Documentation

### Endpoint

- **GET** `/`

### Request

No request body or parameters are required.

### Response

The API returns a JSON object with the following fields:

| Field              | Type   | Description                                    |
| ------------------ | ------ | ---------------------------------------------- |
| `email`            | string | Your registered email address.                 |
| `current_datetime` | string | The current datetime in ISO 8601 format (UTC). |
| `github_url`       | string | The GitHub URL of the project's codebase.      |

### Example Usage

1. **Using `curl`**:

   ```bash
   curl http://localhost:3000
   ```

2. **Response**:
   ```json
   {
     "email": "myjoyhasarrived2004@gmail.com",
     "current_datetime": "2024-01-30T12:34:56.789Z",
     "github_url": "https://github.com/TLTechbender/hngbackendTaskOne"
   }
   ```

---

## Deployment

This API is deployed on [Render](https://render.com/). You can access it at:  
[Deployed API URL](https://hngbackendtaskone.onrender.com/)

---

## Backlink

For more information on hiring Node.js developers, visit:  
[Hire Node.js Developers](https://hng.tech/hire/nodejs-developers)

---

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

````

---

### **How to Use This Documentation**

1. Replace placeholders (e.g., `myjoyhasarrived2004@gmail.com`, `TLTechbender`) with your actual details.
2. Update the **Deployment** section with the URL of your deployed API.
3. Save the file as `README.md` in the root of your project directory.
4. Push the changes to GitHub:
   ```bash
   git add README.md
   git commit -m "Add project documentation"
   git push origin main
````

---

This Markdown documentation meets all the requirements and provides a professional, user-friendly guide for anyone using or contributing to your project. Let me know if you need further assistance! 🚀
