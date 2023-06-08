import express, { Request, Response } from "express";
const config = require('./config/AppConfig.json');
import logger from './middleware/Logger'
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.get("/", (req: Request, res: Response): Response => {
  return res.json({ message: "Sequelize Example 🤟" });
});
import routers from './routers/index'
app.use('/api',routers)
app.use('/test',(resq,resp)=>{
    return resp.send({
        "message":"Hello"
    })
})
const start = async (): Promise<void> => {
  try {
    app.listen(config.PORT, () => {
      logger.info(`Service Starting on port ${config.PORT}`);
    });
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

void start();