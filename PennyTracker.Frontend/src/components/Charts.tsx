import React from 'react';
import { Card } from 'react-bootstrap';
import { ExpenseInsight } from '../models/ExpenseInsight';
import { BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

interface ChartsProps {
  data: ExpenseInsight;
}

const Charts: React.FC<ChartsProps> = ({ data }) => {
  // Prepare data for category-wise expenses chart
  const categoryExpenseData = Object.entries(data.categoryWiseExpenses).map(([category, amount]) => ({
    name: category,
    expense: amount,
  }));

  // Prepare data for category-wise incomes chart
  const categoryIncomeData = Object.entries(data.categoryWiseIncomes).map(([category, amount]) => ({
    name: category,
    income: amount,
  }));

  // Prepare data for monthly income vs expenses chart
  const monthlyData = Object.keys(data.monthlyExpenses).map((month) => ({
    month,
    expense: data.monthlyExpenses[month],
    income: data.monthlyIncomes[month],
  }));

  // Prepare data for monthly income trend chart
  const monthlyIncomeTrendData = Object.keys(data.monthlyIncomes).map((month) => ({
    month,
    income: data.monthlyIncomes[month],
  }));

  // Prepare data for monthly expense trend chart
  const monthlyExpenseTrendData = Object.keys(data.monthlyExpenses).map((month) => ({
    month,
    expense: data.monthlyExpenses[month],
  }));

  return (
    <div>
      {/* Category-wise Expenses Chart */}
      <Card className="mb-4">
        <Card.Header>Category-wise Expenses</Card.Header>
        <Card.Body>
          <ResponsiveContainer width="100%" height={400}>
            <BarChart data={categoryExpenseData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip formatter={(value) => `₹${value}`} />
              <Legend />
              <Bar dataKey="expense" fill="#8884d8" name="Expenses" />
            </BarChart>
          </ResponsiveContainer>
        </Card.Body>
      </Card>

      {/* Category-wise Income Chart */}
      <Card className="mb-4">
        <Card.Header>Category-wise Income</Card.Header>
        <Card.Body>
          <ResponsiveContainer width="100%" height={400}>
            <BarChart data={categoryIncomeData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip formatter={(value) => `₹${value}`} />
              <Legend />
              <Bar dataKey="income" fill="#079452" name="Income" />
            </BarChart>
          </ResponsiveContainer>
        </Card.Body>
      </Card>

      {/* Monthly Income Trend Chart */}
      <Card className="mb-4">
        <Card.Header>Monthly Income Trend</Card.Header>
        <Card.Body>
          <ResponsiveContainer width="100%" height={400}>
            <LineChart data={monthlyIncomeTrendData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip formatter={(value) => `₹${value}`} />
              <Legend />
              <Line type="monotone" dataKey="income" stroke="#079452" name="Income" />
            </LineChart>
          </ResponsiveContainer>
        </Card.Body>
      </Card>

      {/* Monthly Expense Trend Chart */}
      <Card className="mb-4">
        <Card.Header>Monthly Expense Trend</Card.Header>
        <Card.Body>
          <ResponsiveContainer width="100%" height={400}>
            <LineChart data={monthlyExpenseTrendData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip formatter={(value) => `₹${value}`} />
              <Legend />
              <Line type="monotone" dataKey="expense" stroke="#f54242" name="Expense" />
            </LineChart>
          </ResponsiveContainer>
        </Card.Body>
      </Card>

      {/* Monthly Income vs Expenses Chart */}
      <Card className="mb-4">
        <Card.Header>Monthly Income vs Expenses</Card.Header>
        <Card.Body>
          <ResponsiveContainer width="100%" height={400}>
            <BarChart data={monthlyData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip formatter={(value) => `₹${value}`} />
              <Legend />
              <Bar dataKey="expense" fill="#f54242" name="Expenses" />
              <Bar dataKey="income" fill="#079452" name="Income" />
            </BarChart>
          </ResponsiveContainer>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Charts;
