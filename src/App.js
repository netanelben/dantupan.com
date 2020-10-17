import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { ImageGallery, MusicVideos, Community } from './sections';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';

const App = () => (
    <div className="main">
        <h1>thetupan</h1>
        <Container fluid>
            <Row>
                <Col sm="12" md="4">
                    <ImageGallery/>
                </Col>
                <Col sm="12" md="4">
                    <MusicVideos/>
                </Col>
                <Col sm="12" md="4">
                    <Community/>
                </Col>
            </Row>
        </Container>
    </div>
);

export default App;
