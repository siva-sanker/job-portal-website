const express=require('express');
const { applyToJob, getMyApplications, getApplicantsForJob, 
        getApplicationById, updateStatus}= require('../controllers/applicationController');
const {protect}=require('../middlewares/authMiddleware');

const router=express.Router();
const upload=require('../middlewares/uploadMiddleware')

router.post('/:jobId',protect,upload.single('resume'),applyToJob);
router.get("/my",protect,getMyApplications);
router.get("/job/:jobId",protect,getApplicantsForJob);
router.get("/:id",protect,getApplicationById);
router.put("/:id/status",protect,updateStatus);

module.exports=router;