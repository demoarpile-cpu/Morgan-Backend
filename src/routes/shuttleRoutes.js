const express = require('express');
const router = express.Router();
const {
  getShuttleLive,
  updateShift,
  updateTracking,
  updateLocation,
  getAdminShuttleDrivers,
} = require('../controllers/shuttleController');

router.get('/live', getShuttleLive);
router.post('/shift', updateShift);
router.patch('/tracking', updateTracking);
router.patch('/location', updateLocation);

router.get('/admin/drivers', getAdminShuttleDrivers);

module.exports = router;
