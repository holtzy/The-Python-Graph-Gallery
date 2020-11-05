/**
 * @module commutable
 */
import uuid from "uuid/v4";
import * as Immutable from "immutable";

export type ExecutionCount = number | null;

// Mutable JSON types
export type PrimitiveImmutable = string | number | boolean | null;
export type JSONType = PrimitiveImmutable | JSONObject | JSONArray;
export interface JSONObject {
  [key: string]: JSONType;
}
export interface JSONArray extends Array<JSONType> {}

export type CellId = string;
export const createCellId = (): CellId => uuid();

// On disk multi-line strings are used to accomodate line-by-line diffs in tools
// like git and GitHub. They get converted to strings for the in-memory format.
export type MultiLineString = string | string[];

export type ImmutableJSONType =
  | PrimitiveImmutable
  | ImmutableJSONMap
  | ImmutableJSONList;

// Can't (easily) write circularly referenced types so this'll have to do for now
export type ImmutableJSONMap = Immutable.Map<string, any>;
export type ImmutableJSONList = Immutable.List<any>;
