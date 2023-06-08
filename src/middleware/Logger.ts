
import  * as winston from 'winston';
import  DailyRotateFile from 'winston-daily-rotate-file';
import fs from 'fs';
import path from 'path';
const logDir = 'log';
if(!fs.existsSync(logDir)) {
    fs.mkdirSync(logDir);
}
const { combine, label, json } = winston.format;
//DailyRotateFile 
const transport : DailyRotateFile = new DailyRotateFile({
    filename: `${logDir}/application-%DATE%.log`,
    datePattern: 'YYYY-MM-DD-HH',
    zippedArchive: true,
    maxSize: '20m',
    maxFiles: '14d'
})
transport.on('rotate',(_oldFile:any,_newFile:any)=>{
   
})
const logger = winston.createLogger({
  level: "debug",
  format: combine(label({ label: "logger" }), json()),
  transports:[
    transport
  ]
});
  export default logger


