import express from 'express';

const app = express();
const PORT = process.env.PORT || 3000;

app.set('view engine', 'pug');
app.use(express.static('public'));

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
