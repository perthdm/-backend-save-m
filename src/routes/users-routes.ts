import { NextFunction, Request, Response, Router } from "express";
const router: Router = Router();

router.get("/test", (req: Request, res: Response) => {
  console.log(req.body);
  res.json({
    items: [
      {
        id: 1,
        firstname: "eakkasit",
        lastname: "praprutkittorn",
        age: 25,
        job: "dev",
      },
      {
        id: 2,
        firstname: "supisara",
        lastname: "prasitinawa",
        age: 25,
        job: "dev",
      },
    ],
    total: 2,
  });
});

export const UsersRoutes: Router = router;
