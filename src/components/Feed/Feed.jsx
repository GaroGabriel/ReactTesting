import React, { Component } from 'react';
import './Feed.css'
import { Container, Row, InputGroup, FormControl, Button, Card, Col } from 'react-bootstrap';
class NewFeed extends Component {

    state = {
        tasks: [],
        inputValue: ''
    }


    getValue = (event) => {
        this.setState({
            inputValue: event.target.value
        })
    }

    addTask = () => {
        const input = this.state.inputValue;
        const newTasks = [...this.state.tasks];


        newTasks.push(input)

        this.setState({
            tasks: newTasks,
            inputValue: ''
        })
    }


    render() {
        const { inputValue, tasks } = this.state

        return (
            <Container>
                <Row>
                    <InputGroup className="mb-3">
                        <FormControl
                            placeholder="Recipient's username"
                            aria-label="Recipient's username"
                            aria-describedby="basic-addon2"
                            onChange={this.getValue}
                            value={inputValue}
                        />
                        <InputGroup.Append>
                            <Button variant="outline-secondary" onClick={this.addTask}>Button</Button>
                        </InputGroup.Append>
                    </InputGroup>
                </Row>
                <Row>
                    {tasks.map((item, index) => {
                        return (
                            <Col md={4} sm={6} xs={12}>
                                <Card>
                                    <Card.Body>
                                        <Card.Title>{index + 1}{item}</Card.Title>
                                        <Card.Text>
                                            {item}
                                        </Card.Text>
                                        <Button variant="primary">Go somewhere</Button>
                                    </Card.Body>
                                </Card>
                            </Col>
                        )
                    })}
                    {/* 
                    <Col md={4} sm={6} xs={12}>
                        <Card>
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
    </Card.Text>
                                <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                        </Card>
                    </Col> */}
                </Row>
            </Container>
        )
    }
}
export default NewFeed