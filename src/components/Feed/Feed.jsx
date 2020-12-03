import React, { Component } from 'react';
import './Feed.css'
import { Container, Row, InputGroup, FormControl, Button, Card, Col } from 'react-bootstrap';
class NewFeed extends Component {


    state = {
        inputText: '',
        posts: []
    }

    getInputValue = (event) => {
        this.setState({
            inputText: event.target.value
        })
    }

    addPost = () => {
        const input = this.state.inputText;
        const postsArry = [...this.state.posts];
        postsArry.push(input)
        this.setState({
            posts: postsArry,
            inputText: '',
        })

    }





    render() {


        return (
            <Container>
                <Row>
                    <InputGroup className="mb-3">
                        <FormControl
                            placeholder="Recipient's username"
                            aria-label="Recipient's username"
                            aria-describedby="basic-addon2"
                            onChange={this.getInputValue}
                            value={this.state.inputText}
                        />
                        <InputGroup.Append>
                            <Button variant="outline-secondary" onClick={this.addPost}> Button</Button>
                        </InputGroup.Append>
                    </InputGroup>
                </Row>
                <Row className="justify-content-center">

                    {this.state.posts.map((post, index) => {
                        return (
                            <Col md={4} sm={6} xs={12} className='text-center'>
                                <Card>
                                    <Card.Body>
                                        <Card.Title>{`${index + 1}.  ${post}`}</Card.Title>
                                        <Card.Text>
                                            {post}
                                        </Card.Text>
                                        <Button variant="primary">x</Button>
                                    </Card.Body>
                                </Card>
                            </Col>
                        )
                    })}
                </Row>
            </Container>
        )
    }
}
export default NewFeed