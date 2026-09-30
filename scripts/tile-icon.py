"""Put a bare icon (artwork only, transparent around it) on a macOS-style tile.

ServerBox's and GPTBox's `assets/app_icon.png` carry no tile of their own, and ServerBox's
macOS icon has a white tile with no edge, which disappears on a white page. This draws the
tile, edge and shadow so they sit next to MMetrics and MFuse.

uv run --with pillow scripts/tile-icon.py <src.png> <out.png> [content-scale]

content-scale is the artwork's longer side as a fraction of the tile (default 0.62).
"""
import sys
from PIL import Image, ImageChops, ImageDraw, ImageFilter

src, out = sys.argv[1], sys.argv[2]
scale = float(sys.argv[3]) if len(sys.argv) > 3 else 0.62

# Apple's macOS icon template, as in scripts/mfuse-icon.py: an 824px tile at (100, 100)
# with a ~185px corner radius on a 1024px canvas. Drawn at 4x and downsampled for smooth edges.
S = 4
N = 1024 * S
BOX = (100 * S, 100 * S, 924 * S - 1, 924 * S - 1)
RADIUS = 185 * S


def tile_mask(inset=0):
    mask = Image.new('L', (N, N), 0)
    box = (BOX[0] + inset, BOX[1] + inset, BOX[2] - inset, BOX[3] - inset)
    ImageDraw.Draw(mask).rounded_rectangle(box, RADIUS - inset, fill=255)
    return mask


mask = tile_mask()
canvas = Image.new('RGBA', (N, N), (0, 0, 0, 0))

# Soft shadow below the tile.
shadow = Image.new('RGBA', (N, N), (0, 0, 0, 0))
shadow.putalpha(mask.point(lambda v: v * 0.22))
shadow = ImageChops.offset(shadow, 0, 10 * S).filter(ImageFilter.GaussianBlur(14 * S))
canvas.alpha_composite(shadow)

# Near-white vertical gradient.
top, bottom = (255, 255, 255), (238, 238, 240)
gradient = Image.new('RGB', (1, N))
for y in range(N):
    t = min(max((y - BOX[1]) / (BOX[3] - BOX[1]), 0), 1)
    gradient.putpixel((0, y), tuple(round(a + (b - a) * t) for a, b in zip(top, bottom)))
fill = gradient.resize((N, N)).convert('RGBA')
fill.putalpha(mask)
canvas.alpha_composite(fill)

# 1px edge at the 256px output size: the ring between the tile and a 4px (1024px) inset.
edge_width = 4 * S
ring = ImageChops.subtract(mask, tile_mask(edge_width))
edge = Image.new('RGBA', (N, N), (0, 0, 0, 0))
edge.putalpha(ring.point(lambda v: v * 0.12))
canvas.alpha_composite(edge)

# Artwork, trimmed to its visible pixels and centred on the tile.
art = Image.open(src).convert('RGBA')
art = art.crop(art.getchannel('A').getbbox())
target = 824 * S * scale
factor = target / max(art.size)
art = art.resize((round(art.width * factor), round(art.height * factor)), Image.LANCZOS)
cx = cy = 512 * S
canvas.alpha_composite(art, (round(cx - art.width / 2), round(cy - art.height / 2)))

canvas.resize((256, 256), Image.LANCZOS).save(out, optimize=True)
