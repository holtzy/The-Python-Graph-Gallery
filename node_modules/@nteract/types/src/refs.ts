/**
 * @module types
 */
import uuid from "uuid/v4";

export type HostRef = string;
export type KernelRef = string;
export type KernelspecsRef = string;
export type ContentRef = string;

export const createHostRef = (): HostRef => uuid();
export const createKernelRef = (): KernelRef => uuid();
export const createKernelspecsRef = (): KernelspecsRef => uuid();
export const createContentRef = (): ContentRef => uuid();
