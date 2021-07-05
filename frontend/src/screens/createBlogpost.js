import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

export default function createBlogpost() {
  return (
    <div>
      <div className="container">
        <h1>Create BlogPost</h1>
        <br></br>
        <br></br>

        <Form>
          <Form.Group>
            <Form.Label>Image</Form.Label>
            <Form.Control
              className="formcourse"
              type="text"
              placeholder="Upload Image"
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Titele</Form.Label>
            <Form.Control
              className="formcourse"
              type="text"
              placeholder="Title"
            />
          </Form.Group>

          <Form.Group>
            <Form.Label>Content</Form.Label>
            <Form.Control
              className="formcoursed formcourse"
              type="text"
              placeholder="Write your content here!"
            />
          </Form.Group>

          <Button className="formcourse" variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    </div>
  );
}
