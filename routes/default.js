import { getRouter } from '@thewebchimp/primate';

const router = getRouter();

router.get('/', (req, res) => {
    res.respond({
       data: {
          message: 'Jupiter Swap API is up and running! 🚀',
       },
    });
});

export { router };
