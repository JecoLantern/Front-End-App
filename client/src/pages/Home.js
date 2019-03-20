import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import Card from "../components/Card";
import Content from "../components/Content"
import API from "../utils/API";
import { Col, Row, Container } from "../components/Grid";
import { List } from "../components/List";

class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            ignContent: [],
            q: ""
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

    render() {
        return (
            <Container>
                <Row>
                    <Col size="md-12">
                        <Jumbotron>
                            <h1 className="text-center">
                                <strong>IGN</strong>
                            </h1>
                            <h2 className="text-center">Your #1 destination for all video game news, expert reviews and walkthroughs.</h2>
                        </Jumbotron>
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
                                        />
                                    ))}
                                </List>
                            ) : (
                                <h2 className="text-center">{this.state.message}</h2>
                            )}
                        </Card>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default Home;