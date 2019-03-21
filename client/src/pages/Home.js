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
            message: "Click to Load Contents!"
        };
    }

    getContent = () => {
        API.getContent(this.state.q)
        .then(res => {
            this.setState({ ignContent: res.data })
        })
        .catch(() => 
        this.setState({ ignContent: [], message: "No content here!"})
        );
    };

    handleFormSubmit = event => {
        event.preventDefault();
        this.getContent();
    }

    handleContentSave = id => {
        console.log("hey hey saved!");
        console.log(this.state.ignContent)
        const content = this.state.ignContent.find(contents => contents.id === id);

        API.saveContent({
            contentId: content.id,
            headline: content.metadata.headline,
            authors: content.authors,
            description: content.metadata.description,
            image: content.thumbnails[3].url,
            tags: content.tags
        }).then(() => this.getContent());
    };

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
                        <Card title="Article Search" icon="far fa-book">
                            <Form 
                                // handleInputChange={this.handleInputChange}
                                handleFormSubmit={this.handleFormSubmit}
                                // q={this.state.q}
                            />
                        </Card>
                    </Col>
                </Row>
                <Row>
                    <Col size="md-12">
                        <Card title="Results">
                            {this.state.ignContent.length ? (
                                <List>
                                    {this.state.ignContent.map(content => (
                                        <Content 
                                            key={content.id}
                                            authors={content.metadata.authors}
                                            description={content.metadata.description}
                                            headline={content.metadata.headline}
                                            Button={() => (
                                                <button 
                                                    onClick={() => this.handleContentSave(content.id)} className="btn btn-primary ml-2"
                                                >Save
                                                </button>
                                            )}
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