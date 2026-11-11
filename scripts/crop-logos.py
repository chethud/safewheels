from pathlib import Path
import numpy as np
from PIL import Image, ImageOps

src = Path(
    r"C:\Users\HARSHITH V MALIPATIL\.cursor\projects\c-Users-HARSHITH-V-MALIPATIL-OneDrive-Desktop-chethu-workspace-safewheels\assets\image-7af4948f-b413-463d-a741-6ce7f6beff7b.png"
)
im = Image.open(src).convert("RGB")
out_dir = Path("public/images/clientele")
out_dir.mkdir(parents=True, exist_ok=True)
for p in out_dir.glob("*.png"):
    p.unlink()

# Equal 4-column splits with margins tuned from brochure photo
left, right = 18, 558
rows = [
    (398, 490, ["beml", "lt", "lg", "manipal"]),
    (505, 610, ["narayana", "forward", "bel", "jss"]),
    (700, 790, ["karnataka-tourism", "incredible-india", "aicr", "iato"]),
    (805, 890, ["taai", "skal", "kts", "tafi"]),
]


def ink_mask(rgb: np.ndarray, thresh: int = 232) -> np.ndarray:
    return (rgb[:, :, 0] < thresh) | (rgb[:, :, 1] < thresh) | (rgb[:, :, 2] < thresh)


def save_logo(name: str, box: tuple[int, int, int, int]) -> None:
    crop = im.crop(box)
    rgb = np.asarray(crop).astype(np.int16)
    mask = ink_mask(rgb)
    rows_ink = np.where(mask.any(axis=1))[0]
    cols_ink = np.where(mask.any(axis=0))[0]
    if len(rows_ink) and len(cols_ink):
        # keep a little padding around detected ink
        t = max(0, int(rows_ink[0]) - 4)
        b = min(crop.height, int(rows_ink[-1]) + 5)
        l = max(0, int(cols_ink[0]) - 4)
        r = min(crop.width, int(cols_ink[-1]) + 5)
        crop = crop.crop((l, t, r, b))
    crop = ImageOps.autocontrast(crop, cutoff=0.8)
    scale = 3
    crop = crop.resize((max(1, crop.width * scale), max(1, crop.height * scale)), Image.Resampling.LANCZOS)
    pad = 32
    canvas = Image.new("RGB", (crop.width + pad * 2, crop.height + pad * 2), (255, 255, 255))
    canvas.paste(crop, (pad, pad))
    path = out_dir / f"{name}.png"
    canvas.save(path, optimize=True)
    print("wrote", path.name, canvas.size, "from", box)


for y0, y1, names in rows:
    span = right - left
    cell = span / 4
    for i, name in enumerate(names):
        x0 = int(left + i * cell)
        x1 = int(left + (i + 1) * cell)
        # inward nudge to reduce neighbor bleed
        save_logo(name, (x0 + 4, y0, x1 - 4, y1))

print("done")
