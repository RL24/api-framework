import { APIRoute } from './api.route';
import { IRoute } from './route';

export * from './route';
export * from './api.route';

export const __routes: IRoute[] = [
    APIRoute.index()
];