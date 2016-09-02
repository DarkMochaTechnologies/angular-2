import { Routes, RouterModule } from '@angular/router'
import RouteBuilder from '../builders/route.builder'

const routes = () => {
  let Route = new RouteBuilder()
  Route.route('', 'dashboard', {redirectTo: '/dashboard'})
  Route.route('dashboard', 'dashboard', {})
  return {
    routing: RouterModule.forRoot(Route.getAppRoutes()),
    routedComponents:  Route.getRoutedComponents()
  }
}

let routesFunction = routes()
console.log(routesFunction);
export const routing = routesFunction.routing
export const routedComponents = routesFunction.routedComponents