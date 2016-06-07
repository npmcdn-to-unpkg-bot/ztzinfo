from .. import app
from flask import Blueprint
from flask import jsonify
from flask import make_response
from flask import redirect
from flask import render_template
from flask import request
from flask import url_for
from flask_mail import Mail
from flask_mail import Message


mail = Mail(app)


portfolio = Blueprint(
    'portfolio',
    __name__,
    static_folder='static'
    )

@portfolio.route('/')
def index():
    return portfolio.send_static_file('index.html')


@portfolio.route('/sendmail', methods=['GET', 'POST'])
def sendmail():
    print(request)
    if request.form.get('mailcontact'):
        name = request.form.get('mailname')
        contact = request.form.get('mailcontact')
        body = request.form.get('mailbody')
        sender_email = 'ztzservermail@gmail.com'

        try:
            msg = Message(
                 subject='Email do Portfólio de: {} email: {}'.format(
                    name, contact
                    ),
                 sender=sender_email,
                 recipients=[sender_email],
                 body=body
                 )
            mail.send(msg)
            # {'url': destination}, mimetype='text/json'
            return jsonify({
                'code': 200,
                'location': '#contact',
                'message': 'Your Mail has been sent successfully!!'
                })
        except Exception as error:
            print(error)
            return jsonify({
                'code': 500,
                'location': '#contact',
                'message': 'Message sending failed!!',
                'name': name,
                'contact': contact,
                'body': body
                })
