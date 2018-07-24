import express from 'express';
import multipart from 'connect-multiparty';
import { createEvent, getAllEvent, getSingleEvent, deleteEvent } from '../controllers/event';
import { createUpdate, getSingleUpdate, getAllUpdate, deleteUpdate } from '../controllers/update';
import { createUser, userLogin, userProfile, getSingleUser, getAllUser } from '../controllers/user';
import { createComment, getAllComment } from '../controllers/comments';
import { createAlbum, getAllAlbum, getSingleAlbum, deleteAlbum } from '../controllers/album';
import verifyToken from '../middleware/verifytoken';

const router = express.Router();
const multipartMiddleware = multipart();

// Event Endpoint
router.post('/events', verifyToken, multipartMiddleware, createEvent);
router.get('/events', getAllEvent);
router.get('/events/:eventId', getSingleEvent);
router.delete('/events/:eventId', verifyToken, deleteEvent);

// Event Update Endpoint
router.post('/events/:eventId/updates', verifyToken, multipartMiddleware, createUpdate);
router.get('/events/:eventId/updates/', getAllUpdate);
router.get('/events/:eventId/updates/:updateId', getSingleUpdate);
router.delete('/events/:eventId/updates/:updateId', verifyToken, deleteUpdate);

// Update Comment Endpoint
router.post('/events/:eventId/updates/:updateId/comments', verifyToken, createComment);
router.get('/events/:eventId/updates/:updateId/comments', getAllComment);

// Album Endpoint
router.post('/albums', verifyToken, multipartMiddleware, createAlbum);
router.get('/albums', getAllAlbum);
router.get('/albums/:albumId', getSingleAlbum);
router.delete('/albums/:albumId', deleteAlbum);

// User Endpoint
router.post('/users/signup', createUser);
router.post('/users/login', userLogin);
router.get('/users/:userId', getSingleUser);
router.get('/users/', getAllUser);
router.put('/users/:userId/profile', verifyToken, multipartMiddleware, userProfile);

export default router;
