/**
 * @module types
 */
import * as Immutable from "immutable";

import { ContentRef } from "../../refs";

export type DirectoryModelRecordProps = {
  type: "directory";
  sortedBy?: "created" | "lastSaved" | "type" | "name";
  groupedBy?: "type" | "mimetype";
  items: Immutable.List<ContentRef>;
};
export const makeDirectoryModel = Immutable.Record<DirectoryModelRecordProps>({
  type: "directory",
  items: Immutable.List()
});
export type DirectoryModelRecord = Immutable.RecordOf<
  DirectoryModelRecordProps
>;

export type DirectoryContentRecordProps = {
  mimetype: null;
  type: "directory";
  created: Date | null;
  format: "json";
  lastSaved: Date | null;
  filepath: string;
  model: DirectoryModelRecord;
};
export const makeDirectoryContentRecord = Immutable.Record<
  DirectoryContentRecordProps
>({
  mimetype: null,
  type: "directory",
  created: null,
  format: "json",
  lastSaved: null,
  filepath: "",
  model: makeDirectoryModel()
});
export type DirectoryContentRecord = Immutable.RecordOf<
  DirectoryContentRecordProps
>;
