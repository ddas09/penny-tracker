import React from 'react';
import Charts from './Charts';
import { ExpenseInsight } from '../models/ExpenseInsight';
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { TransactionCategory } from '../enums/TransactionCategory';
import { Card, ListGroup, Row, Col, Container } from 'react-bootstrap';

interface ExpenseInsightsProps {
  insights: ExpenseInsight | null;
}

const ExpenseInsights: React.FC<ExpenseInsightsProps> = ({ insights }) => {
  if (!insights) return <div className="text-center">Please upload a file to view insights.</div>;

  const categoryWiseExpensesData = Object.entries(insights.categoryWiseExpenses).map(([category, amount]) => ({
    title: category,
    value: amount,
    color: getCategoryColor(category),
  }));

  const categoryWiseIncomesData = Object.entries(insights.categoryWiseIncomes).map(([category, amount]) => ({
    title: category,
    value: amount,
    color: getCategoryColor(category),
  }));

  return (
    <Container fluid className="my-4" style={{ border: '1px solid #e3e3e3', borderRadius: '10px', padding: '20px' }}>
      <Row>
        {/* Category-wise Expenses Section */}
        <Col md={6} className="mb-4">
          <Card className="shadow-sm">
            <Card.Header className="text-center">Category-wise Expenses</Card.Header>
            <Card.Body>
              <ListGroup variant="flush">
                {Object.entries(insights.categoryWiseExpenses).map(([category, amount]) => (
                  <ListGroup.Item key={category} className="d-flex justify-content-between">
                    <span>{category}</span>
                    <span>₹{amount.toFixed(2)}</span>
                  </ListGroup.Item>
                ))}
              </ListGroup>
            </Card.Body>
          </Card>
        </Col>

        {/* Category-wise Income Section */}
        <Col md={6} className="mb-4">
          <Card className="shadow-sm">
            <Card.Header className="text-center">Category-wise Income</Card.Header>
            <Card.Body>
              <ListGroup variant="flush">
                {Object.entries(insights.categoryWiseIncomes).map(([category, amount]) => (
                  <ListGroup.Item key={category} className="d-flex justify-content-between">
                    <span>{category}</span>
                    <span>₹{amount.toFixed(2)}</span>
                  </ListGroup.Item>
                ))}
              </ListGroup>
            </Card.Body>
          </Card>
        </Col>

        {/* Pie Charts for Expenses and Incomes */}
        <Col md={12} className="mb-4">
          <Card className="shadow-sm">
            <Card.Header className="text-center">Expenses by Category</Card.Header>
            <Card.Body className="d-flex justify-content-center">
              <ResponsiveContainer width="100%" height={400}>
                <PieChart>
                  <Pie
                    data={categoryWiseExpensesData}
                    dataKey="value"
                    nameKey="title"
                    cx="50%"
                    cy="50%"
                    outerRadius="80%"
                    label={({ index }) => `${categoryWiseExpensesData[index].title}: ₹${categoryWiseExpensesData[index].value.toFixed(2)}`}
                  >
                    {categoryWiseExpensesData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                  <Legend />
                </PieChart>
              </ResponsiveContainer>
            </Card.Body>
          </Card>
        </Col>

        <Col md={12} className="mb-4">
          <Card className="shadow-sm">
            <Card.Header className="text-center">Income by Category</Card.Header>
            <Card.Body className="d-flex justify-content-center">
              <ResponsiveContainer width="100%" height={400}>
                <PieChart>
                  <Pie
                    data={categoryWiseIncomesData}
                    dataKey="value"
                    nameKey="title"
                    cx="50%"
                    cy="50%"
                    outerRadius="80%"
                    label={({ index }) => `${categoryWiseIncomesData[index].title}: ₹${categoryWiseIncomesData[index].value.toFixed(2)}`}
                  >
                    {categoryWiseIncomesData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                  <Legend />
                </PieChart>
              </ResponsiveContainer>
            </Card.Body>
          </Card>
        </Col>
        
        {/* Charts */}
        <Col md={12}>
          <Charts data={insights} />
        </Col>
      </Row> 
    </Container>
  );
};

// Utility function to get visually appealing dark colors for categories
const getCategoryColor = (category: string): string => {
  const colors: { [key in TransactionCategory]: string } = {
    [TransactionCategory.Food]: '#D35D00', // Rich burnt orange
    [TransactionCategory.Rent]: '#1F4D7A', // Deep blue
    [TransactionCategory.Entertainment]: '#D32F2F', // Vivid red
    [TransactionCategory.Utilities]: '#00796B', // Deep teal
    [TransactionCategory.Transportation]: '#0D47A1', // Strong blue
    [TransactionCategory.Healthcare]: '#C2185B', // Deep pink
    [TransactionCategory.Education]: '#1976D2', // Bright blue

    [TransactionCategory.Freelance]: '#8E24AA', // Purple
    [TransactionCategory.Bonus]: '#F57C00', // Bright orange
    [TransactionCategory.Salary]: '#079452', // Forest green
    [TransactionCategory.Investments]: '#0288D1', // Strong blue
    [TransactionCategory.Gift]: '#D32F2F', // Vivid red
    [TransactionCategory.Refund]: '#079407', // Green
    [TransactionCategory.Miscellaneous]: '#455A64', // Slate grey
  };

  return colors[category as TransactionCategory] || '#455A64'; // Fallback color for unknown categories
};

export default ExpenseInsights;
