npx prisma init
npx prisma migrate dev --name init
npx prisma studio
npx tsx ./db/seed.ts


npm i @neondatabase/serverless @prisma/adapter-neon ws
npm i -D @types/ws bufferutil