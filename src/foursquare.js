import nodeFoursquare from 'node-foursquare';

const config = {
  secrets: {
    clientId:
      process.env.FOURSQUARE_CLIENT ||
      'AODC5A444UPVXB5PNAGQ0504XBS5XVLR3BJ5HWFRL5A2I251',
    clientSecret:
      process.env.FOURSQUARE_SECRET ||
      '3EBKF4B11EUAW0B5GRZA5TEQJOXXMZ4BETZS2HRB3IQK2GQN',
    redirectUrl: process.env.FOURSQUARE_REDIRET_URL || '',
  },
};

const Foursquare = nodeFoursquare(config).Venues;

export default Foursquare;
