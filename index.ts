import {app} from './app'
import './db'


const main = ()=>{
    app.listen(app.get("PORT_WEB"))
    console.log("el servidor esta en el puert", app.get("PORT_WEB"))
}


main()