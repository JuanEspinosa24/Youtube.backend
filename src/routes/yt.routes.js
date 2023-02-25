import ytCtrl from "../controllers/yt.controller.js";
import { YtValid } from "../validSchemas/YtValid.js";

export const ytRoutes = (fastify, opts, done) => {
  fastify.post("/", { schema: YtValid }, ytCtrl.add);
  fastify.get("/", ytCtrl.listar);
  fastify.get("/:id", ytCtrl.listarById);
  fastify.put("/:id", ytCtrl.update);
  fastify.delete("/:id", ytCtrl.delete);

  done();
};
