import { Routes, RouterModule } from '@angular/router';

interface GroupOptionProtocol {
   prefix?: String
}

interface RouteOptionProtocol {
  redirectTo?: String
  pathMatch?: String
}

class RouteBuilder {
    private appRoutes: Routes = []
    private groupName: String = ""
    private hasGroup: Boolean = false
    private routedComponents = []
    private rootPath: String = ""
    constructor() {
        this.rootPath = "../../"
    }

    getAppRoutes() {
        return this.appRoutes
    }

    getRoutedComponents() {
      return this.routedComponents
    }

    group(groupOptions: GroupOptionProtocol,  callback: Function) {
        let instance = Object.create(this)
        instance.hasGroup = true
        if (groupOptions.prefix && groupOptions.prefix != 'default' && groupOptions.prefix != "") {
            this.groupName = `${this.groupName}/${groupOptions.prefix}`;
        }

        callback(instance);
    }

    route(path: String, component?: String, routeOption: RouteOptionProtocol = {}) {
        this._clear();
        let routePath = this.groupName + '/' + path;
        let route: Object = { 
           path: routePath,
        }

        if(!!component) {
          let componentFile = require(`../modules${this.groupName}/${component}/${component}.component.js`).default
          Object.assign(route, {
            component: componentFile
          })
          this.routedComponents.push(componentFile)
        }

        Object.assign(route, routeOption) 
        this.appRoutes.push(route)
    }

    _clear() {
        if(!this.hasGroup) {
            this.groupName = "";
        }
    }
}

export default RouteBuilder