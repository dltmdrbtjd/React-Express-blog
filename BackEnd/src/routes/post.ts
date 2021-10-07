import express, { Request, Response } from 'express';
import Post from '../models/post';

const router = express.Router();

router.post('/', (req: Request, res: Response) => {
  const { title, content, category, tags } = req.body;

  const time = Date.now() + 9 * 60 * 60 * 1000;

  Post.create({ title, content, category, tags, time })
    .then(() => {
      res.sendStatus(201);
    })
    .catch((err) => {
      console.error(err);
      res.status(400).json({
        errorMessage: '게시글 작성에 실패하였습니다',
      });
    });
});

router.get('/', (req: Request, res: Response) => {
  Post.find((err, data) => {
    if (err) {
      return res
        .status(500)
        .send({ errorMessage: '게시글 불러오기에 실패했습니다.' });
    }
    res.json(data.reverse());
  });
});

router.get('/:postId', (req: Request, res: Response) => {
  const { postId } = req.params;
  Post.findOne({ _id: postId }, (err: Error, data: any) => {
    if (err) {
      return res
        .status(500)
        .send({ errorMessage: '게시글 불러오기에 실패했습니다.' });
    }
    res.json(data);
  });
});
export default router;
