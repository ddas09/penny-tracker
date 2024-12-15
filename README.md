# Penny Tracker
A simple expense tracking app to manage, analyze, and gain insights into your spending habits.

## Overview

**Penny Tracker** is a web application that allows users to upload a CSV file containing transaction data and provides insights into their spending habits. The app generates charts and visualizations for monthly expenses, category-wise expenses, and other useful metrics.

## Screenshots

Here are some screenshots of the app in action:

- **Dashboard:**  
  ![Dashboard Screenshot](/screenshots/Dashboard.png)

- **Transactions:**  
  ![Transactions Screenshot](/screenshots/TransactionList.png)

- **Category Wise Data:**  
  ![Category Wise Data Screenshot](/screenshots/CategoryWiseData.png)

- **Transaction Trend:**  
  ![Transaction Trend Screenshot](/screenshots/TransactionTrend.png)

- **Compare Transaction Trends:**  
  ![Compare Transaction Trends Screenshot](/screenshots/CompareTrend.png)

## Tech Stack

- **Backend**: [.NET 9](https://dotnet.microsoft.com/en-us/download/dotnet/9.0)
- **Frontend**: [Node.js](https://nodejs.org/en)
- **CSV Parsing**: [CsvHelper](https://joshclose.github.io/CsvHelper/) (for parsing CSV files)
- **Charting**: [recharts](https://recharts.org/en-US/) (for visualizing data)

## Folder Structure

```bash
ExpenseInsightsDashboard/
├── PennyTracker.Backend/      # Backend code (API)
│   ├── Controllers/           # API controllers
│   ├── Enums/                 # Common Enums
│   ├── SampleData/            # Some sample CSV file containing transactions
│   ├── Models/                # Model classes (e.g., Transaction, ExpenseInsight)
│   ├── Services/              # Business logic (e.g., CSV processing, insight calculation)
│   └── appsettings.json       # Configuration settings
│
├── PennyTracker.Frontend/     # Frontend code (React)
│   ├── public/                # Static assets (images, fonts, etc.)
│   ├── src/                   # React components and views
│   │   ├── components/        # Reusable components (e.g., Chart, Table)
│   │   └── pages/             # Pages (e.g., Dashboard, File Upload)
│   └── package.json           # Frontend dependencies
│
├── README.md                  # Project documentation
```

# Getting Started

## Prerequisites
Ensure you have the following installed on your system:

- [.NET 9 SDK](https://dotnet.microsoft.com/en-us/download/dotnet/9.0)
- [Node.js](https://nodejs.org/en)

## Backend Setup

1. Clone the repository:

```bash
git clone <repository_url>
cd ExpenseInsightsDashboard/PennyTracker.Backend
```

2. Restore the backend dependencies:
    
```bash
dotnet restore
```

3. Run the backend application:

```bash
dotnet run
```

The backend API will run on http://localhost:5000.

## Frontend Setup

1. Navigate to the frontend folder:

```bash
cd ../PennyTracker.Frontend
```

2. Install frontend dependencies:

```bash
npm install
```

3. Run the frontend application:

```bash
npm run dev
```

The frontend will run on http://localhost:3000.

## Running the Application

1. **Run the Backend API:** After following the backend setup instructions, the API should be running at `http://localhost:5000`.
2. **Run the Frontend:** After setting up the frontend, you can access the app at `http://localhost:3000`.
3. **Upload CSV:** The main page of the frontend will allow you to upload a CSV file and view the generated insights in graphical format.

## How to Use

- **Upload a CSV file:** The app will process the file and display insights.
- **View Insights:**
  - **Monthly Expenses:** A chart will show your monthly spending.
  - **Category-wise Expenses:** A chart will display how much you spend per category.
  - **Total Incomes/Expenses:** The total income and expenses will be displayed on the dashboard.

## Contributing

1. Fork the repository.
2. Create a new branch:
   ```bash
   git checkout -b feature/your-feature
   ```
3. Make your changes.
4. Commit your changes 
   ```bash
   git commit -a 'Add new feature'
   ```
5. Push to the branch 
   ```bash
   git push origin feature/your-feature
   ```
6. Create a new Pull Request.

## License
This project is open-source and licensed under the [MIT License](https://opensource.org/license/mit).
