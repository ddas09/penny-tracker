import React from 'react';
import { Card } from 'react-bootstrap';
import { ExpenseInsight } from '../models/ExpenseInsight';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

interface ChartsProps {
  data: ExpenseInsight;
}

const Charts: React.FC<ChartsProps> = ({ data }) => {
  const categoryData = Object.entries(data.categoryWiseExpenses).map(([category, amount]) => ({
    name: category,
    expense: amount,
  }));

  const monthlyData = Object.entries(data.monthlyTrend).map(([month, amount]) => ({
    month: month,
    expense: amount,
  }));

  return (
    <div>
      <Card className="mb-4">
        <Card.Header>Category-wise Expenses</Card.Header>
        <Card.Body>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={categoryData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="expense" fill="#8884d8" />
            </BarChart>
          </ResponsiveContainer>
        </Card.Body>
      </Card>

      <Card className="mb-4">
        <Card.Header>Monthly Trend</Card.Header>
        <Card.Body>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={monthlyData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="expense" fill="#82ca9d" />
            </BarChart>
          </ResponsiveContainer>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Charts;
