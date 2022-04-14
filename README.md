```
npm i
npm run build
```

Output:

~~~
> build
> prisma generate && next build

Prisma schema loaded from prisma/schema.prisma

✔ Generated Prisma Client (3.12.0 | library) to ./node_modules/@prisma/client in 1.03s
You can now start using Prisma Client in your code. Reference: https://pris.ly/d/client
```
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()
```
info  - Checking validity of types  
warn  - No ESLint configuration detected. Run next lint to begin setup
info  - Creating an optimized production build  
info  - Compiled successfully
info  - Collecting page data .../node_modules/@prisma/client/runtime/index.js:41350
            throw new PrismaClientInitializationError(error2.message, this.config.clientVersion, error2.error_code);
                  ^

PrismaClientInitializationError: error: Environment variable not found: DATABASE_URL.
  -->  schema.prisma:8
   | 
 7 |   provider = "postgresql"
 8 |   url      = env("DATABASE_URL")
   | 

Validation Error Count: 1
    at Object.loadEngine (.../node_modules/@prisma/client/runtime/index.js:41350:19)
    at processTicksAndRejections (node:internal/process/task_queues:96:5)
    at async Object.instantiateLibrary (.../node_modules/@prisma/client/runtime/index.js:41279:5) {
  clientVersion: '3.12.0',
  errorCode: 'P1012'
}
info  - Collecting page data  
info  - Generating static pages (2/2)
info  - Finalizing page optimization  

Page                                       Size     First Load JS
┌ ○ /404                                   192 B          72.7 kB
├ λ /api/boards/list                       0 B            72.5 kB
└ λ /Boards                                565 B          73.1 kB
+ First Load JS shared by all              72.5 kB
  ├ chunks/framework-0e90cbf53d3785fb.js   42 kB
  ├ chunks/main-164920eac96bc1c7.js        28.3 kB
  ├ chunks/pages/_app-9a4e0bcfd9f9bf48.js  1.36 kB
  └ chunks/webpack-69bfa6990bb9e155.js     769 B

λ  (Server)  server-side renders at runtime (uses getInitialProps or getServerSideProps)
○  (Static)  automatically rendered as static HTML (uses no initial props)
~~~
