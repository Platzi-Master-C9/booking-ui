'use strict'

// Services
const { mathServices } = require('./useCases');

// Domains
const { MathModel } = require('./domains');

module.exports = {
	sumOperation: mathServices.sumOperation(MathModel),
}

export { ResultsPage } from './components/resultsPage/layout';
export { LandingPage } from './components/LandingPage/LandingPage';
