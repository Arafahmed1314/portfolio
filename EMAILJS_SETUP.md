# EmailJS Setup Instructions

Follow these steps to make your contact form functional:

## 1. Create EmailJS Account
1. Go to https://www.emailjs.com/
2. Sign up for a free account
3. Verify your email address

## 2. Create Email Service
1. Go to Email Services tab
2. Click "Add New Service"
3. Choose your email provider (Gmail recommended)
4. Follow the setup instructions
5. Note down your SERVICE ID

## 3. Create Email Template
1. Go to Email Templates tab
2. Click "Create New Template"
3. Use this template content:

**Subject:** New Contact Form Message from {{from_name}}

**Content:**
```
Hello {{to_name}},

You have received a new message from your portfolio contact form:

Name: {{from_name}}
Email: {{from_email}}

Message:
{{message}}

Best regards,
Your Portfolio Contact Form
```

4. Save the template and note down your TEMPLATE ID

## 4. Get Public Key
1. Go to Account tab
2. Copy your Public Key

## 5. Update Environment Variables
Update your `.env.local` file with your actual credentials:

```
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_actual_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_actual_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_actual_public_key
```

## 6. Restart Development Server
After updating the environment variables, restart your development server:
```bash
npm run dev
```

## 7. Test the Contact Form
1. Fill out the contact form on your website
2. Submit the form
3. Check your email (nayemhasan1314@gmail.com) for the message

## Troubleshooting
- Make sure all environment variables are set correctly
- Check the browser console for any error messages
- Verify your EmailJS service is active
- Ensure your email template variables match the ones in the code

## Free Tier Limits
- EmailJS free tier allows 200 emails per month
- This should be sufficient for a portfolio website
- You can upgrade if needed later
