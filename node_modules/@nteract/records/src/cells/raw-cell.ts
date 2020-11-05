import produce from "immer";

import { MultilineString } from "../common";
import { JSONObject } from "../types";

export type RawCellType = "raw";
export const RAWCELL: RawCellType = "raw";

// In-memory version
type RawCell = {
  cellType: RawCellType,
  metadata: JSONObject,
  source: string
};

// On disk
export type NbformatRawCell = {
  cell_type: RawCellType,
  metadata: JSONObject,
  source: MultilineString
};

export type RawCellRecord = JSONObject;

export const makeRawCellRecord: Function = (rawCell: RawCell) => {
  const defaultRawCell = {
    cellType: "raw",
    metadata: {},
    source: ""
  };

  return produce(defaultRawCell, draft => Object.assign(draft, rawCell));
};

export function rawCellRecordFromNbformat(
  rawCell: NbformatRawCell
): RawCellRecord {
  return makeRawCellRecord({
    cellType: rawCell.cell_type,
    metadata: rawCell.metadata,
    source: rawCell.source
  });
}
