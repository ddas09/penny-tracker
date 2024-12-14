import React from 'react';
import Charts from './Charts';
import { Card, ListGroup } from 'react-bootstrap';
import { ExpenseInsight } from '../models/ExpenseInsight';

interface ExpenseInsightsProps {
  insights: ExpenseInsight | null;
}

const ExpenseInsights: React.FC<ExpenseInsightsProps> = ({ insights }) => {
  if (!insights) return <div>Loading...</div>;

  return (
    <div>
      <Card className="mb-4">
        <Card.Header>Total Expenses</Card.Header>
        <Card.Body>
          <h3>${insights.totalExpenses.toFixed(2)}</h3>
        </Card.Body>
      </Card>

      <Card className="mb-4">
        <Card.Header>Category-wise Expenses</Card.Header>
        <Card.Body>
          <ListGroup>
            {Object.entries(insights.categoryWiseExpenses).map(([category, amount]) => (
              <ListGroup.Item key={category}>
                {category}: ${amount.toFixed(2)}
              </ListGroup.Item>
            ))}
          </ListGroup>
        </Card.Body>
      </Card>

      <Charts data={insights} />
    </div>
  );
};

export default ExpenseInsights;
