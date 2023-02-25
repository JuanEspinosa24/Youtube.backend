import { response } from "../helpers/Response.js";
import { ytModel } from "../models/yt.model.js";

const ytCtrl = {};

ytCtrl.listar = async (req, reply) => {
  try {
    const post = await ytModel.find();
    response(reply, 200, true, post, "lista de post ");
  } catch (error) {
    response(reply, 500, false, "", error.message);
  }
};
ytCtrl.listarById = async (req, reply) => {
  try {
    const { id } = req.params;

    const post = await ytModel.findById(id);

    if (!post) {
      return response(reply, 404, false, "", "Este post no fue encontrado");
    }

    response(res, 200, true, post, "Post encontrado");
  } catch (error) {
    response(reply, 500, false, "", error.message);
  }
};

ytCtrl.add = async (req, reply) => {
  try {
    if (req.file) {
      
    }
    console.log(req.body)

    const { title } = req.body;

    const newPost = new ytModel({
      ...req.body,
    });

    await ytModel.create(newPost);

    console.log(newPost);
    response(reply, 201, true, newPost, "post creado");
  } catch (error) {
    response(reply, 500, false, "", error.message);
  }
};

ytCtrl.delete = async (req, reply) => {
  try {
    const { id } = req.params;

    const post = await ytModel.findById(id);

    if (!post) {
      return response(
        reply,
        404,
        false,
        "",
        "Post no encontrado para eliminar"
      );
    }

    await post.deleteOne();

    response(reply, 200, true, "", "Post eliminado ");
  } catch (error) {
    response(reply, 500, false, "", error.message);
  }
};

ytCtrl.update = async (req, reply) => {
  try {
    const { id } = req.params;

    const post = await ytModel.findById(id);

    if (!post) {
      return response(reply, 404, false, "", "Post no encontrado al eliminar");
    }

    await post.updateOne(req.body);

    response(reply, 200, true, "", "Post actualizado correctamente");
  } catch (error) {
    response(reply, 500, false, "", error.message);
  }
};

export default ytCtrl;
