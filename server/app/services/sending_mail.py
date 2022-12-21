import os
import smtplib, ssl
from email.message import EmailMessage

senders_email = os.environ.get("EMAIL")
email_password = os.environ.get("EMAIL_PASSWORD")

def send_mail(_email, subject, text):
    try:
        msg = EmailMessage()
        msg['subject'] = subject
        msg['from'] = senders_email
        msg['to'] = _email
        msg.set_content(text)

        context = ssl.create_default_context()

        with smtplib.SMTP('smtp.mail.ru', 587) as smtp:
            smtp.starttls(context=context)
            smtp.login(senders_email, email_password)
            smtp.send_message(msg)
        status = "true"
    except Exception as ex:
        print(f"Email error -> '{ex}'")
    return status