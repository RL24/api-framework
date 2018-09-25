# Express API Framework

![](https://forthebadge.com/images/badges/designed-in-ms-paint.svg)

## Dependencies

| Dependency |
|------------|
| TypeScript |
| Express |
| TS-Node |
`npm install`

## Usage

### Routes
To create a route, create a new file in the `src/route` directory, with the following code.
This will create the route handler for http requests that fit the type criteria.
```js
export class HomeRoute {
    public static index(): IRoute {
        return {
            type: RouteType.GET,
            route: '/',
            controller: HomeController.index()
        };
    }
}
```
To simplify the route registration process, we can add our newly created route to the list of routes in the `src/route/index.ts` file. This route array is accessed by the root `app.ts` file when the application starts.
```js
export const __routes: IRoute[] = [
    ...
    HomeRoute.index()
];
```
Once your new route is in place, you need to create a controller so the application knows what to do when the route is activated. To create a controller, create a new file in the `src/controller` directory, with the following code.
```js
export class HomeController {
    public static index(): IController {
        return {
            handler: (req: Request, res: Response) => {
                res.send('This is my home page');
            }
        };
    }
}
```
The following command will use TS-Node to run your application.
`npm run ts`
