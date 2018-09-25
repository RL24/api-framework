import { IRoute, RouteType } from './route';
import { APIController } from '../controller';

export class APIRoute {

    public static index(): IRoute {
        return {
            type: RouteType.GET,
            route: '/',
            controller: APIController.index()
        };
    }

}