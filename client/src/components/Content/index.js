import React from "react";
import { ListItem } from "../List";
import { Row, Col } from "../Grid";
// import "./style.css";

function Content({ contentId, title, headline, description, image, comment}) {
    return (
        <ListItem>
            <Row className="flex-wrap-reverse">
                <Col size="md-8">
                    <h3 className="font-italic">{title}</h3>
                    <h3 className="font-italic">{headline}</h3>
                </Col>
            </Row>
            <Row>
                <Col size="12 sm-4 md-2">
                    <img className="img-thumbnail img-fluid w-100" src={image} alt={contentId} />
                </Col>
                <Col size="12 sm-8 md-10">
                    <p id="describe">{description}</p>
                    <hr></hr>
                    <p>{comment}</p>
                </Col>
            </Row>
        </ListItem>
    );
}

export default Content;