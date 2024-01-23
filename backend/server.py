from flask import Flask, jsonify
from flask_cors import CORS
import datetime


x = datetime.datetime.now()
#res=client.execute('SHOW DATABASES')
res ='default'
 
# Initializing flask app
app = Flask(__name__)
cors = CORS(app)
#app.config['CORS_HEADERS'] ='Content-Type'
 
# Route for seeing a data
@app.route('/', methods=['GET'])
def get_data():
 
    # Returning an api for showing in  reactjs
    return jsonify({
        'labelschartbe':['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        'labelspiebe':['Нужно позвонить', 'Предоставить скидку', 'Предложить другую услугу', 'Не нужно звонить', 'Не предоставлять скидку'],
        'labelsstackedbe':['Dataset1','Dataset2','Dataset3'],
        'datachartbe':'',
        'datapiebe':[120.0,1311,13.3,103.3,33.3],
        'datastackedbe':[133.6,120.5,12.0],
        'res':res,
        })


"""@app.route('/',methods=['GET'])
def getting_data():
    return {"res":res}
 """
     
# Running app
if __name__ == '__main__':
    app.run(host='0.0.0.0',port=5000,debug=True)
