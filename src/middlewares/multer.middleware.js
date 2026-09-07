import multer from "multer";

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "./public/temp")
    },
    filename: function (req, file, cb) {

        cb(null, file.originalname) // ye tuh apun learning karee uske liye rakha hai,
        // production me apun ko unique name generate karna padega

        //production me apun aisa used karte 
        //filename: function (req, file, cb) {
        //cb(null, Date.now() + "-" + file.originalname)
    }

})

export const upload = multer({
    storage,
})