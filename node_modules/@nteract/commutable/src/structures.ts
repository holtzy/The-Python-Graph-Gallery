/**
 * @module commutable
 */
import uuid from "uuid/v4";

import { CellId, createCellId } from "./primitives";

import { makeNotebookRecord, ImmutableNotebook } from "./notebook";

import { makeCodeCell, makeMarkdownCell, ImmutableCell } from "./cells";

import { Map as ImmutableMap, List as ImmutableList } from "immutable";

// The cell creators here are a bit duplicative
export const createCodeCell = makeCodeCell;
export const createMarkdownCell = makeMarkdownCell;

export const emptyCodeCell = createCodeCell();
export const emptyMarkdownCell = createMarkdownCell();

// These are all kind of duplicative now that we're on records.
// Since we export these though, they're left for
// backwards compatiblity
export const defaultNotebook = makeNotebookRecord();
export const createNotebook = makeNotebookRecord;
export const emptyNotebook = makeNotebookRecord();

export type CellStructure = {
  cellOrder: ImmutableList<CellId>;
  cellMap: ImmutableMap<CellId, ImmutableCell>;
};

/**
 * A function that appends a new cell to a CellStructure object.
 * 
 * @param cellStructure The cellOrder and cellMap of the current notebook
 * @param immutableCell The cell that will be inserted into the cellStructure
 * @param id The id of the new cell, defaults to a new UUID
 * 
 * @returns Cell structure with the new cell appended at the end
 */
export const appendCell = (
  cellStructure: CellStructure,
  immutableCell: ImmutableCell,
  id: CellId = createCellId()
): CellStructure => ({
  cellOrder: cellStructure.cellOrder.push(id),
  cellMap: cellStructure.cellMap.set(id, immutableCell)
});

/**
 * A function that appends a cell to an immutable notebook.
 * 
 * @param immnb An immutable data structure representing the notebook that will be modified
 * @param immCell The new cell that will be inserted into the notebook
 * 
 * @returns The modified notebook
 */
export const appendCellToNotebook = (
  immnb: ImmutableNotebook,
  immCell: ImmutableCell
): ImmutableNotebook =>
  immnb.withMutations(nb => {
    const cellStructure: CellStructure = {
      cellOrder: nb.get("cellOrder"),
      cellMap: nb.get("cellMap")
    };
    const { cellOrder, cellMap } = appendCell(cellStructure, immCell);
    return nb.set("cellOrder", cellOrder).set("cellMap", cellMap);
  });

  /**
   * Inserts a cell with cellID at a given index within the notebook.
   * 
   * @param notebook The notebook the cell will be inserted into.
   * @param cell The cell that will be inserted
   * @param cellID The ID of the cell.
   * @param index The position we would like to insert the cell at
   * 
   * @returns The modified notebook.
   */
export const insertCellAt = (
  notebook: ImmutableNotebook,
  cell: ImmutableCell,
  cellId: string,
  index: number
): ImmutableNotebook =>
  notebook.withMutations(nb =>
    nb
      .setIn(["cellMap", cellId], cell)
      .set("cellOrder", nb.get("cellOrder").insert(index, cellId))
  );

/**
 * Inserts a new cell with cellID before an existing cell with priorCellID
 * in the notebook.
 * 
 * @param notebook The notebook the cell will be inserted into.
 * @param cell The cell that will be inserted
 * @param cellID The ID of the cell.
 * @param priorCellID The ID of the existing cell.
 */
export const insertCellAfter = (
  notebook: ImmutableNotebook,
  cell: ImmutableCell,
  cellId: string,
  priorCellId: string
): ImmutableNotebook =>
  insertCellAt(
    notebook,
    cell,
    cellId,
    notebook.get("cellOrder").indexOf(priorCellId) + 1
  );

/**
 * Delete a cell with CellID at a given location. Note that this function
 * is deprecated in favor of `deleteCell`.
 *  
 * @param notebook The notebook containing the cell.
 * @param cellID The ID of the cell that will be deleted.
 * 
 * @returns The modified notebook
 * 
 * @deprecated use `deleteCell()` instead
 */
export const removeCell = (
  notebook: ImmutableNotebook,
  cellId: string
): ImmutableNotebook => {
  console.log(
    "Deprecation Warning: removeCell() is being deprecated. Please use deleteCell() instead"
  );

  return deleteCell(notebook, cellId);
};

/**
 * Delete a cell with CellID at a given location.
 *  
 * @param notebook The notebook containing the cell.
 * @param cellID The ID of the cell that will be deleted.
 * 
 * @returns The modified notebook
 */
export const deleteCell = (
  notebook: ImmutableNotebook,
  cellId: string
): ImmutableNotebook =>
  notebook
    .removeIn(["cellMap", cellId])
    .update("cellOrder", cellOrder => cellOrder.filterNot(id => id === cellId));

/**
 * A new notebook with a single empty code cell. This function is useful
 * if you are looking to initialize a fresh, new notebook.
 */
export const monocellNotebook = appendCellToNotebook(
  emptyNotebook,
  emptyCodeCell
);
