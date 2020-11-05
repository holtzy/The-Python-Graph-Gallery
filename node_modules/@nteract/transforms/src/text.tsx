import React from "react";
import Ansi from "ansi-to-react";

type Props = {
  data: string;
  mediaType: "text/plain";
};

export default class TextDisplay extends React.PureComponent<Props> {
  static MIMETYPE = "text/plain";

  static defaultProps = {
    data: "",
    mediaType: "text/plain"
  };

  render() {
    return (
      <pre>
        <Ansi linkify={false}>{this.props.data}</Ansi>
      </pre>
    );
  }
}
