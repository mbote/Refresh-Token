
import {NextFunction, Request, Response} from "express";
import {verify} from "jsonwebtoken";

export function ensureAuthenticated(request: Request, response: Response, next: NextFunction){
    const authToken = request.headers.authorization;
    if(!authToken){
        return response.status(401).json({
            message: "Token is missing"
        })
    }
    const[, token] = authToken.split(" ");
    try{
        verify(token, "uiugeneratio")
        return next();
    }catch(err){
         response.status(401).json({
            message: "Token invalid"
         })
    }
}