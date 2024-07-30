import { env } from 'process'

interface UserContactEmailProps {
  userName: 'string'
  email: 'string'
  date: any
  message: 'string'
  phoneNumber: 'string'
}

export const touristContactForm = ({
  userName,
  email,
  date,
  message,
  phoneNumber,
}: UserContactEmailProps) => {
  const imageUrl = `${env.PAYLOAD_URL}/images/about/banner_img.png`
  return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Tourist Contact Form Submission</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 0;
            background-color: #f4f4f4;
        }
        .container {
            max-width: 600px;
            margin: 50px auto;
            background-color: #ffffff;
            padding: 20px;
            border-radius: 8px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        }
        .header {
            background-color: #4CAF50;
            color: white;
            padding: 10px 20px;
            text-align: center;
            border-radius: 8px 8px 0 0;
        }
        .content {
            padding: 20px;
        }
        .content h2 {
            color: #333;
        }
        .content p {
            margin: 10px 0;
            color: #555;
        }
        .footer {
            text-align: center;
            padding: 10px;
            font-size: 12px;
            color: #aaa;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>Contact Form Submission</h1>
        </div>
        <div class="content">
            <h2>Contact Details</h2>
            <p><strong>Name:</strong> ${userName}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Phone Number:</strong> ${phoneNumber}</p>
            <p><strong>Tour Date:</strong> ${date}</p>
             <p><strong>Message:</strong> ${message}</p>
        </div>
        <div class="footer">
            <p>This email was generated from a Tourist contact form submission.</p>
        </div>
    </div>
</body>
</html>
`
}
