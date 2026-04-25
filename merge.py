from PIL import Image

img1 = Image.open(r"C:\Users\HP\.gemini\antigravity\brain\be69e5e7-fc58-42b3-b977-54a10f6110c2\media__1777095258450.jpg")
img2 = Image.open(r"C:\Users\HP\.gemini\antigravity\brain\be69e5e7-fc58-42b3-b977-54a10f6110c2\media__1777095263961.jpg")

width = max(img1.width, img2.width)
h1 = int(img1.height * (width / img1.width))
h2 = int(img2.height * (width / img2.width))

img1 = img1.resize((width, h1), Image.LANCZOS)
img2 = img2.resize((width, h2), Image.LANCZOS)

dst = Image.new('RGB', (width, h1 + h2))
dst.paste(img1, (0, 0))
dst.paste(img2, (0, h1))

dst.save(r"C:\website building\Portfolio\harshitha-Portfolio\public\startup-meet.jpg")
print("Saved startup-meet.jpg")
