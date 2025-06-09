from selenium import webdriver
from selenium.webdriver.chrome.options import Options

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

if __name__ == "__main__":
    url = "https://wallpapers-code.netlify.app/"
    save_path = "/usr/share/backgrounds/code.png"
    while True:
        take_screenshot(url, save_path)
