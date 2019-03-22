import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import Card from "../components/Card";
import Form from "../components/Form";
import Content from "../components/Content";
import Footer from "../components/Footer";
import API from "../utils/API";
import { Col, Row, Container } from "../components/Grid";
import { List } from "../components/List";

class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            ignContent: [],
            commentCount: [],
            message: "Click to Load Contents!"
        };
    }

    getContent = () => {
        API.getContent(this.state)
        .then(res => {
            console.log(res.data[0].data)
            this.setState({ ignContent: res.data[0].data })
            console.log(this.state)
        })
        .catch(() => 
        this.setState({ ignContent: [], message: "No content here!"})
        );
    };
    getCommentCount = () => {
        API.getContent(this.state)
        .then(res => {
            console.log(res.data[0].content[0])
            this.setState({ commentCount: res.data[0].content })
            console.log(this.state)
        })
        .catch(() => 
        this.setState({ commentCount: [], message: "No content here!"})
        );
    };

    handleFormSubmit = event => {
        event.preventDefault();
        this.getContent();
        this.getCommentCount();
    }

    render() {
        return (
            <Container>
                <Row>
                    <Col size="md-12">
                        <Jumbotron>
                            <h2 className="text-center">Your #1 destination for all video game news, expert reviews and walkthroughs.</h2>
                        </Jumbotron>
                    </Col>
                    <Col size="md-12">
                        <Card title="Content Search" icon="far fa-book">
                            <Form 
                                handleFormSubmit={this.handleFormSubmit}
                            />
                        </Card>
                    </Col>
                </Row>
                <Row>
                    <Col size="md-12">
                        <Card title="Results">
                            {this.state.ignContent.length ? (
                                <List>
                                    { this.state.ignContent.map(content => (
                                        <Content 
                                            key={content.contentId}
                                            description={content.metadata.description}
                                            image={content.thumbnails[2].url}
                                        />
                                    ))}
                                </List>
                            ) : (
                                <h2 className="text-center">{this.state.message}</h2>
                            )}
                        </Card>
                    </Col>
                </Row>
                <Footer />
            </Container>
        )
    }
}

export default Home;