import { IController } from "../controller";

export enum RouteType {
    GET = 'get',
    HEAD = 'head',
    POST = 'post',
    PUT = 'put',
    DELETE = 'delete',
    CONNECT = 'connect',
    OPTIONS = 'options',
    TRACE = 'trace',
    PATCH = 'patch'
}

export interface IRoute {
    type: RouteType;
    route: string;
    controller: IController;
}