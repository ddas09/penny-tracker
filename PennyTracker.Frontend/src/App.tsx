import React, { useState } from 'react';
import axios from 'axios';
import './index.css';
import FileUpload from './components/FileUpload';
import ExpenseInsights from './components/ExpenseInsights';
import { ExpenseInsight } from './models/ExpenseInsight';
import TransactionList from './components/TransactionList';
import TransactionSummary from './components/TransactionSummary'; // Import the common component

const App: React.FC = () => {
  const [insights, setInsights] = useState<ExpenseInsight | null>(null);
  const [activeTab, setActiveTab] = useState<'insights' | 'transactions'>('insights');
  const [isFileUploaded, setIsFileUploaded] = useState(false);

  const handleFileUpload = async (file: File) => {
    const formData = new FormData();
    formData.append('file', file);

    try {
      const response = await axios.post<ExpenseInsight>(
        'http://localhost:5000/api/transaction/upload',
        formData,
        {
          headers: { 'Content-Type': 'multipart/form-data' },
        }
      );

      setInsights(response.data);
      setIsFileUploaded(true);
    } catch (error) {
      console.error('Error uploading file:', error);
    }
  };

  return (
    <div className="app">
      <main className="container mt-5">
        <h1 className="text-center">Expense Tracker</h1>

        {/* Show Message Before Upload */}
        {!isFileUploaded && (
          <div className="alert alert-info text-center mt-4">
            Please upload your bank statement (CSV) to get insights and view transactions.
          </div>
        )}

        {/* File Upload Component */}
        <FileUpload onUpload={handleFileUpload} />

        {/* Render Tabs and Content After File is Uploaded */}
        {isFileUploaded && insights && (
          <>
            {/* Tab Navigation */}
            <div className="tabs mt-4">
              <button
                className={`tab ${activeTab === 'insights' ? 'active' : ''}`}
                onClick={() => setActiveTab('insights')}
              >
                Insights
              </button>
              <button
                className={`tab ${activeTab === 'transactions' ? 'active' : ''}`}
                onClick={() => setActiveTab('transactions')}
              >
                Transactions
              </button>
            </div>

            {/* Common Total Expenses and Income Summary */}
            <TransactionSummary 
              totalExpenses={insights.totalExpenses} 
              totalIncomes={insights.totalIncomes} 
            />

            {/* Render Active Tab Content */}
            <div className="tab-content">
              {activeTab === 'insights' && insights && (
                <ExpenseInsights insights={insights} />
              )}
              {activeTab === 'transactions' && insights && (
                <TransactionList transactions={insights.transactions} />
              )}
            </div>
          </>
        )}
      </main>
    </div>
  );
};

export default App;
