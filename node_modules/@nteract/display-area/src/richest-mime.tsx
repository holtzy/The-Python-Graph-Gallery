import * as React from "react";
import {
  richestMimetype,
  transforms,
  displayOrder,
  Transforms
} from "@nteract/transforms";

import { Subject } from "rxjs";

type Props = {
  displayOrder: string[];
  transforms: { [key: string]: any };
  bundle: { [key: string]: any };
  metadata: { [key: string]: any };
  theme: string;
  models?: object;
  channels?: Subject<any>;
  onMetadataChange?: Function;
};

type ErrorInfo = {
  componentStack: string;
};

type State = {
  error: Error | null | undefined;
  info: ErrorInfo | null | undefined;
};

type FallbackProps = {
  componentStack: string;
  error: Error;
};

const Fallback = ({ componentStack, error }: FallbackProps) => (
  <div
    style={{
      backgroundColor: "ghostwhite",
      color: "black",
      fontWeight: 600,
      display: "block",
      padding: "10px",
      marginBottom: "20px"
    }}
  >
    <h3> Error: {error.toString()}</h3>
    <details>
      <summary>stack trace</summary>
      <pre>{componentStack}</pre>
    </details>
  </div>
);

export default class RichestMime extends React.Component<
  Props & React.HTMLAttributes<HTMLElement>,
  State
> {
  constructor(props: Props) {
    super(props);
    this.state = {
      error: null,
      info: null
    };
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    this.setState({ error, info });
  }

  static defaultProps = {
    transforms,
    displayOrder,
    theme: "light",
    metadata: {},
    bundle: {},
    models: {}
  };

  render() {
    if (this.state.error) {
      return (
        <Fallback
          componentStack={this.state.info ? this.state.info.componentStack : ""}
          error={this.state.error}
        />
      );
    }

    const mimetype = richestMimetype(
      this.props.bundle,
      this.props.displayOrder,
      this.props.transforms as Transforms
    );

    if (!mimetype) {
      // If no mimetype is supported, don't return an element
      return null;
    }

    // NOTE: When we transition to the compound component interface these should no longer be
    //       any (they were implicit any before based on prior code paths).
    //       Once the TypeScript migration is nearing completion we can clean this up.
    const Transform: any = this.props.transforms[mimetype];
    const data: any = this.props.bundle[mimetype];
    const metadata: any = this.props.metadata[mimetype];

    const onMetadataChangeScoped = (scopedChanges: any) =>
      this.props.onMetadataChange &&
      this.props.onMetadataChange({
        ...this.props.metadata,
        [mimetype]: scopedChanges
      });

    return (
      <Transform
        data={data}
        metadata={metadata}
        theme={this.props.theme}
        models={this.props.models}
        channels={this.props.channels}
        onMetadataChange={onMetadataChangeScoped}
      />
    );
  }
}
