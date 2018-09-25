import { RequestHandlerParams } from "express-serve-static-core";

export interface IController {
    handler: RequestHandlerParams
}