import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

const Search = ({ word, setWord, handleSubmit }) => {
  return (
    <Container className="mt-3">
      <Row>
        <Col xs={12} md={12} lg={12}>
          <Form onSubmit={handleSubmit}>
            <Form.Row>
              <Col xs={9} md={9} lg={12}>
                <Form.Control
                  type="text"
                  value={word}
                  onChange={(e) => setWord(e.target.value)}
                  placeholder="Search for new image..."
                />
                <Col></Col>
                <Button variant="primary" type="submit"></Button>
              </Col>
            </Form.Row>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Search;
