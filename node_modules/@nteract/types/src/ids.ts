/**
 * @module types
 */
export type HostId = string;
export type KernelId = string;
export type SessionId = string;

export const castToHostId = (id: string): HostId => id;
export const castToKernelId = (id: string): KernelId => id;
export const castToSessionId = (id: string): SessionId => id;
