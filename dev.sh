#!/bin/bash
set -e

SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"

cleanup() {
  if [ -n "$BACKEND_PID" ]; then
    kill $BACKEND_PID 2>/dev/null || true
  fi
  if [ -n "$FRONTEND_PID" ]; then
    kill $FRONTEND_PID 2>/dev/null || true
  fi
}
trap cleanup EXIT

echo "=== Starting CloudNest Backend ==="
cd "$SCRIPT_DIR/backend" && npm run dev &
BACKEND_PID=$!
echo "Backend PID: $BACKEND_PID"

sleep 2

echo "=== Starting CloudNest Frontend ==="
cd "$SCRIPT_DIR" && npm run dev &
FRONTEND_PID=$!
echo "Frontend PID: $FRONTEND_PID"

wait
