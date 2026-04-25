import urllib.request
import os

os.makedirs('public/yt_thumbs', exist_ok=True)
video_ids = [
    '5k4mXxOxGGk',
    'YJEaIZrI_g0',
    '8is5xqlV_ds',
    '9ahjyTYy2ak',
    'b82chYLAk1o',
    'LN7ua7ua0AQ'
]

for vid in video_ids:
    maxres = f'https://i.ytimg.com/vi/{vid}/maxresdefault.jpg'
    hq = f'https://i.ytimg.com/vi/{vid}/hq720.jpg'  # usually shorts have hq720 or hqdefault
    fallback = f'https://i.ytimg.com/vi/{vid}/hqdefault.jpg'
    
    path = f'public/yt_thumbs/{vid}.jpg'
    
    try:
        urllib.request.urlretrieve(maxres, path)
        print(f"Downloaded maxres for {vid}")
    except Exception as e:
        try:
            urllib.request.urlretrieve(hq, path)
            print(f"Downloaded hq720 for {vid}")
        except Exception as e2:
            try:
                urllib.request.urlretrieve(fallback, path)
                print(f"Downloaded hqdefault for {vid}")
            except Exception as e3:
                print(f"Failed to download for {vid}: {e3}")
