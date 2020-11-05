export type PrimitiveImmutable = string | boolean | null;
export type JSONType = PrimitiveImmutable | JSONObject | JSONArray;
export type JSONObject = { [key: string]: JSONType };
export interface JSONArray extends Array<JSONType> {}

export type ExecutionCount = number | null;

export type MimeBundle = JSONObject;

export type CellType = "markdown" | "code";
export type CellId = string;

// These are very unserious types, since Records are not quite typable
export type ImmutableNotebook = { [key: string]: any };
export type ImmutableCodeCell = { [key: string]: any };
export type ImmutableMarkdownCell = { [key: string]: any };
export type ImmutableRawCell = { [key: string]: any };
export type ImmutableCell = ImmutableCodeCell | ImmutableMarkdownCell;
export type ImmutableOutput = { [key: string]: any };
export type ImmutableOutputs = Array<ImmutableOutput>;

export type ImmutableMimeBundle = { [key: string]: any };

export type ImmutableCellOrder = Array<CellId>;
export type ImmutableCellMap = { [key: string]: any };
