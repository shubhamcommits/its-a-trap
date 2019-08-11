const sendErr = (res, err, message, status) => {
    // eslint-disable-next-line no-console
    console.log(`\n⛔️ Error:\n ${err}`);
  
    return res.status(status || 500).json({
      message: message || 'Internal server error!',
      err
    });
  };
  
  module.exports = sendErr;
  