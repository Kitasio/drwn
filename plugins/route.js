import { auth } from './fireConf'
export default ({ app }) => {
    // Every time the route changes (fired on initialization too)

    app.router.beforeEach((to, from, next) => {
        auth.onAuthStateChanged(user => {
            if (to.name === 'admin' && !user) next({ name: 'login'})
            else next()
        })
    })
 }
 