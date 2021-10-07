import * as MockRequest from "./MockRequest";
import * as MockStorage from "./MockStorage";
import * as MockContext from "./MockContext";

export namespace Mock {

    export import Request = MockRequest.MockRequest;
    export import Context = MockContext.MockContext;
    export import useStorage = MockStorage.useStorage;
    export import initializeStorage = MockStorage.initializeStorage;
}
