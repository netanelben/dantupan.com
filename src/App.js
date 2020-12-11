import React from 'react';
// import { Container, Row, Col } from 'reactstrap';
// import { ImageGallery, MusicVideos, Community } from './sections';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';

const App = () => (
    <div className="main">
        <h1 style={{ fontSize: '58px' }}>Dan Tupan</h1>
        <iframe title="soundcloud"
            allowTransparency="true"
            scrolling="no" frameBorder="no"
            src="https://w.soundcloud.com/icon/?url=http%3A%2F%2Fsoundcloud.com%2Fuser-446627522&color=white_orange&size=64"
            style={{ width: '64px', height: '64px' }}/>

        <div style={{ paddingTop: '10em' }}>
            <p style={{ textAlign: 'center', fontSize: '18px', color: 'purple' }}>
                ⌰⟊⎅⎎⊑⏃⌰☍⌇⊑⟊⎅⌰☍⏃⟊⌇⎅⌰☍⏃⟊⌇⎅☍⌰⏃⟊⌇⎅
                <br/>
                ⏃⟊⋏⌇☍⎅⊑⏃⌇⌰☍⟊⎅⊑⏃☍⌇⎅⊑☍⏃⟊⌇⊑⎅
            </p>
            {/* https://lingojam.com/AlienLanguage */}
        </div>
        {/* <Container fluid>
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
        </Container> */}
    </div>
);

export default App;
