from fastapi import FastAPI, status
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class Sesion(BaseModel):
    targetURL:str
    servicio:str
    comandos:list[dict]

@app.post('/executeSelenium', status_code=status.HTTP_202_ACCEPTED)
def seleniumExecutor(element: Sesion):
    return {"works":element}