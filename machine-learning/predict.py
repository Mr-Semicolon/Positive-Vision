import pickle
import re
import sys

cEXT = pickle.load( open( "D:/positive-vision/machine-learning/data/models/cEXT.p", "rb"))
cNEU = pickle.load( open( "D:/positive-vision/machine-learning/data/models/cNEU.p", "rb"))
cAGR = pickle.load( open( "D:/positive-vision/machine-learning/data/models/cAGR.p", "rb"))
cCON = pickle.load( open( "D:/positive-vision/machine-learning/data/models/cCON.p", "rb"))
cOPN = pickle.load( open( "D:/positive-vision/machine-learning/data/models/cOPN.p", "rb"))
vectorizer_31 = pickle.load( open( "D:/positive-vision/machine-learning/data/models/vectorizer_31.p", "rb"))
vectorizer_30 = pickle.load( open( "D:/positive-vision/machine-learning/data/models/vectorizer_30.p", "rb"))

def predict_personality(text):
    scentences = re.split("(?<=[.!?]) +", text)
    text_vector_31 = vectorizer_31.transform(scentences)
    text_vector_30 = vectorizer_30.transform(scentences)
    EXT = cEXT.predict(text_vector_31)
    NEU = cNEU.predict(text_vector_30)
    AGR = cAGR.predict(text_vector_31)
    CON = cCON.predict(text_vector_31)
    OPN = cOPN.predict(text_vector_31)
    return [EXT[0], NEU[0], AGR[0], CON[0], OPN[0]]
text = sys.argv[1]
predictions = predict_personality(text)
print("predicted personality:", predictions)
