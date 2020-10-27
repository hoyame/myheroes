export const Storage = multer.diskStorage({
    destination(req, file, callback) {
      callback(null, './images')
    },

    filename(req, file, callback) {
      callback(null, `${file.fieldname}_${Date.now()}_${file.originalname}`)
    },
})

export const upload = multer({ storage: Storage })
