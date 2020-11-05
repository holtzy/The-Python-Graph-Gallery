/**
 * @module types
 */
import * as Immutable from "immutable";

import { KernelspecsRef } from "../refs";

export type KernelspecsByRefCommunicationRecordProps = {
  loading: boolean;
  error?: Object | null;
};

export const makeKernelspecsByRefCommunicationRecord = Immutable.Record<
  KernelspecsByRefCommunicationRecordProps
>({
  loading: false,
  error: null
});

export type KernelspecsCommunicationRecordProps = {
  byRef: Immutable.Map<
    KernelspecsRef,
    Immutable.RecordOf<KernelspecsByRefCommunicationRecordProps>
  >;
};

export const makeKernelspecsCommunicationRecord = Immutable.Record<
  KernelspecsCommunicationRecordProps
>({
  byRef: Immutable.Map()
});
