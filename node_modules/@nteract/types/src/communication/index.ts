/**
 * @module types
 */
import * as Immutable from "immutable";

import { ContentsCommunicationRecordProps } from "./contents";
import { KernelsCommunicationRecordProps } from "./kernels";
import { KernelspecsCommunicationRecordProps } from "./kernelspecs";
import { makeContentsCommunicationRecord } from "./contents";
import { makeKernelsCommunicationRecord } from "./kernels";
import { makeKernelspecsCommunicationRecord } from "./kernelspecs";

export * from "./contents";
export * from "./kernels";
export * from "./kernelspecs";

export type CommunicationRecordProps = {
  contents: Immutable.RecordOf<ContentsCommunicationRecordProps>;
  kernels: Immutable.RecordOf<KernelsCommunicationRecordProps>;
  kernelspecs: Immutable.RecordOf<KernelspecsCommunicationRecordProps>;
};

export const makeCommunicationRecord = Immutable.Record<
  CommunicationRecordProps
>({
  contents: makeContentsCommunicationRecord(),
  kernels: makeKernelsCommunicationRecord(),
  kernelspecs: makeKernelspecsCommunicationRecord()
});
