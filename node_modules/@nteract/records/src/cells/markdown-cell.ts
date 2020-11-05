import produce from "immer";

import { MultilineString } from "../common";
import { JSONObject } from "../types";

export type MarkdownCellType = "markdown";
export const MARKDOWNCELL: MarkdownCellType = "markdown";

// In-memory version
type MarkdownCell = {
  cellType: MarkdownCellType,
  metadata: JSONObject,
  source: string
};

// On disk
export type NbformatMarkdownCell = {
  cell_type: MarkdownCellType,
  metadata: JSONObject,
  source: MultilineString
};

export type MarkdownCellRecord = JSONObject;

export const makeMarkdownCellRecord: Function = (
  markdownCell: MarkdownCell
) => {
  const defaultMarkdownCell = {
    cellType: "markdown",
    metadata: {},
    source: ""
  };

  return produce(defaultMarkdownCell, draft =>
    Object.assign(draft, markdownCell)
  );
};

export function markdownCellRecordFromNbformat(
  markdownCell: NbformatMarkdownCell
): MarkdownCellRecord {
  return makeMarkdownCellRecord({
    cellType: markdownCell.cell_type,
    metadata: markdownCell.metadata,
    source: markdownCell.source
  });
}
