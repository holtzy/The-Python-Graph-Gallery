import * as React from "react";
import Ansi from "ansi-to-react";
import { transforms, displayOrder, Transforms } from "@nteract/transforms";
import { isImmutable } from "immutable";

import { Subject } from "rxjs";

import RichestMime from "./richest-mime";

import { JSONObject } from "@nteract/commutable";

type Props = {
  displayOrder: Array<string>;
  output: any;
  transforms: Transforms;
  theme: string;
  models: Object;
  channels?: Subject<any>;
  metadata: Object;
  index: number;
  onMetadataChange?: (index: number, metadata: JSONObject) => void;
};

const classPrefix = "nteract-display-area-";

export default class Output extends React.Component<Props> {
  static defaultProps = {
    models: {},
    theme: "light",
    transforms,
    displayOrder,
    metadata: {}
  };

  shouldComponentUpdate(nextProps: Props) {
    return (
      // NOTE: this only does a shallow comparison that mostly only works
      //       well for Immutable Outputs
      nextProps.output !== this.props.output ||
      nextProps.displayOrder !== this.props.displayOrder ||
      nextProps.transforms !== this.props.transforms ||
      nextProps.theme !== this.props.theme ||
      nextProps.models !== this.props.models ||
      nextProps.channels !== this.props.channels
    );
  }

  render() {
    let output = this.props.output;
    let models = this.props.models;

    // TODO: Incorporate the new output record types into both commutable and the react components that use them
    if (isImmutable(output)) {
      output = output.toJS();
    }
    if (isImmutable(models)) {
      models = models.toJS();
    }

    const outputType = output.output_type;

    switch (outputType) {
      case "execute_result":
      // We can defer to display data here, the cell number will be handled
      // separately. For reference, it is output.execution_count
      // The execution_count belongs in the component above if
      // this is a code cell

      // falls through
      case "display_data": {
        const bundle = output.data;
        const metadata = output.metadata;

        const boundMetadataChange =
          this.props.onMetadataChange &&
          this.props.onMetadataChange.bind(null, this.props.index);

        return (
          <RichestMime
            bundle={bundle}
            metadata={metadata}
            displayOrder={this.props.displayOrder}
            transforms={this.props.transforms}
            theme={this.props.theme}
            models={models}
            channels={this.props.channels}
            onMetadataChange={boundMetadataChange}
          />
        );
      }
      case "stream": {
        const text = output.text;
        const name = output.name;
        switch (name) {
          case "stdout":
          case "stderr":
            return (
              <Ansi linkify={false} className={classPrefix + name}>
                {text}
              </Ansi>
            );
          default:
            return null;
        }
      }
      case "error": {
        const traceback = output.traceback;
        if (!traceback) {
          return (
            <Ansi linkify={false} className={classPrefix + "traceback"}>{`${
              output.ename
            }: ${output.evalue}`}</Ansi>
          );
        }
        return (
          <Ansi linkify={false} className={classPrefix + "traceback"}>
            {traceback.join("\n")}
          </Ansi>
        );
      }
      default:
        return null;
    }
  }
}
