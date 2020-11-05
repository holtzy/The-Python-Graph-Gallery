import produce from "immer";
import uuid from "uuid/v4";

import {
  NbformatCell,
  NbformatCodeCell,
  CodeCellType,
  MarkdownCellType,
  NbformatMarkdownCell,
  CODECELL,
  MARKDOWNCELL
} from "./cells";
import { NbformatOutput } from "./outputs";
import {
  ImmutableNotebook,
  ImmutableCellOrder,
  ImmutableCellMap,
  ExecutionCount
} from "./types";

export type v4NotebookVersionType = 4;
export const v4NotebookVersion: v4NotebookVersionType = 4;

// We're hardset to nbformat v4.4 for what we use in-memory
export interface Notebook {
  nbformat: v4NotebookVersionType;
  nbformat_minor: v4NotebookVersionType;
  metadata: object;
  cellOrder: Array<string>;
  cellMap: object;
}

export interface CodeCell {
  cell_type: CodeCellType;
  metadata: object;
  execution_count: ExecutionCount;
  source: string;
  outputs: Array<NbformatOutput>;
}

export interface MarkdownCell {
  cell_type: MarkdownCellType;
  source: string;
  metadata: object;
}

const defaultCodeCell = {
  cell_type: CODECELL,
  execution_count: null,
  metadata: {
    collapsed: false,
    outputHidden: false,
    inputHidden: false
  },
  source: "",
  outputs: []
};

const defaultMarkdownCell = {
  cell_type: MARKDOWNCELL,
  metadata: {},
  source: ""
};

export function createCodeCell(
  cell: CodeCell = defaultCodeCell
): NbformatCodeCell {
  return produce(defaultCodeCell, draft => Object.assign(draft, cell));
}

export function createMarkdownCell(
  cell: MarkdownCell = defaultMarkdownCell
): NbformatMarkdownCell {
  return produce(defaultMarkdownCell, draft => Object.assign(draft, cell));
}

export const emptyCodeCell = createCodeCell();
export const emptyMarkdownCell = createMarkdownCell();

export const defaultNotebook = {
  nbformat: v4NotebookVersion,
  nbformat_minor: v4NotebookVersion,
  metadata: new Object(),
  cellOrder: [],
  cellMap: new Object()
};

export function createNotebook(
  notebook: Notebook = defaultNotebook
): ImmutableNotebook {
  return produce(defaultNotebook, draft => Object.assign(draft, notebook));
}

export const emptyNotebook = createNotebook();

export interface CellStructure {
  cellOrder: ImmutableCellOrder;
  cellMap: ImmutableCellMap;
}

// Intended to make it easy to use this with (temporary mutable cellOrder + cellMap)
export function appendCell(
  cellStructure: CellStructure,
  immutableCell: NbformatCell,
  id: string = uuid()
) {
  cellStructure.cellMap[id] = immutableCell;
  return {
    cellOrder: cellStructure.cellOrder.push(id),
    cellMap: cellStructure.cellMap
  };
}

export function appendCellToNotebook(
  immnb: ImmutableNotebook,
  immCell: NbformatCell
): ImmutableNotebook {
  const cellStructure: CellStructure = {
    cellOrder: immnb["cellOrder"],
    cellMap: immnb["cellMap"]
  };
  const { cellOrder, cellMap } = appendCell(cellStructure, immCell);
  immnb["cellOrder"] = cellOrder;
  immnb["cellMap"] = cellMap;
  return immnb;
}

export function insertCellAt(
  notebook: ImmutableNotebook,
  cell: NbformatCell,
  cellId: string,
  index: number
): ImmutableNotebook {
  notebook["cellMap"][cellId] = cell;
  notebook["cellOrder"][index] = cellId;
  return notebook;
}

export function insertCellAfter(
  notebook: ImmutableNotebook,
  cell: NbformatCell,
  cellId: string,
  priorCellId: string
): ImmutableNotebook {
  return insertCellAt(
    notebook,
    cell,
    cellId,
    notebook["cellOrder"].indexOf(priorCellId) + 1
  );
}

// Deprecation Warning: removeCell() is being deprecated. Please use deleteCell() instead
export function removeCell(notebook: ImmutableNotebook, cellId: string) {
  console.log(
    "Deprecation Warning: removeCell() is being deprecated. Please use deleteCell() instead"
  );
  delete notebook["cellMap"][cellId];
  notebook["cellOrder"] = notebook["cellOrder"].filter(
    (id: string) => id !== cellId
  );
  return notebook;
}

export function deleteCell(notebook: ImmutableNotebook, cellId: string) {
  delete notebook["cellMap"][cellId];
  notebook["cellOrder"] = notebook["cellOrder"].filter(
    (id: string) => id !== cellId
  );
  return notebook;
}

export const monocellNotebook = appendCellToNotebook(
  emptyNotebook,
  emptyCodeCell
);
