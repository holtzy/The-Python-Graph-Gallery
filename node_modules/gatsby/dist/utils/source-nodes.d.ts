import { Span } from "opentracing";
declare const _default: ({ webhookBody, pluginName, parentSpan, deferNodeMutation, }: {
    webhookBody: unknown;
    pluginName?: string | undefined;
    parentSpan: Span;
    deferNodeMutation: boolean;
}) => Promise<void>;
export default _default;
