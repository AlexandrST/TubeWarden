import { Request, Response } from "express";
import { Op } from "sequelize";
import Video from "../../models/db/video";

export let about: (req: Request, res: Response) => any  = (req: Request, res: Response) => {
    res.render("about", { });
};
