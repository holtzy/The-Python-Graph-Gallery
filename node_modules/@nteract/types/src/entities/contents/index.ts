/**
 * @module types
 */
import * as Immutable from "immutable";

import { ContentRef } from "../../refs";

import { NotebookContentRecord, NotebookModel } from "./notebook";
import { DirectoryContentRecord, DirectoryModelRecord } from "./directory";
import { DummyContentRecord, EmptyModelRecord } from "./dummy";
import { FileContentRecord, FileModelRecord } from "./file";

export * from "./notebook";
export * from "./directory";
export * from "./dummy";
export * from "./file";

export type ContentModel =
  | NotebookModel
  | DirectoryModelRecord
  | FileModelRecord
  | EmptyModelRecord;

export type ContentRecord =
  | NotebookContentRecord
  | DummyContentRecord
  | FileContentRecord
  | DirectoryContentRecord;

export type ContentsRecordProps = {
  byRef: Immutable.Map<ContentRef, ContentRecord>;
};

export const makeContentsRecord = Immutable.Record<ContentsRecordProps>({
  byRef: Immutable.Map<ContentRef, ContentRecord>()
});

export type ContentsRecord = Immutable.RecordOf<ContentsRecordProps>;
