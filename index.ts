import * as MockRequest from "./src/MockRequest";
import * as MockStorage from "./src/MockStorage";
import * as MockContext from "./src/MockContext";

export namespace Mock {

    export import Request = MockRequest.MockRequest;
    export import Context = MockContext.MockContext;
    export import useStorage = MockStorage.useStorage;
    export import initializeStorage = MockStorage.initializeStorage;
}
