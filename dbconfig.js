const config = {
  user: "sa", // sql user
  password: "david", //sql user password
  server: "localhost", // if it does not work try- 127.0.0.1
  database: "Academic",
  options: {
    trustedconnection: true,
    enableArithAbort: true,
    instancename: "SQLEXPRESS", // SQL Server instance name
    trustServerCertificate: true,
  },
  
  port: 55690, //55690
};

module.exports = config;