from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from . import pred

import json

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"], 
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# minimal app - gete request
@app.get("/",tags=['ROOT'])
async def root():
    return {"Hello": "World"}

# # get 
@app.get("/get",tags=['pred'])
async def get():
    return {"data":"hello"}

class MyData(BaseModel):
    text: str
    
# Post
@app.post("/predict",tags=['pred'])
async def post(data: MyData):
    text = data.json()
    text = text[len('{"text: " '):- len('"}')]
    prediction = pred.classify_text(text)
    
    print("Text:", text)
    print("Prediction:", prediction)
    return {
            "status":"Success",
            "prediction":prediction
            }

 
# # Update
# @app.put("/update/{id}",tags=['todos'])
# async def update(id, body):
#     return {}

# @app.delete("/update/{id}",tags=['todos'])
# async def update(id):
#     return {}
    
