from fastapi import FastAPI, status
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from seleniumScript import Navigator
from appiumScript import NavigatorAppium
from selenium import webdriver
from appium import webdriver as appiumWebdriver
from appium.webdriver.common.appiumby import AppiumBy
from selenium.common.exceptions import TimeoutException

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
    except TimeoutException:
        print('no fncia')

    return {"works":element}

@app.post('/executeAppium', status_code=status.HTTP_202_ACCEPTED)
def appiumExecutor(element:Sesion):

    capabilities = {
    "appium:deviceName": "ZTE Blade A3 2020",
    "appium:udid": "320514062002",
    "platformName": "Android",
    "appium:platformVersion": "9"
    }

    try:
        # # result = NavigatorAppium(command_executor='http://127.0.0.1:4723/wd/hub', driver=driver)
        # result = NavigatorAppium(command_executor='http://127.0.0.1:4723/wd/hub', desired_capabilities=driver)
        # result.initialArguments(element.targetURL, element.comandos)
        # result.executeDefaultRoutine()

        driver = NavigatorAppium('http://127.0.0.1:4723/wd/hub', capabilities)
        print(driver)
        driver.implicitly_wait(30)
        driver.initialArguments(element.comandos)
        driver.executeDefaultRoutine()

        

    except TimeoutException:
        print('No funciona')

    return {"works":"works"}