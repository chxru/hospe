import { Injectable } from '@nestjs/common';
import { Novu } from '@novu/node';

const novu = new Novu(process.env.NOVU_KEY);

@Injectable()
export class NotificationService {
  async createNotification(trigger: string, userId: string, payload: any) {
    try {
      const res = await novu.trigger('account-created', {
        to: {
          subscriberId: userId,
          firstName: 'John',
          lastName: 'Doe',
          email: 'charuka@protonmail.com',
          phone: '+94778859503'
        },
        payload,
      })

      console.log(res.data, res.status)
    }
    catch (err) {
      console.log(err);
    }
  }
}
