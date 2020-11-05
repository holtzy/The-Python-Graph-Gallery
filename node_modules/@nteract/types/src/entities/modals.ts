/**
 * @module types
 */
import * as Immutable from "immutable";

export type ModalsRecordProps = { modalType: string };

export type ModalsRecord = Immutable.RecordOf<ModalsRecordProps>;

export const makeModalsRecord = Immutable.Record<ModalsRecordProps>({
  modalType: ""
});
