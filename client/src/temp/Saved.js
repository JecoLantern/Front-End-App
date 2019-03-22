import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import Card from "../components/Card";
import Content from "../components/Content";
import Footer from "../components/Footer";
import API from "../utils/API";
import { Col, Row, Container } from "../components/Grid";
import { List } from "../components/List";

class Saved extends Component {
    state = {
        ignContent: []
    };

    componentDidMount() {
        this.getSavedContent();
    }

    getSavedContent = () => {
        API.getSavedContent()
        .then(res =>
            this.state({ ignContent: res.data }))
            .catch(err => console.log(err));
    };

    handleContentDelete = id => {
        API.deleteSavedContent(id).then(res => this.getSavedContent());
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
                </Row>
                <Row>
                    <Col size="md-12">
                        <Card title="Saved Content" icon="download">
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
                                                    onClick={() => this.handleContentDelete(content.id)} className="btn btn-danger ml-2"
                                                >Delete
                                                </button>
                                            )}
                                        />
                                    ))}
                                </List>
                            ) : (
                                <h2 className="text-center">No Saved Content</h2>
                            )}
                        </Card>
                    </Col>
                </Row>
                <Footer />
            </Container>
        )
    }
}

export default Saved;