import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';

interface TransactionSummaryProps {
  totalExpenses: number;
  totalIncomes: number;
}

const TransactionSummary: React.FC<TransactionSummaryProps> = ({ totalExpenses, totalIncomes }) => {
  return (
    <Row>
      {/* Metadata Section */}
      <Col md={12} className="mb-4 text-center">
        <h2>Expense and Income Insights</h2>
        <p>Analyze your monthly expenses, incomes, and trends over time.</p>
      </Col>

      {/* Total Expenses and Income Section */}
      <Col md={6} className="mb-4">
        <Card className="shadow-sm">
          <Card.Header className="text-center">Total Expenses</Card.Header>
          <Card.Body>
            <h3>₹{totalExpenses.toFixed(2)}</h3>
          </Card.Body>
        </Card>
      </Col>

      <Col md={6} className="mb-4">
        <Card className="shadow-sm">
          <Card.Header className="text-center">Total Income</Card.Header>
          <Card.Body>
            <h3>₹{totalIncomes.toFixed(2)}</h3>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
};

export default TransactionSummary;
