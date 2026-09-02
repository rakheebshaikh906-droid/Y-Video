import express from 'express';

const app = express();

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true
}));

app.use(express.json({ limit: '50mb' }));
//files se data lena rehta isliye used karte apun

app.use(express.urlencoded({ extended: true, limit: '50mb' }));
//url se data lena rehta isliye used karte apun

app.use(express.static('public'));
//jab pdf, images, videos, etc. ka data lena rehta hai to use karte apun

app.use(cookieParser());

export default app;