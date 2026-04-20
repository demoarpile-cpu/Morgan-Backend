const express = require('express');
const router = express.Router();
const { protect } = require('../middlewares/authMiddleware');
const { getTrips, createTrip, createRequest, getRequests, updateTrip, deleteTrip, approveRequest, deleteRequest, rejectRequest, updateLocation, startTrip } = require('../controllers/tripController');

// Standard Routes
router.get('/', protect, getTrips);
router.post('/', protect, createTrip);
router.patch('/:id', protect, updateTrip);
router.patch('/:id/start', protect, startTrip);
router.patch('/:id/location', protect, updateLocation);
router.delete('/:id', protect, deleteTrip);

// Requests Routes
router.post('/request', protect, createRequest);
router.get('/requests', protect, getRequests);
router.post('/requests/:id/approve', protect, approveRequest);
router.post('/requests/:id/reject', protect, rejectRequest);
router.delete('/requests/:id', protect, deleteRequest);

module.exports = router;
