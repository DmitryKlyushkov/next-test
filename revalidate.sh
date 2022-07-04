curl "https://next-test-woad-one.vercel.app/api/revalidate" \
  -X POST \
  -H "Content-Type: application/json" \
  -d "[\"/users/1\"]"