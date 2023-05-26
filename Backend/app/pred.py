import re
import nltk
import joblib
from nltk.corpus import stopwords
from nltk.tokenize import word_tokenize
from sklearn.feature_extraction.text import CountVectorizer

nltk.download('stopwords')


# Preprocessing steps
def preprocess_text(text):
    try:
        text = text.lower()
        text = re.sub(r'[^a-zA-Z\s]', '', text)
        text = re.sub(r'\d+', '', text)
        tokens = word_tokenize(text)
        stop_words = set(stopwords.words('english'))
        tokens = [word for word in tokens if word not in stop_words]
        preprocessed_text = ' '.join(tokens)

        return preprocessed_text
    except UnicodeDecodeError:
        return ''


# Load the saved model
vectorizer = joblib.load('Backend/count_vectorizer.pkl')
model = joblib.load('Backend/model.pkl')


def classify_text(text):
    preprocessed_text = preprocess_text(text)
    vectorized_text = vectorizer.transform([preprocessed_text])
    prediction = model.predict(vectorized_text)
    return prediction[0]
