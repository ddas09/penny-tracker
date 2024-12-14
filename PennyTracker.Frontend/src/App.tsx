import React, { useState } from 'react';
import axios from 'axios';
import FileUpload from './components/FileUpload';
import ExpenseInsights from './components/ExpenseInsights';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ExpenseInsight } from './models/ExpenseInsight';

const App: React.FC = () => {
  const [insights, setInsights] = useState<ExpenseInsight | null>(null);

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
    } catch (error) {
      console.error('Error uploading file:', error);
    }
  };

  return (
    <div className="container mt-5">
      <FileUpload onUpload={handleFileUpload} />
      <ExpenseInsights insights={insights} />
    </div>
  );
};

export default App;
