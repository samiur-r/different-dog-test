const express = require('express');
const controller = require('../../controllers/customer.controller');

const router = express.Router();


router
  .route('/')
  /**
   * @api {get} v1/customers List Customer
   * @apiDescription Get a list of customers
   * @apiVersion 1.0.0
   * @apiName ListCustomers
   * @apiGroup Customer
   *
   * @apiHeader {String} Authorization   User's access token
   * @apiSuccess {Object[]} users List of customers.
   */
  .get(controller.list)

module.exports = router;
