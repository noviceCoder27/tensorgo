import jwt from 'jsonwebtoken'
import User from './../models/user.js'


const requireAuth = async (req,res,next) => {
    const {authorization} = req.headers;
    if(!authorization) {
        const error = new Error("Unauthorized");
        error.status = 403;
        next(error);
    } else {
        const token = authorization.split(" ")[1];
        if(!token) {
            const error = new Error("Unauthorized");
            error.status = 403;
            next(error);
        } else {
            const idObj = jwt.verify(token,process.env.SECRET);
            const {userId: _id} = idObj;
            const user = await User.findById(_id);
            if(user) {
                req.headers["user"] = user;
                next();
            } else {
                const error = new Error("User not found");
                error.status = 404;
                next(error);
            }
        }
    }
}

export default requireAuth;