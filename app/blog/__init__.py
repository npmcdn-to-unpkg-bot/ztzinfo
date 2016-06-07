from flask import Blueprint

blog = Blueprint(
    'blog',
    __name__,
    static_folder='static',
    )


@blog.route('/')
def index():
    return blog.send_static_file('index.html')


@blog.route('/post')
def post():
    'method Get'
    return 'Posts'


@blog.route('/posts/<int:id>')
def posts(id):
    'method post'
    return 'post {}'.format(id)
