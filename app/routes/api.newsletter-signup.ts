import { json } from '@remix-run/node';
import { Resend } from 'resend';
import { db } from '~/utils/db.server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function action({ request }: { request: Request }) {
  if (request.method !== 'POST') {
    return json({ error: 'Method not allowed' }, { status: 405 });
  }

  const formData = await request.formData();
  const email = formData.get('email');

  if (typeof email !== 'string' || !email) {
    return json({ error: 'Invalid email' }, { status: 400 });
  }

  try {
    await db.subscriber.create({
      data: { email },
    });

    await resend.emails.send({
      from: 'Your App <onboarding@resend.dev>',
      to: email,
      subject: 'Welcome to our newsletter!',
      html: '<p>Thanks for signing up for our newsletter!</p>'
    });

    return json({ success: true });
  } catch (error) {
    console.error('Error signing up for newsletter:', error);
    
    if (error.code === 'P2002' && error.meta?.target?.includes('email')) {
      return json({ error: 'This email is already subscribed' }, { status: 400 });
    }
    
    return json({ error: 'Failed to sign up for newsletter' }, { status: 500 });
  }
}
