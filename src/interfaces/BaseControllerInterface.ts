import { Request, Response } from "express";

interface BaseControllerInterface {
    [key: string]: (req: Request, res: Response) => void;
}

export default BaseControllerInterface;