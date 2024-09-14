import express, { Request, Response } from 'express';
import cors from 'cors';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());

app.get('/', (req: Request, res: Response) => {
    res.send('Hello from API');
});

app.get('/api', (req: Request, res: Response) => {
    res.send('Hello from API1!');
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
