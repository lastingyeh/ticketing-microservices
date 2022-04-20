import axios from 'axios';

const buildClient = ({ req }) => {
	if (typeof window === 'undefined') {
		return axios.create({
			baseURL:
      // modify to Whatever_your_purchased_domain_is
				'http://ingress-nginx-controller.ingress-nginx.svc.cluster.local',
			headers: req.headers,
		});
	}
	return axios.create({ baseURL: '/' });
};

export default buildClient;
