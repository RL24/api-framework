import { APIRoute } from './apiroute';
import { IRoute } from './route';

export * from './route';
export * from './apiroute';

export const __routes: IRoute[] = [
    APIRoute.index()
];