import React from "react";
import "./contact.css";
import Button from "react-bootstrap/Button";

export default function Contact() {
  return (
    <div className="contactSection lightSection">
      <p className="contactTitle">Contact</p>
      <p className="contactText">
        This document is a work by{" "}
        <a href="https://www.yan-holtz.com">Yan Holtz</a>. Any feedback is
        highly encouraged. You can fill an issue on Github, drop me a message on
        Twitter, or send an email pasting yan.holtz.data with gmail.com.
      </p>
      <div>
        <Button size="xl" href="https://github.com/holtzy/python-graph-gallery">
          GITHUB
        </Button>
        <Button size="xl" href="https://twitter.com/R_Graph_Gallery">
          TWITTER
        </Button>
      </div>
    </div>
  );
}
