import { HttpMethod, HttpRequest, HttpRequestHeaders, HttpRequestParams, HttpRequestQuery } from "@azure/functions";

export class MockRequest implements HttpRequest {
    method: HttpMethod;
    url: string;
    headers: HttpRequestHeaders;
    query: HttpRequestQuery;
    params: HttpRequestParams;
    body?: any;
    rawBody?: any;

    constructor(method: HttpMethod, body?: any, query?: HttpRequestQuery, headers?: HttpRequestHeaders) {
        this.method = method;
        this.headers = headers || {};
        this.body = body;
        this.query = query || {};
        this.params = {};
        this.url = "";
    }

    setUrl(url: string) {
        this.url = url;
    }

    setQuery(query: string, value: string) {
        this.query[query] = value;
    }

    setQueryObject(query: HttpRequestQuery) {
        this.query = query;
    }

    setParam(param: string, value: string) {
        this.params[param] = value;
    }

    setParams(params: HttpRequestParams) {
        this.params = params;
    }

    setHeader(header: string, value: string) {
        this.headers[header] = value;
    }

    setHeaders(headers: HttpRequestHeaders) {
        this.headers = headers;
    }
}
