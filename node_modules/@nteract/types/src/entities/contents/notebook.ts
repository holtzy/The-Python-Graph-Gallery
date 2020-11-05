/**
 * @module types
 */
import * as Immutable from "immutable";
import {
  ImmutableCell,
  ImmutableNotebook,
  emptyNotebook,
  CellId
} from "@nteract/commutable";

import { KernelRef } from "../..";

export type DocumentRecordProps = {
  type: "notebook";
  notebook: ImmutableNotebook;
  savedNotebook: ImmutableNotebook;
  transient: Immutable.Map<string, any>; // has the keypaths for updating displays
  // transient should be more fully typed (be a record itself)
  // right now it's keypaths and then it looks like it's able to handle any per
  // cell transient data that will be deleted when the kernel is restarted
  cellPagers: any;
  editorFocused?: CellId | null;
  cellFocused?: CellId | null;
  copied: ImmutableCell | null;
  kernelRef?: KernelRef | null;
};
export const makeDocumentRecord = Immutable.Record<DocumentRecordProps>({
  type: "notebook",
  notebook: emptyNotebook,
  savedNotebook: emptyNotebook,
  transient: Immutable.Map({
    keyPathsForDisplays: Immutable.Map()
  }),
  cellPagers: Immutable.Map(),
  editorFocused: null,
  cellFocused: null,
  copied: null,
  kernelRef: null
});
export type NotebookModel = Immutable.RecordOf<DocumentRecordProps>;

export type NotebookContentRecordProps = {
  mimetype?: string | null;
  created?: Date | null;
  format: "json";
  lastSaved?: Date | null;
  model: NotebookModel;
  filepath: string;
  type: "notebook";
  writable: boolean;
};

export const makeNotebookContentRecord = Immutable.Record<
  NotebookContentRecordProps
>({
  mimetype: null,
  created: null,
  format: "json",
  lastSaved: null,
  model: makeDocumentRecord(),
  filepath: "",
  type: "notebook",
  writable: true
});

export type NotebookContentRecord = Immutable.RecordOf<
  NotebookContentRecordProps
>;
