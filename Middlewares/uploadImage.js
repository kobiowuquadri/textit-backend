import multer from 'multer'
import path from 'path'


// Define storage for uploaded files
const storage = multer.diskStorage({
    destination: 'public/uploads',
    filename: (req, file, cb) => {
      cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
    },
  })
  
  // Initialize Multer with the storage configuration
export const upload = multer({ storage: storage })


