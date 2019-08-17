const init = () => {
    process.env.NODE_ENV = 'development';
    process.env.PORT = '3000';
    process.env.host = `http://localhost:${process.env.PORT}/`;
    //process.env.dbURL = 'mongodb://shubham:shubham123@ds161397.mlab.com:61397/trap';
    process.env.dbURL = 'mongodb://127.0.0.1:27017/trap';
    process.env.JWT_KEY = 'thisissecret';
    process.env.FILE_UPLOAD_FOLDER = `${__dirname}/uploads/`;
  };
  
  module.exports = { init };
  