# Jobs Data Insight Platform

JobsDataInsightPlatform is a MERN (MongoDB, Express, React, Node.js) Stack application designed to provide insightful data about job trends and analytics. This repository contains both the frontend and backend code necessary to run the application.


## Dataset Used: Machine Learning Engineer Salary Insights 2024

This application leverages the [Machine Learning Engineer Salary Insights 2024](https://www.kaggle.com/datasets/chopper53/machine-learning-engineer-salary-in-2024) dataset to analyze and visualize salary trends for Machine Learning Engineers. The dataset includes key attributes such as experience level, employment type, job title, salary (in local currency and USD), employee residence, remote work ratio, company location, and company size.


## File Structure

```
JobsDataInsightPlatform/
├── backend/
│   ├── .gitignore
│   ├── databaseConnection.js
│   ├── index.js
│   ├── package-lock.json
│   ├── package.json
├── frontend/
│   ├── .eslintc.cjs
│   ├── .gitignore
│   ├── README.md
│   ├── index.html
│   ├── package-lock.json
│   ├── package.json
│   ├── vite.config.js
│   ├── public/
│   │   └── [static files]
│   ├── src/
│       └── [source code files]
└── README.md
```

## Prerequisites

Ensure you have the following installed:

- Node.js
- npm (Node package manager)
- MongoDB

## Installation

### Backend

1. Navigate to the `backend` directory:
```    
   sh
   cd backend
```   

2. Install the required packages:
```
   sh
   npm install
```   

3. Create a `.env` file and add your MongoDB connection string:
```
   MONGODB_URI=your_mongodb_connection_string
```   

4. Start the backend server:
```
   sh
   npm start
```   

### Frontend

1. Navigate to the `frontend` directory:
```
   sh
   cd frontend
```   

2. Install the required packages:
```
   sh
   npm install
```   

3. Start the frontend development server:
```
   sh
   npm run dev
```   

## Usage

Once the servers are running, you can access the application in your browser at `http://localhost:3000` for the frontend and `http://localhost:5000` for the backend API.


## Deployment

The application is deployed and can be accessed at [Jobs Data Insight Platform](https://jobs-data-insight-platform.vercel.app/).

## Contributing

1. Fork the repository.
2. Create your feature branch:
```
   sh
   git checkout -b feature/YourFeature
```   
3. Commit your changes:
```
   sh
   git commit -m 'Add some feature'
```   
4. Push to the branch:
```
   sh
   git push origin feature/YourFeature
```   
5. Open a pull request.


## Contact

For any questions or feedback, please contact [Nishant Singh Parihar](https://www.linkedin.com/in/nishant-singh-parihar-617b23169/).