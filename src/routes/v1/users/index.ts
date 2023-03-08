import express from "express";

const router = express.Router();

router.post('/users', async (req, res) => {

    const user = req.body;

    // salvar
    // obter o resultado (sucesso ou falha)
    // enviar resposta

    res.json({
        success: true,
        message: 'connected'
    });
});

export default router;
