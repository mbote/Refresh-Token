//import "express-async-errors";
import expess, {Request, Response, NextFunction} from "express";
import { router } from "./routes"

const app = expess();

app.use(expess.json());

app.use(router);

app.use((error: Error, request: Request, response: Response, next: NextFunction) => {
    return response.json({
        status: "Error",
        message: error.message
    })
})

app.listen(3000, () => console.log('server is running on port 3000'))


