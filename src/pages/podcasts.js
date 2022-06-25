import React from 'react'
import {Row, Col,Container} from 'react-bootstrap'
import ReactPlayer from 'react-player'

export default function podcasts() {
  return (
    <Container>
      <h3>Our Podcasts</h3>
      <br/>
      <Row>
        <Col><ReactPlayer width={500} height={350} url='https://www.youtube.com/watch?v=ysz5S6PUM-U' /></Col>
        <Col><ReactPlayer width={500} height={350} url='https://www.youtube.com/watch?v=ysz5S6PUM-U' /></Col>
      </Row>
      <br/>
      <Row>
        <Col><ReactPlayer width={500} height={350} url='https://www.youtube.com/watch?v=ysz5S6PUM-U' /></Col>
        <Col><ReactPlayer width={500} height={350} url='https://www.youtube.com/watch?v=ysz5S6PUM-U' /></Col>
      </Row>
      <br/>
      <Row>
        <Col><ReactPlayer width={500} height={350} url='https://www.youtube.com/watch?v=ysz5S6PUM-U' /></Col>
        <Col><ReactPlayer width={500} height={350} url='https://www.youtube.com/watch?v=ysz5S6PUM-U' /></Col>
      </Row>
      <br/>
      <Row>
        <Col><ReactPlayer width={500} height={350} url='https://www.youtube.com/watch?v=ysz5S6PUM-U' /></Col>
        <Col><ReactPlayer width={500} height={350} url='https://www.youtube.com/watch?v=ysz5S6PUM-U' /></Col>
      </Row>
      <br/>
      <br/>
    </Container>
    )
}
