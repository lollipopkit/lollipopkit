"""Derive src/assets/icons/mfuse.png from the MFuse app icon, which ships without an alpha channel.

uv run --with pillow scripts/mfuse-icon.py <mfuse>/MFuse/Assets.xcassets/AppIcon.appiconset/app_icon_512x512@2x.png src/assets/icons/mfuse.png
"""
import sys
from PIL import Image, ImageDraw, ImageChops
src, out = sys.argv[1], sys.argv[2]
im = Image.open(src).convert('RGB')
assert im.size == (1024, 1024)
g = im.convert('L')
# Apple's macOS icon template: an 824px tile at (100, 100) with a ~185px corner radius.
s = 4
mask = Image.new('L', (1024 * s, 1024 * s), 0)
ImageDraw.Draw(mask).rounded_rectangle((100 * s, 100 * s, 924 * s, 924 * s), 185 * s, fill=255)
mask = mask.resize((1024, 1024), Image.LANCZOS)
# Outside the tile the background is white: make it transparent and keep the drop shadow as translucent black.
alpha = ImageChops.lighter(mask, ImageChops.invert(g))
rgb = Image.composite(im, Image.new('RGB', im.size, (0, 0, 0)), mask)
res = rgb.convert('RGBA')
res.putalpha(alpha)
res.resize((256, 256), Image.LANCZOS).save(out, optimize=True)
