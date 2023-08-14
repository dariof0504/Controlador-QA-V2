from fastapi import FastAPI, status
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from seleniumScript import Navigator
from selenium import webdriver

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
    comandos:list

@app.post('/executeSelenium', status_code=status.HTTP_202_ACCEPTED)
def seleniumExecutor(element: Sesion):

    webdriver_url = 'http://localhost:4444/wd/hub'
    chromeOptions = webdriver.ChromeOptions()

    try:
        result = Navigator(command_executor=webdriver_url, options=chromeOptions)
        result.initialArguments(element.targetURL, element.comandos)
        result.executeDefaultRoutine()
    except AssertionError:
        print('no fncia')

    return {"works":element}