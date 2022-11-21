import { Router } from "express";
import { UsersRoutes } from "./users-routes";

const router: Router = Router();

router.use("/user", UsersRoutes);

export const MainRouter: Router = router;
