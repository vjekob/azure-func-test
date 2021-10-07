import { BindingDefinition, Context, ContextBindingData, ContextBindings, ExecutionContext, HttpRequest, Logger, TraceContext } from "@azure/functions"

export class MockContext implements Context {
    invocationId: string;
    executionContext: ExecutionContext;
    bindingData: ContextBindingData = {};
    traceContext: TraceContext = {
        traceparent: null,
        tracestate: null,
        attributes: {}
    };
    bindingDefinitions: BindingDefinition[] = [];
    req: HttpRequest;
    bindings: ContextBindings = {};
    log = jest.fn() as unknown as Logger;
    done = jest.fn();
    res: any = {
        status: 200,
        body: undefined,
    };

    constructor(req: HttpRequest) {
        this.req = req;
        this.res = {
            status: 200,
            body: undefined
        };
        this.invocationId = `Math.round(Math.random * 1000000)`;
        this.executionContext = {
            invocationId: this.invocationId,
            functionDirectory: "",
            functionName: ""
        };
    }
}
