from selenium import webdriver
from selenium.webdriver.chrome.options import Options
import ctypes

def take_screenshot(url, save_path):
    chrome_options = Options()
    chrome_options.add_argument('--headless')  # Запуск в режиме без графического интерфейса
    chrome_options.add_argument('--no-sandbox')  # Избегаем ошибки с отсутствием sandox
    chrome_options.add_argument('--disable-dev-shm-usage')  # Избегаем ошибки с памятью
    chrome_options.add_argument('--disable-gpu')  # Отключаем использование GPU

    driver = webdriver.Chrome(options=chrome_options)

    try:
        driver.get(url)

        # Устанавливаем размер окна браузера согласно размерам страницы
        driver.set_window_size(1920, 1080)

        driver.save_screenshot(save_path)
    finally:
        driver.quit()

def set_wallpapers(absolute_wallpapers_path):
    ctypes.windll.user32.SystemParametersInfoW(20, 0, absolute_wallpapers_path, 0)


if __name__ == "__main__":
    url = "https://wallpapers-code.netlify.app/"
    save_path = "/Code/Projects/linux-active-desktop-parody/wallpapers.png"
    while True:
        take_screenshot(url, save_path)
        set_wallpapers("D:/Code/Projects/linux-active-desktop-parody/wallpapers.png");
