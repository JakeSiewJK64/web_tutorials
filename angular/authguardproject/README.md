Auth-Guard Service:
1. injects authservice and router and has a single method called canActivate.
2. method is necessary to implement canActivate interface.
3. canActivate returns a boolean indicating whether or not navigation to a route should be allowed.