#!/bin/sh
set -eu

ASSETS="src/assets"
PUBLIC="public"

need_cmd() {
  if ! command -v "$1" >/dev/null 2>&1; then
    echo "Warning: $1 not found — skipping media optimization (pre-optimized assets will be used)" >&2
    return 1
  fi
}

if ! need_cmd ffmpeg || ! need_cmd cwebp; then
  if [ -f "$ASSETS/video-04.mp4" ]; then
    cp "$ASSETS/video-04.mp4" "$PUBLIC/video-04.mp4"
    echo "  published: $PUBLIC/video-04.mp4 (unoptimized)"
  fi
  echo "==> Media optimization skipped"
  exit 0
fi

optimize_to_webp() {
  src="$1"
  max_width="${2:-1280}"
  quality="${3:-82}"
  [ -f "$src" ] || return 0
  out="${src%.*}.webp"
  cwebp -q "$quality" -resize "$max_width" 0 "$src" -o "$out"
  echo "  optimized: $out"
}

optimize_product_webp() {
  src="$1"
  quality="${2:-85}"
  [ -f "$src" ] || return 0
  out="${src%.*}.webp"
  tmp="${src%.*}.opt.png"
  ffmpeg -y -loglevel error -i "$src" \
    -vf "scale=1024:1024:force_original_aspect_ratio=decrease:flags=lanczos" \
    "$tmp"
  cwebp -q "$quality" "$tmp" -o "$out"
  rm -f "$tmp"
  echo "  optimized: $out"
}

max_width_for_asset() {
  case "$1" in
    *logo*|*Logo*|*LOGO*)
      echo 400
      ;;
    *product-*)
      echo 800
      ;;
    *hero-industrial*)
      echo 1920
      ;;
    *logo1*|*logo1-dark*)
      echo 320
      ;;
    *climatizacao*|*DJI*|*1000152246*|*Screenshot*)
      echo 1280
      ;;
    *)
      echo 1024
      ;;
  esac
}

echo "==> Compressing hero video (MP4)"
if [ -f "$ASSETS/video-04.mp4" ]; then
  ffmpeg -y -loglevel error -i "$ASSETS/video-04.mp4" \
    -vf "scale='min(1280,iw)':-2" \
    -c:v libx264 -crf 34 -preset slow -an -movflags +faststart \
    "$ASSETS/video-04.optimized.mp4"
  mv "$ASSETS/video-04.optimized.mp4" "$ASSETS/video-04.mp4"
  cp "$ASSETS/video-04.mp4" "$PUBLIC/video-04.mp4"
  rm -f "$ASSETS/video-04.webm"
  echo "  published: $PUBLIC/video-04.mp4"
fi

echo "==> Optimizing hero poster + OG image"
if [ -f "$ASSETS/hero-industrial.jpg" ]; then
  cwebp -q 82 -resize 1920 0 "$ASSETS/hero-industrial.jpg" -o "$ASSETS/hero-industrial.webp"
  ffmpeg -y -loglevel error -i "$ASSETS/hero-industrial.jpg" -q:v 4 "$ASSETS/hero-industrial.opt.jpg"
  mv "$ASSETS/hero-industrial.opt.jpg" "$ASSETS/hero-industrial.jpg"
  cp "$ASSETS/hero-industrial.jpg" "$PUBLIC/og-colder-climatizadores.jpg"
  cwebp -q 80 -resize 1200 0 "$PUBLIC/og-colder-climatizadores.jpg" -o "$PUBLIC/og-colder-climatizadores.webp"
fi

echo "==> Optimizing src/assets images"
find "$ASSETS" -type f \( -iname "*.png" -o -iname "*.jpg" -o -iname "*.jpeg" \) \
  ! -iname "*.webp" | sort | while IFS= read -r img; do
  max_width="$(max_width_for_asset "$img")"
  optimize_to_webp "$img" "$max_width" 82
done

echo "==> Optimizing public product images"
find "$PUBLIC" -type f \( -iname "*.png" -o -iname "*.jpg" -o -iname "*.jpeg" \) \
  ! -iname "*.webp" ! -name "robots.txt" | sort | while IFS= read -r img; do
  optimize_product_webp "$img" 85
done

echo "==> Media optimization complete"
