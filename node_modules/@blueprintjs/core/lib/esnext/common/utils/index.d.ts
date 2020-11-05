export * from "./compareUtils";
export * from "./domUtils";
export * from "./functionUtils";
export * from "./jsUtils";
export * from "./reactUtils";
export * from "./safeInvokeMember";
/**
 * Utils.getRef() was added to the public API in @blueprintjs/core@3.27.0,
 * but ref utils were refactored in the next version. We keep this additional
 * export around for backwards compatibility.
 * @see https://github.com/palantir/blueprint/pull/4140
 */
export { getRef } from "../refs";
