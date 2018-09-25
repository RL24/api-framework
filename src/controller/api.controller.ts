import { IController } from "./controller";
import { Response, Request } from "express";

export class APIController {

    public static index(): IController {
        return {
            handler: (req: Request, res: Response) => {
                res.send(JSON.stringify({
                    status: 'success'
                }));
            }
        };
    }

}