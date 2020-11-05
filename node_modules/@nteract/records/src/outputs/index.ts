import { JupyterMessage } from "@nteract/messaging";

import {
  NbformatDisplayDataOutput,
  DisplayDataOutput
} from "./display-data";
import { NbformatStreamOutput, StreamOutput } from "./stream";
import { NbformatErrorOutput, ErrorOutput } from "./error";
import {
  NbformatExecuteResult,
  ExecuteResultOutput
} from "./execute-result";
import { UnrecognizedOutput } from "./unrecognized";
import { unrecognized } from "./unrecognized";
import { displayData, DisplayDataMessage } from "./display-data";
import { streamOutput, StreamMessage } from "./stream";
import { errorOutput, ErrorMessage } from "./error";
import { executeResult, ExecuteResultMessage } from "./execute-result";

export * from "./append-output";

export type NbformatOutput =
  | NbformatStreamOutput
  | NbformatDisplayDataOutput
  | NbformatExecuteResult
  | NbformatErrorOutput;

export type OutputType =
  | StreamOutput
  | DisplayDataOutput
  | ExecuteResultOutput
  | ErrorOutput
  | UnrecognizedOutput;

export {
  StreamOutput,
  ErrorOutput,
  ExecuteResultOutput,
  DisplayDataOutput
};

/**
 * Turn any output that was in nbformat into a record
 */
export function outputFromNbformat(output: NbformatOutput): OutputType {
  switch (output.output_type) {
    case streamOutput.type:
      return streamOutput.fromNbformat(output as NbformatStreamOutput);
    case displayData.type:
      return displayData.fromNbformat(output as NbformatDisplayDataOutput);
    case executeResult.type:
      return executeResult.fromNbformat(output as NbformatExecuteResult);
    case errorOutput.type:
      return errorOutput.fromNbformat(output as NbformatErrorOutput);
    default:
      return unrecognized.fromNbformat(output) as UnrecognizedOutput;
  }
}

/**
 * Turn any output from a JupyterMessage into a record
 */
export function outputFromMessage(msg: JupyterMessage): OutputType {
  const msg_type = msg.header.msg_type;
  switch (msg_type) {
    case streamOutput.type:
      return streamOutput.fromJupyterMessage(msg as StreamMessage);
    case displayData.type:
      return displayData.fromJupyterMessage(msg as DisplayDataMessage);
    case executeResult.type:
      return executeResult.fromJupyterMessage(msg as ExecuteResultMessage);
    case errorOutput.type:
      return errorOutput.fromJupyterMessage(msg as ErrorMessage);
    default:
      return unrecognized.fromJupyterMessage(msg) as UnrecognizedOutput;
  }
}
