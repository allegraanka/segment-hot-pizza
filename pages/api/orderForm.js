// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import SegmentAnalytics from 'analytics-node';
const analytics = new SegmentAnalytics(process.env.SEGMENT_WRITE_KEY);

export default function handler(req, res) {
  const body = req.body;
  console.log('body: ', body);

  analytics.track({
    anonymousId: '0987654321',
    event: 'Checkout Started',
    properties: {
      serviceMethod: body.serviceMethod,
      streetAddress: body.address,
      city: body.city,
      state: body.state,
      zip: body.zip,
      orderTime: body.orderTime,
      size: body.size,
      toppings: body.toppings,
      price: body.price
    }
  })

  res.status(200).json({ data: `${body.serviceMethod} ORDER FOR ${body.address}` })
}
